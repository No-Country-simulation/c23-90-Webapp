import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <div className="terms-and-conditions">
       <h1 className="terms-title">Terms and Conditions</h1>
      <p>Last updated: January 2025</p>

      <section>
        <h2><strong>1. Introduction</strong></h2>
        <p>
          Welcome to Amani! By accessing or using our services, you agree to comply with and be bound by these Terms and Conditions.
        </p>
      </section>

      <section>
        <h2><strong>2. User Responsibilities</strong></h2>
        <p>
          You agree to use Amani only for lawful purposes and in a manner that does not infringe the rights of others.
        </p>
      </section>

      <section>
        <h2><strong>3. Privacy Policy</strong></h2>
        <p>
          Your use of Amani is also governed by our Privacy Policy, which explains how we collect and use your information.
        </p>
      </section>

      <section>
        <h2><strong>4. Limitation of Liability</strong></h2>
        <p>
          We are not responsible for any damages resulting from your use of Amani.
        </p>
      </section>

      <section>
        <h2><strong>5. Changes to Terms</strong></h2>
        <p>
          We may update these Terms and Conditions from time to time. Continued use of Amani after changes means you accept the new terms.
        </p>
      </section>

      <section>
        <h2><strong>6. Contact Information</strong></h2>
        <p>
          If you have any questions about these terms, please contact us at  <a href="mailto:support@amani.com" className="support-email"> support@amani.com</a>.
        </p>
      </section>

      <button onClick={() => window.history.back()} className="back-button">
        Back
      </button>
    </div>
  );
};

export default TermsAndConditions;
