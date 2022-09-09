"use strict";

const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./"),
    libraryTarget: "this",
  },
  watch: true,
  target: "node",
  externals: [nodeExternals()],
};
