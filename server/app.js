const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000; // 서버 포트

// DB 설정
mongoose
  .connect(
    'mongodb+srv://taskworld:taskworld1!@cluster0.wvzga.mongodb.net/clone_task_world?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  )
  .then(() => console.log('MongoDB connected... '))
  .catch(e => console.log(e));

// bodyParser 설정
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 포트 설정
app.get('/', (req, res) => res.send('Welcome!'));
app.listen(port, () =>
  console.log(`Express server has started on port ${port}`),
);

// 라우터 설정
const tasks = require('./routes/tasks'); // 라우터
app.use('/tasks', tasks);
