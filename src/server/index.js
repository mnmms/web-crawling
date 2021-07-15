// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// const corsOption = {
//      credentials: true,
//      origin: "http://localhost:8080",
//      method: "GET, POST, OPTIONS"
// }

// app.use(cors(corsOption));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

// app.use('/', createProxyMiddleware({ target: 'https://www.inflearn.com', changeOrigin: true }))

// app.listen(8080, (req, res) => {
//      console.log("서버 작동 중");
// });