import Image from "next/image";
import React from "react";
import { content } from "../../constants/content";
import "./styles/AIPowered.css";

const AIPowered: React.FC = () => {
  return (
    <section className="ai-powered-section">
      <div className="ai-content">
        <h2 className="ai-title">{content.aiPowered.headline}</h2>
      </div>

      <div className="ai-graphic">
        <p className="ai-description">{content.aiPowered.description}</p>
        <div className="ai-image">
          <Image
            src="/images/icons/AiImage.svg"
            alt={content.aiPowered.headline}
            width={510}
            height={310}
          />
        </div>
      </div>
    </section>
  );
};

export default AIPowered;
