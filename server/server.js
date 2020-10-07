const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000; // 서버 포트
const { Task } = require('./models/Task');

// DB 설정
mongoose
  .connect(
    'mongodb+srv://taskworld:taskworld1!@cluster0.wvzga.mongodb.net/<dbname>?retryWrites=true&w=majority',
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

// 라우터 설정
//const router = require('./routes')(app); // 라우터

// task 등록 테스트
app.post('/task', (req, res) => {
  const task = new Task(req.body);
  task.save((error, taskInfo) => {
    if (error) return res.json({ success: false, error });
    return res.status(200).json({ success: true });
  });
});

// 포트 설정
app.get('/', (req, res) => res.send('Welcome!'));
app.listen(port, () =>
  console.log(`Express server has started on port ${port}`),
);
