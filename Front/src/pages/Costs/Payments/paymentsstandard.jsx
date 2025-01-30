import React, { useState } from 'react';
import './Paymentsstandard.css';

const Paymentsstandard = () => {
  const [plan, setPlan] = useState('monthly');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardType, setCardType] = useState('');
  const [cardLogo, setCardLogo] = useState('');

  const handlePlanChange = (newPlan) => {
    setPlan(newPlan);
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

 
  const detectCardType = (cardNumber) => {
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;

   
    if (visaPattern.test(cardNumber)) {
      setCardType('Visa');
      setCardLogo('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Visa_Inc._logo.svg/120px-Visa_Inc._logo.svg.png');
    }
   
    else if (mastercardPattern.test(cardNumber)) {
      setCardType('MasterCard');
      setCardLogo('https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/MasterCard_Logo.svg/1024px-MasterCard_Logo.svg.png');
    } 
    
    else {
      setCardType('');
      setCardLogo('');
    }
  };

  const handlePayPalRedirect = () => {
    window.location.href = 'https://www.paypal.com';
  };

  return (
    <div className="payment-container">
     
      <div className="right-section">
        <h2>Resume Subscription</h2>
        <div className="plan-selection">
          <h3>Select Payment Option</h3>
          <div className="payment-options">
            <button
              className={`payment-button ${plan === 'monthly' ? 'selected' : ''}`}
              onClick={() => handlePlanChange('monthly')}
            >
              $10/month
            </button>
            <button
              className={`payment-button ${plan === 'yearly' ? 'selected' : ''}`}
              onClick={() => handlePlanChange('yearly')}
            >
              $100/year
            </button>
          </div>
          <div className="payment-summary">
            <p>Plan: Standard Plan</p>
            <p>Subtotal: ${plan === 'monthly' ? '10' : '100'}</p>
            <p>Total: ${plan === 'monthly' ? '10' : '100'}</p>
          </div>
        </div>

        <div className="payment-method-selection">
          <h3>Select Payment Method</h3>
          <div className="payment-methods">
            <button
              className={`method-button ${paymentMethod === 'card' ? 'selected' : ''}`}
              onClick={() => handlePaymentMethodChange('card')}
            >
              Pay with Card
            </button>
            <button
              className={`method-button ${paymentMethod === 'paypal' ? 'selected' : ''}`}
              onClick={() => handlePaymentMethodChange('paypal')}
            >
              Pay with PayPal
            </button>
          </div>
        </div>
      </div>

      
      <div className="left-section">
        <h3>Enter Your Payment Information</h3>
        <p>Logged in as: correo@dominio.com</p>

        {paymentMethod === 'card' ? (
          <form className="payment-form">
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                placeholder="**** **** **** ****"
                onChange={(e) => detectCardType(e.target.value)}
              />
            </div>
            
            {cardLogo && (
              <div className="card-logo-container">
                <img src={cardLogo} alt={cardType} className="card-logo" />
              </div>
            )}
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
                <option>Argentina</option>
                
              </select>
            </div>
            <button type="submit">Access and Subscribe</button>
          </form>
        ) : (
          <div className="paypal-info">
            <p>Please complete your payment via PayPal.</p>
            <button onClick={handlePayPalRedirect} className="paypal-button">
              <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal Logo" className="paypal-logo" />
              Pay with PayPal
            </button>
          </div>
        )}

        <p className="payment-disclaimer">
          By clicking "Access and Subscribe," you agree that: you will be charged ${plan === 'monthly' ? '10.00' : '100.00'} USD {plan === 'monthly' ? 'per month' : 'per year'}. Your subscription will automatically renew each {plan === 'monthly' ? 'month' : 'year'} until you cancel (price is subject to change). You can cancel at any time through Customer Support. If you cancel before February 4, 2025, you will receive a full refund and avoid any potential charges. You also agree to the Terms of Use and the Subscription and Cancellation Terms.
        </p>
      </div>
    </div>
  );
};

export default Paymentsstandard;
