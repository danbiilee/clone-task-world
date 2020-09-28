module.exports = function (app) {
  // GET ALL TASKS
  app.get('/api/tasks', (req, res) => {
    res.end();
  });

  // GET SINGLE TASK
  app.get('/api/tasks/:task_id', (req, res) => {
    res.end();
  });

  // CREATE TASK
  app.post('/api/tasks', (req, res) => {
    res.end();
  });

  // UPDATE TASK
  app.put('/api/tasks/:task_id', (req, res) => {
    res.end();
  });

  // DELETE TASK
  app.delete('/api/tasks/:task_id', (req, res) => {
    res.end();
  });
};
