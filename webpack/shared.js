const {cpus} = require('os')
const {resolve} = require('path')
const {
  optimize: {
    CommonsChunkPlugin,
  },
  NoEmitOnErrorsPlugin,
  EnvironmentPlugin,
} = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HappyPack = require('happypack')


const {NODE_ENV} = process.env
const IS_PROD = NODE_ENV === 'production'
const IS_DEV = NODE_ENV === 'development'
const IS_TEST = NODE_ENV === 'test'

const PUBLIC = resolve(__dirname, '..', 'public')
const DIST = resolve(__dirname, '..', 'dist')
const SRC = resolve(__dirname, '..', 'src')

const config = {
  context: SRC,
  target: 'web',

  entry: {
    polyfill: [
      'babel-polyfill',
      'whatwg-fetch',
    ],
    index: ['./index'],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [SRC, 'node_modules'],
  },

  output: {
    path: DIST,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'happypack/loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[hash].[ext]',
            },
          },
        ],
        include: resolve(SRC, 'styles', 'fonts'),
      },
      {
        test: /\.svg$/,
        use: 'svg-react-loader',
      },
    ],
  },

  plugins: [
    new NoEmitOnErrorsPlugin(),

    new HappyPack({
      threads: cpus().length,
      cacheContext: {env: NODE_ENV},
      loaders: ['babel-loader'],
    }),

    new CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['index'],
      filename: IS_DEV ? '[name].js' : '[name]-[chunkhash].js',
      minChunks: (module) => module.context && module.context.indexOf('node_modules') !== -1,
    }),

    new CommonsChunkPlugin({
      name: 'index',
      filename: IS_DEV ? '[name].js' : '[name]-[chunkhash].js',
      children: true,
      minChunks: 2,
    }),

    new CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity,
    }),

    new EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV || 'development',
    }),

    new HtmlWebpackPlugin({
      title: 'Title',
      description: 'Description',
      filename: 'index.html',
      template: `${PUBLIC}/index.html`,
    }),
  ],

  stats: {
    colors: true,
    children: false,
  },
}

const loadersConfig = {
  cssLoader: {
    modules: true,
    importLoaders: 1,
    localIdentName: '[name]__[local]--[hash:base64:5]',
  },
}

module.exports = {
  config,
  loadersConfig,

  IS_DEV,
  IS_PROD,
  IS_TEST,

  PUBLIC,
  DIST,
  SRC,
}
