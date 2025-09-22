import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ServicesCard from "../components/Services/Services";
import Footer from "../components/Footer/Footer";

const Services = () => {
  return (
    <div className="services">
    
      <Navbar />
        <h1>Our Services</h1>
      <ServicesCard />
      <Footer />
    </div>
  );
};

export default Services;
