const { normalize, join } = require('path');

const cwd = normalize(process.cwd());
const  commonAssets = normalize(join(__dirname, 'commonAssets'));
const  mainAssets = normalize(join(__dirname, '/packages/angular-main/src/assets'));

const getAssetsPath = name => join(commonAssets, name);
const getContentPath = name => join(getAssetsPath(name), 'images');

module.exports = {
    cwd,
    commonAssets,
    mainAssets,
    getContentPath,
    getAssetsPath,
};