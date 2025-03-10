import { MobileFrame } from "@/public/images/icons/mobile frames-1";
import Image from "next/image";
import React from "react";
import { content } from "../../constants/content";
import "./styles/Features.css";

const Features: React.FC = () => {
  const featureIcons = [
    "/images/icons/FrndsAndFamilyIcon.svg",
    "/images/icons/FashionCommunityIcon.svg",
    "/images/icons/ShowcaseYourStyleIcon.svg",
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <h2 className="section-title">{content.features.title}</h2>
        <h3 className="features-headline">{content.features.headline}</h3>
      </div>

      <div className="features-content">
        <div className="mobile-frame">
          <MobileFrame />
        </div>
        <div className="features-list">
          {content.features.featureList.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <Image
                  src={featureIcons[index]}
                  alt={feature.title}
                  width={24}
                  height={24}
                />
              </div>
              <div className="feature-info">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
