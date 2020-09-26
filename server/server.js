const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// bodyParser를 사용하기 위한 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./routes')(app); // 라우터
const port = process.env.PORT || 4000; // 서버 포트

// 서버 실행
//const server = app.listen(port, () => console.log(`Express server has started on port ${port}`));
app.listen(port, () =>
  console.log(`Express server has started on port ${port}`),
);
