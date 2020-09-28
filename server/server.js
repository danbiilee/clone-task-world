const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// DB 설정
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;
db.once('open', () => {
  console.log('Conneced to mongoDB server');
});
db.on('error', err => {
  console.log('DB ERROR: ', err);
});

// bodyParser 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 라우터 설정
const router = require('./routes')(app); // 라우터

// 포트 설정
const port = process.env.PORT || 4000; // 서버 포트
app.listen(port, () =>
  console.log(`Express server has started on port ${port}`),
);
