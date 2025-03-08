import { Brands } from "@/public/images/icons/brands";
import { FashionEnthusiastsIcon } from "@/public/images/icons/Icon-Fashion enthusisasts";
import React from "react";
import "./styles/AboutUs.css";

const AboutUs: React.FC = () => {
  return (
    <section className="about-section" id="about-us">
      <div className="about-header">
        <h2 className="about-title">About Us</h2>
      </div>

      <p className="about-description">
        GOTOECOM is a social commerce platform where fashion enthusiasts
        discover, share, and shape trends. It connects people through style,
        making fashion more interactive and community-driven. Explore new looks,
        express your fashion sense, and be part of the conversation that defines
        what&apos;s next in fashion.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <div className="card-icon">
            <FashionEnthusiastsIcon />
          </div>

          <h3 className="card-title">Fashion Enthusiasts</h3>
          <p className="card-subtitle">
            Monetize Your Influence & Shape Trends
          </p>

          <ul className="card-benefits">
            <li>
              <div className="check-icon">✓</div>
              <span>Collaborate with brands</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>
                Showcase your style with trend-focused content & share your
                fashion insights.
              </span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>
                Earn by creating authentic, engaging content & affiliating links
              </span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>Connect with followers through discussions & polls</span>
            </li>
          </ul>
        </div>

        <div className="about-card">
          <div className="card-icon">
            <Brands />
          </div>

          <h3 className="card-title">Brands</h3>
          <p className="card-subtitle">
            Expand Your Reach & Engage the Right Audience
          </p>

          <ul className="card-benefits">
            <li>
              <div className="check-icon">✓</div>
              <span>Effortless influencer discovery & collaboration</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>
                Use GOTOECOM&apos;s analytics to track campaign performance.
              </span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>Gain targeted exposure through creator-driven content</span>
            </li>
            <li>
              <div className="check-icon">✓</div>
              <span>
                Track engagement, reach, and conversion rates in real time.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
