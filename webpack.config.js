const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "img/[hash][name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Restaurant landing page",
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};
