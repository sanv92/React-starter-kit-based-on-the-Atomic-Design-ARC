const {
  LoaderOptionsPlugin,
  EnvironmentPlugin,
  optimize: {
    ModuleConcatenationPlugin,
    UglifyJsPlugin,
  },
} = require('webpack')
const merge = require('webpack-merge')

const {config} = require('./shared')


module.exports = merge(config, {
  devtool: 'hidden-source-map',

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].c.js',
    publicPath: '/',
    crossOriginLoading: 'anonymous',
  },

  module: {
    rules: [],
  },

  plugins: [
    new LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),

    new EnvironmentPlugin({
      NODE_ENV: 'production',
    }),

    new ModuleConcatenationPlugin(),

    new UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false,
      },
    }),
  ],
})
