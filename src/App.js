import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Reviews from "./components/Reviews";
import Contacts from "./components/Contacts";
import './App.css';
import "tailwindcss/tailwind.css";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} /> {/* Default Route */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
