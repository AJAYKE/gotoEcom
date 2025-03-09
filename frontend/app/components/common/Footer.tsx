import Image from "next/image";
import React from "react";
import { content } from "../../constants/content";
import "./styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <div className="logo">
            <Image
              src="/images/icons/Onlylogo.svg"
              alt="GotoEcom Logo"
              width={70}
              height={70}
            />
          </div>
          <p className="footer-tagline">{content.footer.tagline}</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-section">
            <h4>{content.footer.sections.aboutUs.title}</h4>
            <ul>
              {content.footer.sections.aboutUs.links.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4>{content.footer.sections.support.title}</h4>
            <ul>
              {content.footer.sections.support.links.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links-section">
            <h4>{content.footer.sections.social.title}</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <Image
                  src="/images/icons/Youtube.svg"
                  alt="YouTube"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="social-icon">
                <Image
                  src="/images/icons/Linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
              <a href="#" className="social-icon">
                <Image
                  src="/images/icons/Instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        © GotoEcom. Copyright 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
