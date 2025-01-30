import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Login from "./pages/Login/Login"; 
import About from "./pages/About/About"; 
import Costs from "./pages/Costs/Costs"; 
import Navbar from "./components/Navbar/Navbar"; 
import Paymentspremium from "./pages/Costs/Payments/Paymentspremium";
import Paymentsstandard from "./pages/Costs/Payments/paymentsstandard"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/costs" element={<Costs />} />
        <Route path="/paymentsstandard" element={<Paymentsstandard />} />
        <Route path="/paymentspremium" element={<Paymentspremium />} />
        
      </Routes>
    </Router>
  );
}

export default App;

