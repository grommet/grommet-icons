import del from 'del';
import fs from 'fs-extra';
import git from 'simple-git';
import path from 'path';
import debug from 'debug';

const repoURL = `https://${process.env.GH_TOKEN}@github.com/grommet/grommet-icons.git`;
const localFolder = path.resolve('.tmp/grommet-icons');
const localDist = path.resolve('dist');

if (process.env.CI) {
  debug.enable('simple-git,simple-git:*');
  del(localFolder).then(() => {
    git()
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout('stable'))
      .then(() => del([`${localFolder}/**/*`]))
      .then(() => fs.copy(localDist, localFolder))
      .then(() => git(localFolder).add(['--all', '.']))
      .then(() => git(localFolder).commit('stable updated'))
      .then(() => git(localFolder).push('origin', 'stable'))
      .catch((err) => console.error('failed: ', err));
  });
} else {
  console.warn(
    'Skipping release. Release:stable task should be executed by CI only.',
  );
}
