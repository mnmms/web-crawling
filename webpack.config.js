const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
     mode: "development",
     // plugins: [new CleanWebpackPlugin("bundle.js")],
     externals: [nodeExternals()],
     devServer: {
          contentBase: [ //정적파일을 제공할 경로
               path.join(__dirname, "static")
          ], 
          // publicePath: "/", //브라우저를 통해 접근하는 경로
          host: "localhost",
          port: 8080, //개발 서버 포트
          overlay: true, //빌드시 에러 or 경로를 브라우저 화면에 표시
          stats: "errors-only", //메세지 출력 옵션
          // historyApiFallBack: true, //히스토리 API 사용하는 SPA 개발시 사용, 404 발생시 index.html로 리다이렉트
          filename: "bundle.js",
          proxy: {
               "/api": {
                    target: "http://localhost:8080/api",
                    secure: false,
                    changeOrigin: true
               }
          }
     },

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