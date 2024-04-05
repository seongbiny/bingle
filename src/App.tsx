import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Detail from './pages/detail/detail';
import Tags from './pages/tags/tags';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/tags" element={<Tags />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
