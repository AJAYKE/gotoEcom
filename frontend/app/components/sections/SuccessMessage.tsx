import Image from "next/image";
import React from "react";
import "./styles/SuccessMessage.css";

interface SuccessMessageProps {
  type: "contactForm" | "signUp";
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ type }) => {
  if (type === "contactForm") {
    return (
      <div className="success-message-container">
        <div className="success-message-card">
          <div className="email-icon top-left">
            <Image
              src="/images/icons/MailFlyerReachOut.svg"
              alt="Email icon"
              width={120}
              height={120}
            />
          </div>

          <h2 className="success-title">Thank You for Reaching Out! ❤️</h2>

          <p className="success-primary-text">
            We&apos;ve received your details and will get back to you shortly.
            🚀
          </p>

          <p className="success-secondary-text">
            Our team is reviewing your request, and soon you&apos;ll be
            connecting with the right fashion enthusiasts to amplify your
            brand&apos;s visibility.
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
              width={140}
              height={140}
              className="email-icon"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="signup-success-container">
      <div className="waves-background"></div>

      <div className="signup-success-content">
        <h2 className="signup-success-title">
          Woohoo! You&apos;re In! <span className="party-emoji">🎉</span>
        </h2>
        <p className="signup-success-message">
          You&apos;re on the list! Stay tuned for exclusive updates and be the
          first to experience GotoEcom when we go live.
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
