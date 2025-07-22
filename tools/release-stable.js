import del from 'del';
import fs from 'fs-extra';
import git from 'simple-git';
import path from 'path';
import debug from 'debug';

const repoURL = `https://${process.env.GH_TOKEN}@github.com/grommet/grommet-icons.git`;
const localFolder = path.resolve('.tmp/grommet-icons');
const BUILD_DIR = 'dist';
const localDist = path.resolve(BUILD_DIR);

const [BRANCH] = process.argv
  .find((v) => v.includes('--branch='))
  .split('=')
  .slice(-1);

if (process.env.CI) {
  debug.enable('simple-git,simple-git:*');
  del(localFolder).then(() => {
    git()
      .clone(repoURL, localFolder)
      .then(() => git(localFolder).checkout(BRANCH))
      .then(() => del([`${localFolder}/**/*`]))
      .then(() => fs.copy(localDist, localFolder))
      .then(() => git(localFolder).add(['--all', '.']))
      .then(() => git(localFolder).commit(`${BRANCH} updated`))
      .then(() => git(localFolder).push('origin', BRANCH))
      .catch((err) => console.error('failed: ', err));
  });
} else {
  console.warn(
    'Skipping release. Release:stable task should be executed by CI only.',
  );
}
