import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Pathfinder from './pathfinder/pages/pathfinder';
import Contact from './pages/contact';

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
        <Route path="/pathfinder" element={<Pathfinder />} />
      </Routes>
    </>
  );
}

export default App;
