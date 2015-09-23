/**
 * Configuration file
 */
var helperPath = 'helpers';
var srcPath = 'resources';

var config = module.exports;

config.options = {
	config: {
		// in this directory you can find your grunt config tasks
		src: helperPath + '/_grunt/*.js'
	},
	paths: {
		// tasks folder with gulp tasks
		// helpers folder with tasks
		helpers: helperPath,
		// resources folder with working files
		src: srcPath,
		// partials path for wrapWith hbs helper
		partials: srcPath + '/templating/partials',
		// dev/working folder
		dev: '_output',
		// dist folder with minified and optimized files
		dist: '_dist'
	},

	// define your ports for livereload
	ports: {
		app: 3000,
		test: 3001,
		livereload: 35731
	}
};
