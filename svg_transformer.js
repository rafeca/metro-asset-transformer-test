const path = require('path')

const transformSvgSync = require('react-native-svg-loader');
// For React Native version 0.52 or later
var upstreamTransformer = require("metro/src/transformer");
 
// For React Native version 0.47-0.51
// var upstreamTransformer = require("metro-bundler/src/transformer");
 
// For React Native version 0.46
// var upstreamTransformer = require("metro-bundler/build/transformer");

module.exports.transform = function({ src, filename, options }) {	
	const basename = path.basename(filename)
	console.log(basename)

  if (filename.endsWith('.svg')) {
  	console.log('==============================================')
  	console.log('SVG!', filename)
    return transformSvgSync(src);
  } else {
    return upstreamTransformer.transform({ src, filename, options });
  }
};