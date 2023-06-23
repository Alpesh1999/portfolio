import React from "react";
import "./portfolio.css";
import Aboutme from "../Aboutme";
import Skills from "../Skills";
import Expericence from "../Expericence";
import Footer from "../Footer";
import Newsletter from "../Newsletter";
import Services from "../Services";
import Contactme from "../Contactme";
import MyPortfolio from "../Myportfolio";

const Portfolio = () => {
  return (
    <div className="portfolio_main">
      <section id="about" className="border-bottom">
        <Aboutme />
      </section>
      <section id="skills" className="border-bottom">
        <Skills />
      </section>
      <section id="expericence">
        <Expericence />
      </section>
      <section id="newsletter">
        <Newsletter />
      </section>
      <section id="services" className="border-bottom">
        <Services />
      </section>
      <section id="myPortfolio" className="border-bottom">
        <MyPortfolio />
      </section>
      <section id="contactme">
        <Contactme />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Portfolio;
