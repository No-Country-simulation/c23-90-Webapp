import React from "react";
import './Home.css';
import CardExperiences from "../../components/Card/CardExperiences";

const Home = () => {
  return (
    <>
      <video src="https://videos.pexels.com/video-files/3209571/3209571-uhd_2560_1440_25fps.mp4" autoplay="true" muted="true" loop="true"></video>
      <header className="header">
        <h1>EASY VOLUNTEERING ABROAD</h1>
        <p>Explore 1,800+ proyects abroad & find your best volunteer program</p>
        <div className="search">
          <i class="bi bi-search"></i>
          <input type="text" name="searcher" id="searcher" placeholder="Search" className="homeInput"/>
        </div>
        <ul className="buttons">
          <li>
            <button className="btn btnHome">ARGENTINA</button>
          </li>
          <li>
            <button className="btn btnHome">MÉXICO</button>
          </li>
          <li>
            <button className="btn btnHome">PERÚ</button>
          </li>
          <li>
            <button className="btn btnHome">USA</button>
          </li>
          <li>
            <button className="btn btnHome">CANADÁ</button></li>
          <li>
            <button className="btn btnHome">EUROPA</button>
          </li>
        </ul>
      </header>
      <main className="main">
        <section className="galery">
          <h2 className="subtitle">Travel collaborating with hosts</h2>
          <p className="paragraph">Our community has more than 10 years of history, more than 300,000 reviews made and hosts in more than 140 countries</p>
          <CardExperiences />
        </section>

        <section className="whySection">
          <hr />
          <h2 className="subtitle">Why book with Amani</h2>
          <p className="paragraph">Amani is the world's leading platform for comparing international volunteer opportunities.
            We guide you through a safe and simple application process, including all necessary payments.
            Planning your next meaningful trip with Amani gives you access to:
          </p>
          <div className="access">
            <div className="item">
              <img src="/quality.png" alt="Quality Assurance" className="accessIcon"/>
              <div className="description">
              <h5>Quality Assurance</h5>
              <p>High ethical standards & transparent social impact.</p>
              </div>
            </div>
            <div className="item">
              <img src="/refund.png" alt="Refund Guarantee" className="accessIcon"/>
              <div className="description">
                <h5>Refund Guarantee</h5>
                <p>We refund your fees if your project canels your trip.</p>
              </div>
            </div>
            <div className="item">
              <img src="/flex.png" alt="Flex Option" className="accessIcon"/>
              <div className="description">
                <h5>Flex Option</h5>
                <p>Change your reservation at no extra costs.</p>
              </div>
            </div>
            <div className="item">
              <img src="/support.png" alt="Support & Mediation" className="accessIcon"/>
              <div className="description">
                <h5>Support & Mediation</h5>
                <p>We cover your back no matter what happens.</p>
              </div>
            </div>
          </div>
          <h5 className="enjoy">Enjoy our services for dedicated volunteers!</h5>
          <p className="paragraph">All Program feeds are charged directly by your volunteer organization.</p>
          <hr />
        </section>

      </main>
    </>
  );
};
export default Home;