import React, { useEffect } from "react";
import './App.css';
import './styles/variable.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from './Components/Home';
import Header from "./Navbar/Navbar";
import AboutUs from "./About/About";
import Services from "./Service/Service";
import Interpretingservice from "./Service1/Interpretingservice";
import Relocationservice from "./Service2/Relocationservice";
import Contact from "./Contact/Contact";


function App() {

// for some effectss
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: false,     
          mirror: true  
        });
    
        const handleScroll = () => AOS.refresh();
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/interpreting-service" element={<Interpretingservice />} />
        <Route path="/relocation-service" element={<Relocationservice />} />
        <Route path="/contact" element={<Contact />} />


      </Routes>
    </Router>
  );
}

export default App;
