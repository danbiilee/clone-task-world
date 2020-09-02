import React from 'react';
import Header from './components/Header/Header';
import Project from './pages/Project';
import Footer from './components/Footer/Footer';
import { TaskProvider } from './reducers/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Header />
      <Project />
      <Footer />
    </TaskProvider>
  );
}

export default App;
