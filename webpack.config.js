/**
 * @file webpack.config.js
 * Contains Webpack build configuration.
 */

const dns = require('dns');
const os = require('os');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV_PRODUCTION = 'production';
const NODE_ENV_DEVELOPMENT = 'development';
const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : NODE_ENV_DEVELOPMENT;
const DEVELOPMENT_SERVER_IP = process.env.DEVELOPMENT_SERVER_IP || false;
const DEVELOPMENT_SERVER_PORT = process.env.DEVELOPMENT_SERVER_PORT || false;

// Construct plugins array.
const plugins = [];
plugins.push(new HtmlWebpackPlugin({
  template: 'src/index.html',
  inject: 'body',
  filename: 'index.html',
}));

if (NODE_ENV === NODE_ENV_PRODUCTION) {
  plugins.push(new FaviconsWebpackPlugin({
    logo: './src/assets/images/logo.png',
    inject: true,
  }));
}

// Configure loaders.
const loaders = [
  {
    test: /\.js|jsx$/,
    exclude: /node_modules/,
    loaders: ['babel-loader'],
  },
  {
    test: /\.(jpe?g|png|gif|svg|mp3)$/i,
    loaders: ['file-loader'],
  },
  {
    test: /\.(dae)$/i,
    loaders: ['file-loader'],
  },
];

/**
 * Fetches and resolves this machine's IP address.
 *
 * @returns {Promise<String>}
 *   Promise that resolves this machine's IP address.
 */
const fetchIp = () => (
  new Promise((resolve, reject) => {
    if (DEVELOPMENT_SERVER_IP) {
      resolve(DEVELOPMENT_SERVER_IP);
    } else {
      dns.lookup(os.hostname(), (error, address) => (error ? reject(error) : resolve(address)));
    }
  })
);

// Calculate the build destination.
let dest = `${__dirname}/dist`;
if (process.env.NODE_ENV === NODE_ENV_PRODUCTION) {
  dest = __dirname;
}

module.exports = () => (
  fetchIp().then(host => ({
    entry: './src/index.jsx',
    output: {
      path: dest,
      filename: 'aframe-boilerplate.[hash].js',
      publicPath: '',
    },
    module: {
      loaders,
    },
    devServer: {
      host,
      port: DEVELOPMENT_SERVER_PORT || '8080',
    },
    plugins,
  })).catch((error) => {
    throw new Error(error);
  })
);
