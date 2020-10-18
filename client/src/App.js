import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/user';
import WorkspacePage from './pages/project/index';

function App() {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route path="/ws" component={WorkspacePage} />
    </>
  );
}

export default App;
