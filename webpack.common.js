/* config for all */
const config = require('./webpack.config');
const path = require('path');
const merge = require('webpack-merge');

/* loaders */
const loaders = require('./webpack/loaders/index');

/* plugins */
const plugins = require('./webpack/plugins/index');

module.exports = merge(
    {
        mode: 'development',
        // a complete list of "stats" setting is on https://webpack.js.org/configuration/stats/
        stats: {
            // copied from `'minimal'`
            all: false,
            assets: false,
            modules: true,
            maxModules: 0,
            errors: false, // disabled errors
            warnings: false, // disabled warnings
            // our additional options
            moduleTrace: true,
            errorDetails: true
        },
        resolve: {
            extensions: ['.vue', '.css', '.tsx', '.ts', '.js', '.json'],
            modules: [
                path.resolve(__dirname, 'node_modules')
            ]
        },
        output: {
            path: path.resolve(config.path.assets)
        },
        plugins: [
            plugins.clean(),
            plugins.friendlyErrors(),
            plugins.copy(),
            plugins.imageMin(),
            plugins.iconFont(),
            plugins.webpackBar(),
            plugins.duplicatePackageChecker(),
            plugins.vueLoader()
        ]
    },
    loaders.loadESLint({
        exclude: [
            path.resolve(__dirname, 'node_modules')
        ]
    }),
    loaders.loadTypeScript(),
    loaders.loadVueJs(),
    loaders.loadJS(),
    loaders.loadCss(),
    loaders.loadScss(),
    // loaders.loadLess(),
    loaders.loadImage(),
    loaders.loadFonts({
        include: [
            path.resolve(__dirname, 'src/icons'),
            path.resolve(__dirname, 'src/fonts')
        ]
    })
);
