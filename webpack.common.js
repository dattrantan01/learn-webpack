const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      // {
      //   test: /\.(svg|png|jpg)$/,
      //   use: {
      //     loader: "file-loader",
      //     options: {
      //       name: "[name].[hash].[ext]",
      //       outputPath: "assets",
      //     },
      //   },
      // },
      {
        test: /\.(svg|png|jpg)$/,
        type: "asset/resource",
        generator: {
          filename: "assets/[hash].[ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
