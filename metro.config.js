/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 */
module.exports = {
    resolver: {
      sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'],
    },
    transformer: {
      assetPlugins: ['expo-asset/tools/hashAssetFiles'],
    },
  };
  