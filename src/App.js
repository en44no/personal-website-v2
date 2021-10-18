import React, { useEffect } from 'react';
import About from './components/About/About';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Projects from './components/Projects/Projects';
import Aos from 'aos';
import 'aos/dist/aos.css';
import GoTop from './components/GoTop';

function App() {
  useEffect(() => {
    Aos.init({
      mirror: true,
    });
  });

  return (
    <>
      <div data-aos='fade-down' data-aos-duration='600'>
        <Navbar />
        <GoTop />
        <Home />
        <Projects />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
