module.exports = {  
  assetTransforms: true,
  getPlatforms: () => ["ios", "android"],
  getTransformModulePath() {  	        
    	return require.resolve('./svg_transformer')    
  },
  getAssetExts() {
    return ["svg"];
  }
};