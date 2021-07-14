const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
     mode: "development",
     // plugins: [new CleanWebpackPlugin("bundle.js")],
     externals: [nodeExternals()],

     entry: __dirname + "/src/index.js",
     module: {
          rules: [
               {
                    test: /\.js$/,
                    exclude: "/node_modules",
                    use: {
                         loader: "babel-loader", //웹팩으로 통합하여 사용하기 위해
                         options: {
                              presets: ["@babel/preset-env"]
                         }
                    }
               },
               {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"] // 웹팩이 CSS 파일을 처리
               }
          ]
     },
     output: {
          path: __dirname,
          filename: "./dist/bundle.js"
     }
}