import React from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Projects from './components/Projects/Projects';
import GoTop from './components/GoTop';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <GoTop />
      <Home />
      <Projects />
      <Skills />
      {/* <About /> */}
    </>
  );
}

export default App;
