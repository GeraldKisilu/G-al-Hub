import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Components/Intro';
import Welcome from './Components/Welcome';
import Kids from './Components/Kids';
import Adults from './Components/Adults';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/adults" element={<Adults />} />
      </Routes>
    </Router>
  );
}

export default App;
