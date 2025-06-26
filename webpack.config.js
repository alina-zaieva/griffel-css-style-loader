const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
  GriffelCSSExtractionPlugin,
} = require("@griffel/webpack-extraction-plugin");
const path = require("node:path");

const EXTRACT_CSS = true;

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9010,
  },
  module: {
    rules: [
      ...(EXTRACT_CSS
        ? [
            {
              test: /\.js$/,
              use: {
                loader: GriffelCSSExtractionPlugin.loader,
              },
            },
          ]
        : []),
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "@griffel/webpack-loader",
          options: {
            babelOptions: {},
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(?:js|mjs|cjs)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-react"], ["@babel/preset-env"]],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/index.html",
    }),
    ...(EXTRACT_CSS ? [new GriffelCSSExtractionPlugin()] : [])
    ,
  ],
};
