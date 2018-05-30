import del from 'del';
import fs from 'fs';
import pascalCase from 'pascal-case';
import path from 'path';

const inputSVGFolder = path.resolve('public/img');
const outputMDFile = path.resolve('icons.md');

fs.readdir(inputSVGFolder, (err, icons) => {
  if (err) {
    throw err;
  }
  const iconMDRows = [];
  icons.forEach((icon) => {
    if (/\.svg$/.test(icon)) {
      let fileName = icon.replace('.svg', '');
      fileName = fileName.replace(
        /^(.)|(-([a-z0-9]))+/g,
        g => (g.length > 1 ? g[1].toUpperCase() : g.toUpperCase()),
      );
      iconMDRows.push(`| ${pascalCase(fileName)} | ![${pascalCase(fileName)}](https://rawgithub.com/grommet/grommet-icons/master/public/img/${icon}) |`);
    }
  });

  del.sync([outputMDFile]);
  fs.writeFileSync(
    outputMDFile,
    `| Name          | Icon           |
|:-------------:|:-------------:|
${iconMDRows.join('\n')}`
  );
});
