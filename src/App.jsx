import React, { Suspense } from "react";
import smoothscroll from "smoothscroll-polyfill";
import Loader from "./components/Loader";
const About = React.lazy(() => import("./components/About/About"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Projects = React.lazy(() => import("./components/Projects/Projects"));
const GoTop = React.lazy(() => import("./components/GoTop"));
const Skills = React.lazy(() => import("./components/Skills/Skills"));
const MobileNavbar = React.lazy(() => import("./components/Navbar/MobileNavbar"));

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
