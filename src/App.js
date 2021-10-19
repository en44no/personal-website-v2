import React, { useEffect } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Projects from './components/Projects/Projects';
import GoTop from './components/GoTop';

function App() {
  return (
    <>
      <Navbar />
      <GoTop />
      <Home />
      <Projects />
      {/* <About /> */}
    </>
  );
}

export default App;
