import camelCase from 'camel-case';
import del from 'del';
import fs from 'fs';
import pascalCase from 'pascal-case';
import path from 'path';
import xml2js from 'xml2js';

const inputSVGFolder = path.resolve('public/img');
const outputReactIconFolder = path.resolve('src/js/icons/components');

const excludeAttributes = /^id$/;
function getNodeAttributes(node) {
  return node.$ ? Object.keys(node.$).filter(key =>
    !excludeAttributes.test(key))
    .map(attrKey => `${camelCase(attrKey)}='${node.$[attrKey]}'`) : undefined;
}
function parseNode(node) {
  if (node && !/^(title|defs|desc)$/.test(node['#name'])) {
    const attributes = getNodeAttributes(node);
    const children = [];
    (node.$$ || []).forEach(child => (children.push(parseNode(child))));
    return node.$$ ? (
      `<${node['#name']}${attributes ? ` ${attributes.join(' ')}` : ''}>${children.join('')}</${node['#name']}>`
    ) : (
      `<${node['#name']}${attributes ? ` ${attributes.join(' ')}` : ''} />`
    );
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
  return `import React from 'react';

import { Icon } from '../Icon';

export const ${pascalCase(fileName)} = props => (
  <Icon viewBox='${viewBox}' a11yTitle='${pascalCase(fileName)}' {...props}>
    ${children.join('')}
  </Icon>
);
`;
}

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
    parser.parseString(content);
  });
}

fs.readdir(inputSVGFolder, (err, icons) => {
  if (err) {
    throw err;
  }
  del.sync([outputReactIconFolder]);
  fs.mkdirSync(outputReactIconFolder);
  const iconImports = [];
  icons.forEach((icon) => {
    if (/\.svg$/.test(icon)) {
      const iconPath = path.join(inputSVGFolder, icon);
      let fileName = icon.replace('.svg', '');
      fileName = fileName.replace(
        /^(.)|(-([a-z0-9]))+/g,
        g => (g.length > 1 ? g[1].toUpperCase() : g.toUpperCase()),
      );
      const content = fs.readFileSync(iconPath, 'utf8');
      iconImports.push(`export * from './${pascalCase(fileName)}';`);

      createReactIcon(fileName, content).then((reactIcon) => {
        const destinationFile = path.resolve(outputReactIconFolder, `${fileName}.js`);
        fs.writeFileSync(destinationFile, reactIcon);
      });
    }
  });

  const destinationImportFile = path.resolve(outputReactIconFolder, 'index.js');
  fs.writeFileSync(destinationImportFile, `${iconImports.join('\n')}\n`);
});
