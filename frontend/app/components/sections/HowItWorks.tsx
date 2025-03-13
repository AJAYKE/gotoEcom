import React, { useState } from "react";
import HowItWorksBrands from "./HowItWorksBrands";
import HowItWorksFashion from "./HowItWorksFashion";
import "./styles/HowItWorks.css";

const HowItWorks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"fashion" | "brands">("fashion");

  return (
    <section className="how-it-works-section" id="how-it-works">
      <h2 className="section-title-how-it-works">How it works ?</h2>

      <div className="tabs">
        <button
          className={`tab ${activeTab === "fashion" ? "active" : ""}`}
          onClick={() => setActiveTab("fashion")}
        >
          Fashion Enthusiasts
        </button>
        <button
          className={`tab ${activeTab === "brands" ? "active" : ""}`}
          onClick={() => setActiveTab("brands")}
        >
          Brands
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "fashion" ? <HowItWorksFashion /> : <HowItWorksBrands />}
      </div>
    </section>
  );
};

export default HowItWorks;
