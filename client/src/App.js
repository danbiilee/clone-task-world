import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/user';
import WorkspacePage from './pages/project/index';

function App() {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route path="/ws" component={WorkspacePage} />
    </Router>
  );
}

export default App;
