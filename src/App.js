import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Navbar title="CustomizeText" />
          <Routes>
            <Route exact path="/"  element={<TextForm heading="Enter text to customize" />}/>
            <Route exact path="/about" element={<About/>}/> 
          </Routes>
        
      </Router>
    </>
  );
}

export default App;
