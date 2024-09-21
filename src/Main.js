import React from "react";
import home from './assets/home.jpg';

const Main = () => {
  return (
    <>
      <main>
        {/* <div className="main-section"> */}
          <div className="main-content">
            <h1 className="main-title">Little Lemon</h1>
            <h3 className="main-subtitle">Chicago</h3>
            <p className="main-lead-text">We are a family owned Mediterranean restaurant,
              focused on traditional recipes served with a modern twist.
            </p>
            <button className="main-btn">Reserve a Table</button>
          </div>
          <div className="main-image">
            <img src={home} alt="home"/>
          </div>
        {/* </div> */}
      </main>
    </>
  )
}
export default Main;