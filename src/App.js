import React, { useEffect, useState } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Projects from './components/Projects/Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import GoTop from './components/GoTop';

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    Aos.init({
      mirror: true,
    });
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scrollHeight]);

  return (
    <>
      <div data-aos='fade-down' data-aos-duration='600'>
        <Navbar isScrolling={scrollHeight} />
        <GoTop isScrolling={scrollHeight} />
        <Home isScrolling={scrollHeight} />
        <Projects />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
