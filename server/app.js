const mongoose = require('mongoose');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT;

// DB 설정
mongoose
  .connect(
    `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.wvzga.mongodb.net:27017,cluster0-shard-00-01.wvzga.mongodb.net:27017,cluster0-shard-00-02.wvzga.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-6zvpw0-shard-0&authSource=admin&retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('MongoDB connected... '))
  .catch(e => console.log(e));

// session 설정
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);
// bodyParser 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 포트 설정
app.get('/', (req, res) => res.send('Welcome!'));
app.listen(port, () =>
  console.log(`Express server has started on port ${port}`),
);

// 라우터 설정
app.use('/sessions', require('./routes/sessions'));
app.use('/members', require('./routes/members'));
app.use('/tasks', require('./routes/tasks'));
