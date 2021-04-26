import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Pathfinder from './pathfinder/pages/pathfinder';
import Contact from './pages/contact';
import Maps from './pathfinder/pages/maps';
import Details from './pathfinder/pages/details';
import Characters from './pathfinder/pages/characters';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="/pathfinder" element={<Pathfinder />}>
          <Route path="maps*" element={<Maps />}></Route>
          <Route path="characters*" element={<Characters />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
