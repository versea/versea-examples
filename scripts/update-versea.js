/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const { execSync } = require('child_process');

async function updateVerseaDeps(version) {
  glob(path.join(__dirname, '../+(parcel|sandbox|switcher|nested-routes)/**/package.json'), {}, function (_, files) {
    console.log(files, version)
    // files.forEach((file) => {
    //   const pkgJSON = require(file);
    //   for (let key of Object.keys(pkgJSON.dependencies)) {
    //     if (key.startsWith('@versea/')) {
    //       pkgJSON.dependencies[key] = version.toString();
    //     }
    //   }
    //   fs.writeFileSync(file, JSON.stringify(pkgJSON, null, 2) + '\n');
    // });
    // console.log(`Update Version to ${version} successfully`);
    // after();
  });
}

function prepare() {
  execSync('git pull --rebase');
}

function execCommand(command) {
  execSync(command, { stdio: 'inherit' });
}

function after() {
  execCommand('yarn');
}

prepare();
updateVerseaDeps(process.argv[2]);
