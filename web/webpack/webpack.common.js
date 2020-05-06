const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const src = path.resolve(__dirname, "../src");
const entry = path.resolve(src, "./index.tsx");
const output = path.resolve(__dirname, "../dist");
const template = path.resolve(__dirname, "./index.html");

module.exports = {
  context: __dirname,
  entry,
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".scss"],
  },
  output: {
    path: output,
    filename: "main.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: [/node_modules/, /__tests__/, /__stories__/],
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        }],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-modules-typescript-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template,
      filename: "index.html",
    }),
  ],
};
