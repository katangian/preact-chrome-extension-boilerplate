var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: {
    popup: path.join(__dirname, 'src', 'js', 'popup.jsx'),
    options: path.join(__dirname, 'src', 'js', 'options.js'),
    background: path.join(__dirname, 'src', 'js', 'background.js'),
    content: path.join(__dirname, 'src', 'js', 'content.js'),
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "html", "popup.html"),
      filename: "popup.html",
      chunks: ["popup"]
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "html", "options.html"),
      filename: "options.html",
      chunks: ["options"]
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "html", "background.html"),
      filename: "background.html",
      chunks: ["background"]
    }),

    new CopyWebpackPlugin([
        { from: 'src/icons', to: 'icons' },
        { from: 'src/manifest.json', to: 'manifest.json' }
    ])
  ]
};
