const defaultAssetExts = require('metro/src/defaults').assetExts;

module.exports = {
  assetTransforms: true,
  getPlatforms: () => ["ios", "android"],
  getTransformModulePath() {
    return require.resolve('./svg_transformer')
  },
  getAssetExts() {
    return defaultAssetExts.filter(assetExt => assetExt !== 'svg');
  },
  getSourceExts() {
    return ['svg'];
  },
};
