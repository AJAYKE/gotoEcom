import Image from "next/image";
import React from "react";
import "./styles/SuccessMessage.css";

interface SuccessMessageProps {
  type: "contactForm" | "signUp";
}

const SuccessMessage: React.FC<SuccessMessageProps> = () => {
  return (
    <div className="success-message-container">
      <div className="success-message-card">
        <div className="email-icon top-left">
          <Image
            src="/images/icons/MailFlyerReachOut.svg"
            alt="Email icon"
            width={60}
            height={60}
          />
        </div>

        <h2 className="success-title">Thank You for Reaching Out! ❤️</h2>

        <p className="success-primary-text">
          We&apos;ve received your details and will get back to you shortly. 🚀
        </p>

        <p className="success-secondary-text">
          Our team is reviewing your request, and soon you&apos;ll be connecting
          with the right fashion enthusiasts to amplify your brand&apos;s
          visibility.
        </p>

        <p className="success-inbox-reminder">
          📧 Keep an eye on your inbox—we&apos;ll be in touch soon!
        </p>

        <div className="success-contact-info">
          <p>
            Got questions? Feel free to reach out at{" "}
            <a href="mailto:hello@gotoecom.com" className="email-link">
              hello@gotoecom.com
            </a>
          </p>
        </div>

        <div className="email-icon bottom-right">
          <Image
            src="/images/icons/MailFlyerReachOut.svg"
            alt="Email icon"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
