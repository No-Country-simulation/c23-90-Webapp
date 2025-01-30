import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Login from "./pages/Login/Login"; 
import About from "./pages/About/About"; 
import Navbar from "./components/Navbar/Navbar"; 
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
