const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// require("path"): This is a core Node.js module that provides utilities for working with file and directory paths. It helps in manipulating file paths in a way that is cross-platform (works on Windows, macOS, and Linux). It means we import the `path` module to manipulate the path

module.exports = {
  mode: "development", // or "production"
  //   devtool: "none", // set none and if we go to the dist then the code is easier to read, if don't we have eval() bla bla which have been automatically rendered by webpack
  entry: "./src/index.js",
  output: {
    filename: "main.[contenthash].js", // this is the file name of output file, and below is the name and place where the folder containing the output file
    path: path.resolve(__dirname, "dist"), // __dirname: This is a Node.js global variable that represents the directory name of the current module. It provides the absolute path to the directory containing the currently executing file.
    // ex: If the current module is located at /Users/username/project, then __dirname is /Users/username/project
    // /Users/username/project/dist_here.
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
};
