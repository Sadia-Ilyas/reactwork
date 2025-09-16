import React from "react";
 import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import PrivacyPolicy from "./pages/privacypolicy";
import Error from "./pages/pagenotfound";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route  element={<Error />} />  
        </Routes>
      {/* </Router> */}
    </div>
  );
}

export default App;
