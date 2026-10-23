import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";

const AppRouter = () => {
  return (
    <>
      <div className="min-h-screen bg-[#0B1020]">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
      </div>
    </>
  );
};

export default AppRouter;
