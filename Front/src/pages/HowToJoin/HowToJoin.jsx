import React from 'react';
import './HowToJoin.css';

const HowToJoin = () => {
  return (
    <div className="how-to-join">      
      <aside className="table-of-contents">
        <h3>TABLE OF CONTENTS</h3>
        <ul>
          <li><a href="#why-join">Why Join Amani?</a></li>
          <li><a href="#step-1">Step 1: Create Your Profile</a></li>
          <li><a href="#step-2">Step 2: Explore</a></li>
          <li><a href="#step-3">Step 3: Connect with Hosts</a></li>
          <li><a href="#step-4">Step 4: Confirm Your Participation</a></li>
          <li><a href="#step-5">Step 5: Make an Impact</a></li>
          <li><a href="#need-help">Need Help?</a></li>
        </ul>
      </aside>
     
      <div className="content">
        <h1>How to Join</h1>
        <p>
          Amani makes it simple and rewarding to start your volunteering journey. 
          Whether you’re an individual looking to make a positive impact or an 
          organization searching for dedicated volunteers, our platform has got you covered. 
          Below, you’ll find a step-by-step guide on how to get started with Amani.
        </p>

        <section id="why-join">
          <h2>Why Join Amani?</h2>
          <ul>
            <li><strong>Diverse Opportunities:</strong> <span>Whether you love teaching, conservation, or community building, we’ve got something for you.</span></li>
            <li><strong>Cultural Exchange:</strong> <span>Experience new cultures, traditions, and perspectives while giving back.</span></li>
            <li><strong>Safe and Verified Hosts:</strong> <span>All hosts on our platform are vetted to ensure safety and reliability.</span></li>
            <li><strong>Flexible Participation:</strong> <span>Volunteer for a week, a month, or more—your time, your rules!</span></li>
          </ul>
        </section>

        <section id="step-1">
          <h2>Step 1: Create Your Profile</h2>
          <ul>
            <li><strong>Sign Up:</strong> <span>Click the “Join Now” button and register with your email or social media account.</span></li>
            <li><strong>Customize Your Profile:</strong> <span>Share your story, highlight your skills, and let hosts know what drives you.</span></li>
            <li><strong>Add Preferences:</strong> <span>Specify the type of projects, locations, and time frames that interest you.</span></li>
          </ul>
        </section>

        <section id="step-2">
          <h2>Step 2: Explore</h2>
          <ul>
            <li><strong>Use Filters:</strong> <span>Narrow your search by location, skills, or duration.</span></li>
            <li><strong>Read Reviews:</strong> <span>Check out feedback from past volunteers for insights.</span></li>
            <li><strong>Save Favorites:</strong> <span>Bookmark projects you’d like to revisit later.</span></li>
          </ul>
        </section>

        <section id="step-3">
          <h2>Step 3: Connect with Hosts</h2>
          <ul>
            <li><strong>Reach Out:</strong> <span>Message the host directly to express your interest.</span></li>
            <li><strong>Ask Questions:</strong> <span>Clarify any details, such as responsibilities, accommodations, or local tips.</span></li>
            <li><strong>Show Your Passion:</strong> <span>A personalized message goes a long way in securing your spot.</span></li>
          </ul>
        </section>

        <section id="step-4">
          <h2>Step 4: Confirm Your Participation</h2>
          <ul>
            <li><strong>Agree on Details:</strong> <span>Confirm dates, expectations, and any logistics like transportation.</span></li>
            <li><strong>Submit Confirmation:</strong> <span>Mark your participation through the platform to secure your spot.</span></li>
            <li><strong>Prepare for Your Trip:</strong> <span>Use our resources to pack smart and prepare for your adventure.</span></li>
          </ul>
        </section>

        <section id="step-5">
          <h2>Step 5: Make an Impact</h2>
          <ul>
            <li><strong>Collaborate:</strong> <span>Work alongside your host and local community to achieve meaningful results.</span></li>
            <li><strong>Embrace the Experience:</strong> <span>Enjoy cultural immersion and form lasting connections.</span></li>
            <li><strong>Document Your Journey:</strong> <span>Share your memories and learnings with others.</span></li>
          </ul>
        </section>

        <section id="need-help">
          <h2>Need Help?</h2>
          <p>Check our FAQs or contact our support team for any assistance during the process. We’re here to ensure your Amani experience is smooth and fulfilling.</p>
          <p>Joining Amani is more than signing up for a platform—it’s becoming part of a global community committed to making the world a better place. Start today and discover how impactful your efforts can be!</p>
        </section>
      </div>
    </div>
  );
};

export default HowToJoin;
