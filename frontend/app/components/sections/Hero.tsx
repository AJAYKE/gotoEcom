import React from "react";
import "./styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-gradient-overlay"></div>
      <div className="hero-content">
        <div className="hero-tagline">
          Your Fashion. Your Influence. Your Marketplace.
        </div>

        <h1 className="hero-title">
          The Future of Fashion
          <br />
          Commerce & Collaboration
        </h1>

        <p className="hero-description">
          A social commerce platform bridging the gap between Brands,
          <br />
          Creators & Fashion Enthusiasts.
        </p>
      </div>
      <div className="hero-gradient-line"></div>
    </section>
  );
};

export default Hero;
