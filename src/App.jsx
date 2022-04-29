import React, { Suspense } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Loader from "./components/Loader";
import MobileNavbar from "./components/Navbar/MobileNavbar";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
const About = React.lazy(() => import("./components/About/About"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const GoTop = React.lazy(() => import("./components/GoTop"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));

function App () {
  smoothscroll.polyfill();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <MobileNavbar />
        <Navbar />
        <GoTop />
        <Home />
        <About />
        <Projects />
        <Skills />
      </Suspense>
    </>
  );
}

export default App;
