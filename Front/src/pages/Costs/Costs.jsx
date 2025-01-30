import React from 'react'; 
import './Costs.css';

const Costs = () => {
  const handleSelectPlan = (planType) => {
    if (planType === 'free') {
      window.location.href = '/'; // Redirect to Home for Free Plan
    } else if (planType === 'standard') {
      window.location.href = '/paymentsstandard'; // Redirect to Payments Standard for Standard Plan
    } else if (planType === 'premium') {
      window.location.href = '/paymentspremium'; // Redirect to Payments Premium for Premium Plan
    }
  };

  return (
    <div className="costs-container bodycosts">
      <div className="plans">
        {/* Free Plan */}
        <div className="cardcosts free-plan">
          <h3>Free Plan</h3>
          <p className="description">Perfect for newcomers or occasional volunteers who want to explore without commitment. 
            <br /><br />
            <strong>Features:</strong> 
            <br />
            - Access to general volunteer opportunities. <br />
            - Search and filter by location and cause. <br />
            - Ability to connect with one host at a time. <br />
            - Basic profile visibility for hosts. <br /><br />
            <strong>Ideal For:</strong> 
            <br />
            - Casual users who are just starting their volunteering journey.
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
            <br /><br />
          </p>
          <p className="price">$0</p>
          <button onClick={() => handleSelectPlan('free')}>Select Plan</button>
        </div>

        {/* Standard Plan */}
        <div className="cardcosts standard-plan">
          <h3>Standard Plan</h3>
          <p className="description">A balanced option for regular volunteers seeking more flexibility and features. 
            <br /><br />
            <strong>Price:</strong> $10/month or $100/year 
            <br /><br />
            <strong>Features:</strong> 
            <br />
            - Access to all volunteer opportunities. <br />
            - Search and filter by advanced criteria (e.g., skills, availability). <br />
            - Connect with up to five hosts simultaneously. <br />
            - Priority in host responses. <br />
            - Personalized recommendations for opportunities. <br />
            - Access to reviews and ratings of hosts. <br /><br />
            <strong>Ideal For:</strong> 
            <br />
            - Volunteers committed to making a consistent impact and exploring various projects. 
            <br /><br />
            <br /><br />
            <br /><br />
          </p>
          <p className="price">$10/month or $100/year</p>
          <button onClick={() => handleSelectPlan('standard')}>Select Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="cardcosts premium-plan">
          <h3>Premium Plan</h3>
          <p className="description">Designed for dedicated individuals who want the best Amani has to offer. 
            <br /><br />
            <strong>Price:</strong> $25/month or $250/year 
            <br /><br />
            <strong>Features:</strong> 
            <br />
            - Unlimited access to all volunteer opportunities. <br />
            - Advanced search tools, including skill match and availability alerts. <br />
            - Unlimited connections with hosts. <br />
            - Featured profile for top visibility to hosts. <br />
            - Early access to exclusive projects. <br />
            - Detailed performance analytics and progress tracking. <br />
            - Premium support with faster response times. <br />
            - Invitations to community events and workshops. <br /><br />
            <strong>Ideal For:</strong> 
            <br />
            - Highly engaged volunteers looking to maximize their impact and grow their network. 
          </p>
          <p className="price">$25/month or $250/year</p>
          <button onClick={() => handleSelectPlan('premium')}>Select Plan</button>
        </div>
      </div>

      {/* Choosing the Right Plan */}
      <div className="info-cardcost">
        <h5>Choosing the Right Plan</h5>
        <h5>No matter your level of involvement, Amani has a plan to match your needs. Upgrade or downgrade anytime as your journey evolves. Let's make a difference together!</h5>
      </div>
    </div>
  );
};

export default Costs;

