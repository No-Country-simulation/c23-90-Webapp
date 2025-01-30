import React, { useState } from 'react';
import './Paymentspremium.css';


const Paymentspremium = () => {
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
    const mastercardPattern = /^5[1-5][0-9]{14}$/;

    if (visaPattern.test(cardNumber)) {
      setCardType('Visa');
      setCardLogo('/assets/visa-logo.png');
    } else if (mastercardPattern.test(cardNumber)) {
      setCardType('MasterCard');
      setCardLogo('/assets/mastercard-logo.png');
    } else {
      setCardType('');
      setCardLogo('');
    }
  };

  const handlePayPalRedirect = () => {
    window.location.href = 'https://www.paypal.com';
  };

  return (
    <div className="payment-container">
      <div className="left-section">
        <h3>Enter your payment information</h3>
        <p className="logged-in-text"><strong>Logged in as:</strong> <span className="user-email">mail@dominio.com</span> <span className="change-option">Change</span></p>
        <h4>Your Payment Method</h4>
        <div className="payment-logos">
          <img src="/assets/visa-logo.png" alt="Visa" className="visible-logo" />
          <img src="/assets/mastercard-logo.png" alt="MasterCard" className="visible-logo" />
          <img src="/assets/paypal pago.png" alt="PayPal" className="visible-logo" />
        </div>
        <div className="payment-buttons payment-logos">
          <button onClick={() => handlePaymentMethodChange('card')} className="dark-gray">Debit/Credit</button>
          <button onClick={handlePayPalRedirect} className="paypal-button">
            <img src="/assets/paypal pago.png" alt="PayPal" /> 
          </button>
        </div>
        {paymentMethod === 'card' && (
          <form className="payment-form">
            <div className="card-inputs">
              <input type="text" placeholder="Card Number" onChange={(e) => detectCardType(e.target.value)} />
              <input type="text" placeholder="MM/YY" />
              <input type="text" placeholder="CVV" />
            </div>
            {cardLogo && <img src={cardLogo} alt={cardType} className="card-logo" />}
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <div className="address-inputs">
              <input type="text" placeholder="Postal Code" />
              <select>
                <option>Argentina</option>
                <option>Colombia</option>
                <option>Mexico</option>
                <option>United States</option>
                <option>Spain</option>
                <option>India</option>
                <option>France</option>
                <option>Belgium</option>
                <option>Italy</option>
                <option>Germany</option>
              </select>
            </div>
            <p className="subscription-text">{
              plan === 'monthly' 
                ? 'By clicking "Access and Subscribe," you agree that: you will be charged $25.00 USD per month. Your subscription will automatically renew each month until you cancel (price is subject to change). You can cancel at any time through Customer Support. If you cancel before February 4, 2025, you will receive a full refund and avoid any potential charges. You also agree to the Terms of Use and the Subscription and Cancellation Terms. '
                : 'By clicking "Access and Subscribe," you agree that: you will be charged $250.00 USD per year. Your subscription will automatically renew each year until you cancel (price is subject to change). You can cancel at any time through Customer Support. If you cancel before February 4, 2025, you will receive a full refund. You also agree to the Terms of Use and the Subscription and Cancellation Terms. '
            }</p>
            <button className="subscribe-button">ACCESS AND SUBSCRIBE</button>
          </form>
        )}
      </div>
      <div className="right-section light-blue-background">
        <h2>Resume</h2>
        <h3>Subscription</h3>
        <div className="planpremium-toggle">
          <button className={plan === 'monthly' ? 'selected darker-orange' : 'orange'} onClick={() => handlePlanChange('monthly')}>Month</button>
          <button className={plan === 'yearly' ? 'selected darker-orange' : 'orange'} onClick={() => handlePlanChange('yearly')}>Year</button>
        </div>
        <button className="paymentspremium-plan">Premium Plan</button>
        <p>{plan === 'monthly' ? '$25/month for premium plan' : '$250/year for premium plan'}</p>
        <p>Subtotal: ${plan === 'monthly' ? '25' : '250'}</p>
        <p>Total: ${plan === 'monthly' ? '25' : '250'}</p>
      </div>
    </div>
  );
};

export default Paymentspremium;
