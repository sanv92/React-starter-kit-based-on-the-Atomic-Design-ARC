 // you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

const {resolve} = require('path')

const SRC = resolve(__dirname, '..', 'src')


module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      SRC,
      'node_modules',
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(md)$/,
        use: [
            {
              loader: 'highlight-loader',
            },
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        test: /\.story.js$/,
        enforce: 'pre',
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
          },
        ],
      },
    ],
  },

  plugins: [
    // your custom plugins
  ],
};
