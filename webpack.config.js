const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
     mode: "development",
     plugins: [
          // new CleanWebpackPlugin("./dist/bundle.js"),  //error
          new HtmlWebpackPlugin({ template: "./static/index.html" })], //html 파일에 번들링된 js 파일 삽입해주고 번들링된 결과가 저장되는 폴더에 옮겨주는 역할
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
          filename: path.join(__dirname, "src/server/index.js"),
          // proxy: { //CORS 정책 우회 가능
          //      "/": {
          //           target: "https://www.inflearn.com",
          //           secure: false,
          //           changeOrigin: true
          //      }
          // }
     },

     entry: __dirname + "/src/app/index.js",
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