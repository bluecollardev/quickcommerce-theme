var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var config = require('./build.config.js');
var commonCodesApi = require('./endpoints.commonCodes.js');
var commonUsersApi = require('./endpoints.commonUsers.js');
var commonCustomersApi = require('./endpoints.commonCustomers.js');
var commonDealsApi = require('./endpoints.commonDeals.js');

// Project vars
var PHONEGAP_DIR = __dirname + '/' + config.phonegapDirectory;
var PHONEGAP_DEV_PORT = config.phonegapServePort;

var APP_DIR = __dirname + '/' + config.sourceDirectory;
var BUILD_DIR = __dirname + '/' + config.buildDirectory;
var TEST_DIR = __dirname + '/' + config.testDirectory;
var LIB_DIR = __dirname + '/' + config.libDirectory;
var THEME_SOURCE_DIR = __dirname + '/' + config.themeSourceDirectory;
var THEME_BUILD_DIR = __dirname + '/' + config.themeBuildDirectory;

// TODO: If settings configured here, override built-in app mechanism
// TODO: Auto-stringify values
var env = {
	QC_SETTING_STORAGE_DRIVER: JSON.stringify('normal'), // Options: [file|uri|text]
	QC_SETTING_ADAPTER: JSON.stringify('custom'), // Options: [qc|custom|...]
	API_VERSION: JSON.stringify('normal'),
	API_TARGET: JSON.stringify('normal'),	
	AUTH_MODE: JSON.stringify('mock'), // [normal|legacy|mock]
	// TODO: Endpoint override should be optional
	// I'm moving the general case to SettingStore/Adapter
	INDIGO_BASE_URI: JSON.stringify('http://localhost:8080/'),
	QC_BASE_URI: JSON.stringify('http://acecoffeeroasters.com/'),
	QC_LEGACY_API: JSON.stringify('http://acecoffeeroasters.com/api/rest/'),
	QC_RESOURCE_API: JSON.stringify('http://acecoffeeroasters.com/qcapi/api/res/'),
	QC_API: JSON.stringify('http://acecoffeeroasters.com/qcapi/api/v1/')
}

//console.log(JSON.stringify(env))

// Are we connected to a QuickCommerce installation?
//var QCAPI = false

// Map API endpoints
for (var key in commonCodesApi) {
	env[key] = JSON.stringify(commonCodesApi[key])
}

for (var key in commonUsersApi) {
	env[key] = JSON.stringify(commonUsersApi[key])
}

for (var key in commonCustomersApi) {
	env[key] = JSON.stringify(commonCustomersApi[key])
}

for (var key in commonDealsApi) {
	env[key] = JSON.stringify(commonDealsApi[key])
}

//console.log('registering env:')
//console.log(env)

module.exports = [{
   // For POS
   entry: {
       retail: APP_DIR + '/app/js/Main.jsx',
       //inventory: APP_DIR + '/js/Main.jsx',
       //common: APP_DIR + '/js/Main.jsx',
       //detailing: APP_DIR + '/js/Main.jsx',
       //service: APP_DIR + '/js/Main.jsx',
       //auction: APP_DIR + '/js/Main.jsx'
	   demoFormComponents: LIB_DIR + '/quickcommerce-react/src/js/demo/FormComponents.jsx',
	   test: TEST_DIR + '/index.jsx'
   },
   output: {
        path: BUILD_DIR + '/js',
        filename: '[name]-bundle.js',
        publicPath: '/',
        chunkFilename: '[chunkhash].js'
    },
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
                         'es2015',
						 'stage-0'
                    ],
                    plugins: [
                        'transform-class-properties'
                    ]
                }
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            }
        ]
    },
	plugins: [
		new webpack.DefinePlugin(env)
    ],
    externals: {
        //'react-dom': 'ReactDOM',
        //react: 'React',
        jquery: 'jQuery'
    },
    resolve: {
        //root: path.resolve(__dirname),
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'quickcommerce-react': LIB_DIR + '/quickcommerce-react/src/js'
		}
    }
}]