import React from "react";
import { content } from "../../constants/content";
import "./styles/HowItWorksFashion.css";

const HowItWorksFashion: React.FC = () => {
  return (
    <div className="how-fashion">
      <div className="steps-grid">
        {content.howItWorksFashion.steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-header">
              <div className="step-number">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
            </div>
            <div className="step-description">{step.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksFashion;
