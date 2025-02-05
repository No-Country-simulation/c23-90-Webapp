import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home"; 
import Login from "./pages/Login/Login"; 
import About from "./pages/About/About"; 
import Navbar from "./components/Navbar/Navbar"; 
import SignUp from "./pages/SignUp/SignUp";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import BenefitsOfJoining from "./pages/BenefitsOfJoining/BenefitsOfJoining";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";
import HowToJoin from "./pages/HowToJoin/HowToJoin";
import Costs from "./pages/Costs/Costs"; 
import Paymentspremium from "./pages/Costs/Payments/Paymentspremium";
import Paymentsstandard from "./pages/Costs/Payments/paymentsstandard";
import VolunteerDetailPage from "./components/Hosts/VolunteerDetailPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/benefits" element={<BenefitsOfJoining />} />
        <Route path="/join" element={<HowToJoin />} />
        <Route path="/costs" element={<Costs />} />
        <Route path="/paymentsstandard" element={<Paymentsstandard />} />
        <Route path="/paymentspremium" element={<Paymentspremium />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/volunteer/:category" element={<VolunteerDetailPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;