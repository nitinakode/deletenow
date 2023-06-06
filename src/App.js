import './App.css';
import {
  BrowserRouter as Router, Routes,  Route} from "react-router-dom";
import Navbar from './components/Navbar';
import React from "react";
function App() {
  const year = new Date().getFullYear();
  return (
    
     <>  
         <Router>
      <Navbar />
    </Router>
 
</>
  );
}

export default App;
