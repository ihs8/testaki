import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home/home';
import Star from './pages/starred/star';
import Archive from './pages/archived/archive';
import AllF from './pages/all files/all';

function App() {
  return (
    <Router>
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/arch" element={<Archive/>}/>
      <Route path="/all" element={<AllF/>}/>
      <Route path="/star" element={<Star/>}/>
    </Routes>
    </Router>
   
    

  );
}

export default App;
