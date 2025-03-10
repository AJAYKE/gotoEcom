import { content } from "@/app/constants/content";
import React from "react";
import "./styles/Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-gradient-overlay"></div>
      <div className="hero-content">
        <div className="hero-tagline">{content.heroSection.tagline}</div>

        <h1 className="hero-title">
          {content.heroSection.headline[0]}
          <br />
          {content.heroSection.headline[1]}
        </h1>

        <p className="hero-description">
          {content.heroSection.description[0]}
          <br />
          {content.heroSection.description[1]}
        </p>
      </div>
      <div className="hero-gradient-line"></div>
    </section>
  );
};

export default Hero;
