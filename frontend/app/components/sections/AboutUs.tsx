import { content } from "@/app/constants/content";
import { Brands } from "@/public/images/icons/brands";
import { FashionEnthusiastsIcon } from "@/public/images/icons/Icon-Fashion enthusisasts";
import React from "react";
import "./styles/AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <section className="about-section" id="about-us">
      <div className="about-header">
        <h2 className="about-title">{content.aboutUs.headline}</h2>
      </div>

      <p className="about-description">{content.aboutUs.description}</p>

      <div className="about-cards">
        <div className="about-card">
          <div className="card-icon">
            <FashionEnthusiastsIcon />
          </div>
          <div>
            <h3 className="card-title">{content.fashionEnthusiasts.title}</h3>
            <p className="card-subtitle">
              {content.fashionEnthusiasts.subtitle}
            </p>
          </div>
          <ul className="card-benefits">
            <li>
              <div className="check-icon">✓</div>
              <span>{content.fashionEnthusiasts.benefits[0]}</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>{content.fashionEnthusiasts.benefits[1]}</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>{content.fashionEnthusiasts.benefits[2]}</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>{content.fashionEnthusiasts.benefits[3]}</span>
            </li>
          </ul>
        </div>

        <div className="about-card">
          <div className="card-icon">
            <Brands />
          </div>
          <div>
            <h3 className="card-title">{content.brands.title}</h3>
            <p className="card-subtitle">{content.brands.subtitle}</p>
          </div>
          <ul className="card-benefits">
            <li>
              <div className="check-icon">✓</div>
              <span>{content.brands.benefits[0]}</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>{content.brands.benefits[1]}</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>{content.brands.benefits[2]}</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>{content.brands.benefits[3]}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
