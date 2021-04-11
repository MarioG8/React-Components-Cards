import React from "react";
import "./CardFlex.scss";

function Cardflex({ title, img, description }) {
  return (
    <div className="cardFlex">
      <div className="cardFlex__body">
        <img src={img} alt="" className="cardFlex__img" />
        <h2 className="cardFlex__title">{title}</h2>
        <p className="cardFlex__desc">{description}</p>
      </div>
      <button className="cardFlex__btn">View this..</button>
    </div>
  );
}

export default Cardflex;
