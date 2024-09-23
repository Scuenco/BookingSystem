import React from "react";
import salad from './assets/greek salad.jpg';
import bruchetta from './assets/bruchetta.svg';
import dessert from './assets/lemon dessert.jpg';

const Specials = () => {
  return (
    <>
    <div className="specials section-one">
      <div>
        <h2 className="specials-title">This week's specials!</h2>
      </div>
      <div>
         <button className="specials-btn">Online Menu</button>
      </div>
    </div>
    <div className="specials">
      <article>
        <img src={salad} alt="greek salad"/>
        <div className="specials-item">
          <h3>Greek Salad</h3>
          <span>$12.99</span>
        </div>
        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
        <div className="specials-order">
          <h4>Order a delivery</h4>
        </div>
      </article>
      <article>
        <img src={bruchetta} alt="bruchetta"/>
        <div className="specials-item">
          <h3>Bruchetta</h3>
          <span>$6.99</span>
        </div>
        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
        <div className="specials-order">
          <h4>Order a delivery</h4>
        </div>
      </article>
      <article>
        <img src={dessert} alt="lemon dessert"/>
        <div className="specials-item">
          <h3>Lemon Dessert</h3>
          <span>$5.00</span>
        </div>
        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
        <div className="specials-order">
          <h4>Order a delivery</h4>
        </div>
      </article>
    </div>
    </>
  )
}

export default Specials;