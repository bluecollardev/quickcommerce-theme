'use strict';

var config = require('./build.config.js');
var fs = require('fs');

// Project vars
var PHONEGAP_DIR = __dirname + '/' + config.phonegapDirectory;
var PHONEGAP_DEV_PORT = config.phonegapServePort;

var APP_DIR = __dirname + '/' + config.sourceDirectory;
var BUILD_DIR = __dirname + '/' + config.buildDirectory;
var LIB_DIR = __dirname + '/' + config.libDirectory;
var THEME_SOURCE_DIR = __dirname + '/' + config.themeSourceDirectory;
var THEME_BUILD_DIR = __dirname + '/' + config.themeBuildDirectory;

// not too sure how the hell to configure multiple entry points AND razzle

// razzle.config.js
module.exports = {
    modify(config, { target, dev }, webpack) {
        var appConfig = config;
        
        //fs.appendFile('razzle.config.txt', JSON.stringify(appConfig), function (err) {});

        if (target === 'node') {
            //appConfig.output.filename = 'custom.js';
            appConfig = Object.assign(appConfig, {
                /*entry: {
                   retail: APP_DIR + '/js/Retail.jsx',
                   inventory: APP_DIR + '/js/Main.jsx',
                   common: APP_DIR + '/js/Main.jsx',
                   detailing: APP_DIR + '/js/Main.jsx',
                   service: APP_DIR + '/js/Main.jsx',
                   auction: APP_DIR + '/js/Main.jsx'
               },
               output: {
                    path: BUILD_DIR + '/js',
                    filename: '[name]-bundle.js',
                    publicPath: '/',
                    chunkFilename: '[chunkhash].js'
                },*/
                module: {
                    loaders: [
                        {
                            test: /\.jsx?$/,
                            exclude: /(node_modules)/,
                            loader: 'babel-loader',
                            query: {
                                cacheDirectory: true,
                                presets: [
                                     'react',
                                     'es2015'
                                ]
                            }
                        },
                        {
                            test: /\.css$/, loader: 'css-loader'
                        }
                    ]
                }
            });
        }
        
        if (target === 'web') {
            //appConfig.output.filename = 'custom.js';
            appConfig = Object.assign(appConfig, {
                /*entry: {
                   retail: APP_DIR + '/js/Retail.jsx',
                   inventory: APP_DIR + '/js/Main.jsx',
                   common: APP_DIR + '/js/Main.jsx',
                   detailing: APP_DIR + '/js/Main.jsx',
                   service: APP_DIR + '/js/Main.jsx',
                   auction: APP_DIR + '/js/Main.jsx'
               },
               output: {
                    path: BUILD_DIR + '/js',
                    filename: '[name]-bundle.js',
                    publicPath: '/',
                    chunkFilename: '[chunkhash].js'
                },*/
                module: {
                    loaders: [
                        {
                            test: /\.jsx?$/,
                            exclude: /(node_modules)/,
                            loader: 'babel-loader',
                            query: {
                                cacheDirectory: true,
                                presets: [
                                     'react',
                                     'es2015'
                                ]
                            }
                        },
                        {
                            test: /\.css$/, loader: 'style-loader!css-loader'
                        }
                    ]
                }
            });
        }

        return appConfig;
    }
};