import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Navcustom1 from './components/Navcustom1';
import Filter from './components/Filter';
import Card from './components/Card';
import Songlist from './components/Songlist';
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
          <Route path="/" element={ <Card />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
