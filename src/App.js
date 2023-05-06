import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Navcustom1 from './components/Navcustom1';
import Add from './components/Add';
import Filter from './components/Filter';
import Card from './components/Card';
import Songlist from './components/Songlist';
import About from './components/About';
import Contact from './components/Contact';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Navcustom1 />
    <Filter/>
    <Routes>
          <Route path="/Songlist" element={<Songlist />} />
		  <Route path="/Add" element={<Add />} />
          <Route path="/" element={ <Card />} />
          <Route path="/About" element={ <About />} />
          <Route path="/Contact" element={ <Contact />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
