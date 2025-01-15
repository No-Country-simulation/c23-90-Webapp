import React from "react";
import './Home.css';
import CardExperiences from "../../components/Card/CardExperiences";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <h1>AMANI - Volunteering Platform</h1>
        <p>Welcome to the AMANI platform!</p>
      </div>
      <div className="layout">
        <CardExperiences />
        <CardExperiences />
        <CardExperiences />
        <CardExperiences />
        <CardExperiences />
        <CardExperiences />
      </div>
    </>
  );
};

export default Home;