"use strict";

const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
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
  target: "node",
  externals: [nodeExternals()],
};
