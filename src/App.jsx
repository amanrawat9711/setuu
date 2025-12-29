// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SmoothScroller from './components/Animation';
import Team from './pages/Team';
import Footer from './components/Footer';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Consultancy from './pages/Consultancy';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
        {/* <CursorTrail /> */}
        <Navbar />
        
        {/* Main content wrapper - This grows to push footer down */}
        <main className="flex-grow relative z-0">
          <Routes>
            <Route path="/" element={<SmoothScroller />} />
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/consultancy" element={<Consultancy />} />

            {/* Add more routes as needed */}
          </Routes>
        </main>
        
        {/* Add Footer here */}
        
      </div>
    </Router>
  );
}

export default App;