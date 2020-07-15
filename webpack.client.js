const path = require("path");

module.exports = {
  target: "node",
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "client_bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public",
  },
  module: {
    rules: [
      {
        test: /\.(png|j?g|svg|gif)?$/,
        loader: "file-loader",
        options: {
          name: "build/assets/[name].[ext]",
          publicPath: (url) => url.replace(/build/, ""),
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: ["@babel/preset-react", "@babel/env"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
      {
        test: /\.css$/i,
        loader: ["style-loader", "css-loader"],
      },
    ],
  },
};
