import React from "react";
import  hero from './assets/hero.jpg';

const Hero = () => {
  return (
    <>
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <h3 className="hero-subtitle">Chicago</h3>
        <p className="hero-lead-text">We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button className="hero-btn">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={hero} alt="hero"/>
      </div>
    </div>
    </>
  )
}

export default Hero;