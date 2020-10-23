import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ProjectListPage from './ProjectListPage';

const WorkspacePage = () => {
  return (
    <Router>
      <Header />
      <ProjectListPage />
    </Router>
  );
};

export default WorkspacePage;
