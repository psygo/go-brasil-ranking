"use strict";

const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "./public"),
  },
  watch: true,
  watchOptions: {
    ignored: ["./firebase-debug.log", "./firestore-debug.log"],
  },
};