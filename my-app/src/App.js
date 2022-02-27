import React from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import About from './Components/About';
import AboutUs from './Components/AboutUs';


import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, 
  Route,} from "react-router-dom";
import ContactUs from './Components/ContactUs';
import "./Multiuser_Login_Page.css";
import Multiuser_Login_Page from "./Multiuser_Login_Page";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Multiuser_Login_Page" element={<Multiuser_Login_Page/>} />
        <Route path="/" element={<Header/>} />
        
        </Routes>
        
        
      
      <Contact/>
      </Router>
      
    </div>
  );
}

export default App;
