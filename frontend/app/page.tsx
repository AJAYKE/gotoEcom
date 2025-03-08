"use client";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import AboutUs from "./components/sections/AboutUs";
import AIPowered from "./components/sections/AIPowered";
import Features from "./components/sections/Features";
import Hero from "./components/sections/Hero";
import HowItWorks from "./components/sections/HowItWorks";
import SignUp from "./components/sections/SignUp";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Header />

      <main className="main-content">
        <Hero />
        <AboutUs />
        <HowItWorks />
        <Features />
        <AIPowered />
        <SignUp />
      </main>

      <Footer />
    </>
  );
}
