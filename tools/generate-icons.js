import pascalCase from 'just-pascal-case';
import camelCase from 'just-camel-case';
import del from 'del';
import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import { optimize } from 'svgo';

const inputSVGFolder = path.resolve('public/img');
const outputReactIconFolder = path.resolve('src/js/icons');

// Figma converts colors to their color names. Convert them back to hex codes.
// We do this so the rules in StyledIcon work. '#' indicates a fill or stroke
// is desired. Otherwise, it is treated like 'none'.
function convertColors(text) {
  if (text === 'black') return '#000';
  if (text === 'white') return '#FFF';
  return text;
}

const excludeAttributes = /^id$/;
function getNodeAttributes(node) {
  return node.$
    ? Object.keys(node.$)
        .filter((key) => !excludeAttributes.test(key))
        .map(
          (attrKey) =>
            `${camelCase(attrKey)}="${convertColors(node.$[attrKey])}"`,
        )
    : undefined;
}
function parseNode(node) {
  if (node && !/^(title|defs|desc)$/.test(node['#name'])) {
    const attributes = getNodeAttributes(node);
    const children = [];
    (node.$$ || []).forEach((child) => children.push(parseNode(child)));
    return node.$$
      ? `<${node['#name']}${
          attributes ? ` ${attributes.join(' ')}` : ''
        }>${children.join('')}</${node['#name']}>`
      : `<${node['#name']}${attributes ? ` ${attributes.join(' ')}` : ''} />`;
  }
  return undefined;
}

function buildIcon(fileName, svgChildren, viewBox) {
  const children = [];
  svgChildren.forEach((child) => {
    const node = parseNode(child);
    if (node) {
      children.push(node);
    }
  });
  return `import React, { forwardRef } from 'react';

import { StyledIcon } from '../StyledIcon';

const ${pascalCase(fileName)} = forwardRef((props, ref) => (
  <StyledIcon ref={ref} viewBox="${viewBox}" a11yTitle="${pascalCase(
    fileName,
  )}" {...props}>
    ${children.join('')}
  </StyledIcon>
));

${pascalCase(fileName)}.displayName = '${pascalCase(fileName)}';

export { ${pascalCase(fileName)} };
`;
}
const optimizeSvg = (svg) => {
  const optimized = optimize(svg, {
    multipass: true,
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            // viewBox is required to resize SVGs with CSS.
            // @see https://github.com/svg/svgo/issues/1128
            removeViewBox: false,
          },
        },
      },
    ],
  });
  return optimized.data;
};

function createReactIcon(fileName, content) {
  return new Promise((resolve) => {
    const parser = new xml2js.Parser({
      normalize: true,
      normalizeTags: true,
      explicitArray: true,
      explicitChildren: true,
      preserveChildrenOrder: true,
    });
    parser.addListener('end', (result) => {
      resolve(buildIcon(fileName, result.svg.$$, result.svg.$.viewBox));
    });
    parser.parseString(optimizeSvg(content));
  });
}

fs.readdir(inputSVGFolder, (err, icons) => {
  if (err) {
    throw err;
  }
  del.sync([outputReactIconFolder]);
  fs.mkdirSync(outputReactIconFolder);
  const iconNames = [];
  icons.forEach((icon) => {
    if (/\.svg$/.test(icon)) {
      const iconPath = path.join(inputSVGFolder, icon);
      let fileName = icon.replace('.svg', '');
      fileName = fileName.replace(/^(.)|(-([a-z0-9]))+/g, (g) =>
        g.length > 1 ? g[1].toUpperCase() : g.toUpperCase(),
      );
      const content = fs.readFileSync(iconPath, 'utf8');
      iconNames.push(pascalCase(fileName));

      createReactIcon(fileName, content).then((reactIcon) => {
        const destinationFile = path.resolve(
          outputReactIconFolder,
          `${fileName}.js`,
        );
        fs.writeFileSync(destinationFile, reactIcon);
      });
    }
  });

  iconNames.push('Blank');

  fs.copyFileSync(
    `${path.resolve('./tools/icons')}/Blank.js`,
    `${outputReactIconFolder}/Blank.js`,
  );

  const destinationImportFile = path.resolve(outputReactIconFolder, 'index.js');
  fs.writeFileSync(
    destinationImportFile,
    `${iconNames.map((n) => `export * from './${n}';`).join('\n')}\n`,
  );

  const destinationTypesFile = path.resolve(
    outputReactIconFolder,
    'index.d.ts',
  );
  fs.writeFileSync(
    destinationTypesFile,
    `import * as React from "react";

export interface IconProps {
  a11yTitle?: string;
  color?: string;
  size?: "small" | "medium" | "large" | "xlarge" | string;
}

export type Icon = React.ComponentType<IconProps & JSX.IntrinsicElements['svg']>;

${iconNames.map((n) => `export declare const ${n}: Icon;`).join('\n')}
`,
  );
});
