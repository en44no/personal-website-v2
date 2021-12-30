import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Projects from './components/Projects/Projects';
import GoTop from './components/GoTop';
import Skills from './components/Skills/Skills';
import MobileNavbar from './components/Navbar/MobileNavbar';

function App() {
  smoothscroll.polyfill();

  return (
    <>
      <MobileNavbar />
      <Navbar />
      <GoTop />
      <Home />
      <About />
      <Projects />
      <Skills />
    </>
  );
}

export default App;
