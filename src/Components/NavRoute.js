import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Art_Collection from './Art_Collection';
import Footer from './Footer';
const NavRoute = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/Gallery" exact element={<Art_Collection />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};
export default NavRoute;
