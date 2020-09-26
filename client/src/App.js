import React from 'react';
import Header from './components/Header/Header';
import Project from './pages/Project';
import Footer from './components/Footer/Footer';
import { TaskProvider } from './reducers/TaskContext';
import { WorkspaceProvider } from './reducers/WorkspaceContext';

function App() {
  return (
    <WorkspaceProvider>
      <TaskProvider>
        <Header />
        <Project />
        <Footer />
      </TaskProvider>
    </WorkspaceProvider>
  );
}

export default App;
