import React, { useCallback, useEffect, useState } from "react";
import { content } from "../../constants/content";
import Button from "../common/Button";
import ContactForm from "../common/ContactForm";
import SuccessMessage from "../sections/SuccessMessage";
import "./styles/HowItWorksBrands.css";

const HowItWorksBrands: React.FC = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && showContactForm) {
        setShowContactForm(false);
      }
    },
    [showContactForm]
  );
  useEffect(() => {
    if (showContactForm) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [showContactForm, handleEscapeKey]);
  const handleFormSubmit = () => {
    setFormSubmitted(true);
    setShowContactForm(false);
  };
  const handleCloseModal = () => {
    setShowContactForm(false);
  };
  if (formSubmitted) {
    return <SuccessMessage type="contactForm" />;
  }

  return (
    <div className="how-brands">
      <div className="brands-info">
        <p className="brands-description">
          {content.howItWorksBrands.description}
        </p>

        <p className="brands-question">{content.howItWorksBrands.question}</p>

        <Button
          onClick={() => setShowContactForm(true)}
          className="reach-out-btn"
        >
          {content.howItWorksBrands.cta} →
        </Button>
      </div>

      {showContactForm && (
        <div className="contact-form-overlay">
          <div className="contact-form-container">
            <button className="close-button" onClick={handleCloseModal}>
              &times;
            </button>
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default HowItWorksBrands;
