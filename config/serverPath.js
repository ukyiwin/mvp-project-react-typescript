const path = require('path');

function resolvePath(relativePath) {
  return path.resolve(`${__dirname}/../${relativePath}`);
}

module.exports = {
  appModule: resolvePath('./src/server.tsx'),
  appPublic: resolvePath('public'),
  template: resolvePath('src/index.html'),
  assets: resolvePath('src/assets'),
  utils: path.resolve('src/Utils'),
  packageJson: resolvePath('./package.json'),
  yarnLockFile: resolvePath('yarn.lock'),
  dist: resolvePath('dist'),
  publicUrl: './',
  nodeModules: resolvePath('node_modules'),
};
