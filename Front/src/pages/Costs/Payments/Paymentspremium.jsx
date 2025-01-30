import React, { useState } from 'react';
import './Paymentspremium.css';

const Paymentspremium = () => {
  const [plan, setPlan] = useState('monthly');

  const handlePlanChange = (newPlan) => {
    setPlan(newPlan);
  };

  return (
    <div className="payment-container">
      <div className="left-section">
        <h2>Resume Subscription</h2>
        <div className="plan-selection">
          <h3>Select Payment Option</h3>
          <div className="payment-options">
            <button
              className={`payment-button ${plan === 'monthly' ? 'selected' : ''}`}
              onClick={() => handlePlanChange('monthly')}
            >
              $25/month
            </button>
            <button
              className={`payment-button ${plan === 'yearly' ? 'selected' : ''}`}
              onClick={() => handlePlanChange('yearly')}
            >
              $250/year
            </button>
          </div>
          <div className="payment-summary">
            <p>Plan: Premium Plan</p>
            <p>Subtotal: ${plan === 'monthly' ? '25' : '250'}</p>
            <p>Total: ${plan === 'monthly' ? '25' : '250'}</p>
          </div>
        </div>
      </div>

      <div className="right-section">
        <h3>Enter Your Payment Information</h3>
        <p>Logged in as: correo@dominio.com</p>
        <form className="payment-form">
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="**** **** **** ****" />
          </div>
          <div className="form-group">
            <label>MM/YY</label>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="form-group">
            <label>CVV</label>
            <input type="text" placeholder="***" />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" placeholder="Postal Code" />
          </div>
          <div className="form-group">
            <label>Country/Region</label>
            <select>
              <option>USA</option>
              <option>Canada</option>
              <option>Colombia</option>
              {/* Add more countries as needed */}
            </select>
          </div>
          <button type="submit">Access and Subscribe</button>
        </form>
        <p className="payment-disclaimer">
          By clicking "Access and Subscribe," you agree that: you will be charged $25.00 USD per month...
        </p>
      </div>
    </div>
  );
};

export default Paymentspremium;
