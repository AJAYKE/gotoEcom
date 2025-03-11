"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./styles/Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }

      const sections = [
        { id: "home", navId: "home" },
        { id: "about-us", navId: "about-us" },
        { id: "how-it-works", navId: "how-it-works" },
        { id: "features", navId: "features" },
        { id: "contact-us", navId: "contact-us" },
        { id: "signup", navId: "signup" },
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (!element) return false;

        const rect = element.getBoundingClientRect();

        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.navId);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={`header-container ${scrolled ? "header-scrolled" : ""}`}>
      <div className="brand-logo" style={{ margin: "6px 0px 0px 0px" }}>
        <Image
          src={"images/icons/Onlylogo.svg"}
          alt={"GoToEcom"}
          width={60}
          height={60}
          className="logo-image"
        />
        <span className="logo-text">GoToEcom</span>
      </div>

      <div className="main-nav">
        <ul className="nav-links">
          <li>
            <Link
              href="#home"
              className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about-us"
              className={`nav-link ${
                activeSection === "about-us" ? "active" : ""
              }`}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#how-it-works"
              className={`nav-link ${
                activeSection === "how-it-works" ? "active" : ""
              }`}
            >
              How it Works
            </Link>
          </li>
          <li>
            <Link
              href="#features"
              className={`nav-link ${
                activeSection === "features" ? "active" : ""
              }`}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              href="#contact-us"
              className={`nav-link ${
                activeSection === "contact-us" ? "active" : ""
              }`}
            >
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      <Link
        href="#contact-us"
        className={`join-btn ${activeSection === "signup" ? "active-btn" : ""}`}
      >
        Join Now
      </Link>
    </header>
  );
};

export default Header;
