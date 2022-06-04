const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",  // or production
  entry: "./src/main.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  target: ["web", "es5"],
}
