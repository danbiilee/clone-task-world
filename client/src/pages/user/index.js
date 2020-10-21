import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Header from '../../components/Header/Header';

const MainPage = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={AboutPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
};

export default MainPage;
