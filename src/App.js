import React, { useEffect, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Projects from './components/Projects/Projects';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  return (
    <>
      <Navbar isScrolling={scrollHeight} />
      <Home isScrolling={scrollHeight} />
      {/* <About /> */}
      <Projects />
    </>
  );
}

export default App;
