import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home, { Haha } from './home';
import Pathfinder from './pathfinder';

function App({ login }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/haha" element={<Haha />} />
        <Route path="/pathfinder" element={<Pathfinder />} />
      </Routes>
    </div>
  );
}

export default App;
