import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import AboutUs from "./Components/AboutUs/AboutUs";
import BestDesigns from "./Components/BestDesign/BestDesigns";
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HomeBanner />
      <AboutUs />
      <BestDesigns />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
