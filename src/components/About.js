import React from "react";
import imageA from '../assets/Mario and Adrian A.jpg';

const About = () => {
  return (
    <>
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <h3 className="hero-subtitle">About Us</h3>
        <p className="hero-lead-text">Little Lemon is a charming neighborhood bistro that serves
          simple food and classic cocktails in a lively but casual environment. The restaurant
          features a locally-sourced menu with daily specials.
        </p>
      </div>
      <div className="hero-image">
        <img src={imageA} alt="Mario and Adrian"/>
      </div>
    </section>
    </>
  )
}

export default About;