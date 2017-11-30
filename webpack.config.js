var webpack = require('webpack');
var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
var config = require('./build.config.js');
var commonCodesApi = require('./endpoints.commonCodes.js');

// Project vars
var PHONEGAP_DIR = __dirname + '/' + config.phonegapDirectory;
var PHONEGAP_DEV_PORT = config.phonegapServePort;

var APP_DIR = __dirname + '/' + config.sourceDirectory;
var BUILD_DIR = __dirname + '/' + config.buildDirectory;
var TEST_DIR = __dirname + '/' + config.testDirectory;
var LIB_DIR = __dirname + '/' + config.libDirectory;
var THEME_SOURCE_DIR = __dirname + '/' + config.themeSourceDirectory; // Themes refer to OpenCart themes
var THEME_BUILD_DIR = __dirname + '/' + config.themeBuildDirectory; // Themes refer to OpenCart themes
var TEMPLATE_BUILD_DIR = __dirname + '/' + config.templateBuildDirectory; // Templates refer to Quick Commerce JSX templates
var TEMPLATE_SOURCE_DIR = __dirname + '/' + config.templateSourceDirectory; // Templates refer to Quick Commerce JSX templates

// TODO: If settings configured here, override built-in app mechanism
// TODO: Auto-stringify values
var env = {
	QC_SETTING_STORAGE_DRIVER: JSON.stringify('normal'), // Options: [file|uri|text]
	QC_SETTING_ADAPTER: JSON.stringify('qc'), // Options: [qc|custom|...]
	API_VERSION: JSON.stringify('normal'),
	API_TARGET: JSON.stringify('normal'),	
	AUTH_MODE: JSON.stringify('legacy'), // [normal|legacy|mock]
	/*QC_BASE_URI: JSON.stringify('http://firebrandwebsolutions.com/qc-demo/'),
	QC_LEGACY_API: JSON.stringify('http://firebrandwebsolutions.com/qc-demo/api/rest/'),
	QC_RESOURCE_API: JSON.stringify('http://firebrandwebsolutions.com/qc-demo/qcapi/api/res/'),
    QC_API: JSON.stringify('http://firebrandwebsolutions.com/qc-demo/qcapi/api/v1/')*/
    QC_APP_URL: JSON.stringify('http://acecoffeeroasters.com/staging/'),
    QC_BASE_URI: JSON.stringify('http://acecoffeeroasters.com/'),
	QC_LEGACY_API: JSON.stringify('http://acecoffeeroasters.com/api/rest/'),
	QC_RESOURCE_API: JSON.stringify('http://acecoffeeroasters.com/qcapi/api/res/'),
	QC_API: JSON.stringify('http://acecoffeeroasters.com/qcapi/api/v1/'),
    QC_IMAGES_PATH: JSON.stringify('image/'), // Relative path to catalog image folder
    QC_IMAGES_URI: JSON.stringify('http://acecoffeeroasters.com/image/')
}

// Are we connected to a QuickCommerce installation?
//var QCAPI = false

// Map API endpoints
for (var key in commonCodesApi) {
	env[key] = JSON.stringify(commonCodesApi[key])
}

// Repeat above for other config sets...

console.log('registering env:')
console.log(env)

module.exports = [{
   // For POS
   entry: {
       //qc1p001: TEMPLATE_SOURCE_DIR + '/qc-1p-001/qc-1p-001.jsx',
       //qcShop001: TEMPLATE_SOURCE_DIR + '/qc-shop-001/qc-shop-001.jsx',
       //qcShop002: TEMPLATE_SOURCE_DIR + '/qc-shop-002/qc-shop-002.jsx',
       qcShop003: TEMPLATE_SOURCE_DIR + '/qc-shop-003/qc-shop-003.jsx',
       //demoFormComponents: APP_DIR + '/js/qc/demo/FormComponents.jsx',
	   //test: TEST_DIR + '/index.jsx'
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
                        'transform-decorators-legacy',
                        'transform-class-properties'
                    ]
                }
            },
            {
                test: /\.css$/, loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/, loader: 'style-loader!sass-loader!css-loader'
            }
        ]
    },
	plugins: [
		new webpack.DefinePlugin(env)
    ],
    externals: {
        //'react-dom': 'ReactDOM',
        //react: 'React',
        //jquery: 'jQuery'
    },
    resolve: {
        //root: path.resolve(__dirname),
		extensions: ['.js', '.jsx', '.json'],
		alias: {
			'quickcommerce-react': LIB_DIR + '/quickcommerce-react/src/js',
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout'
		}
    }
}]