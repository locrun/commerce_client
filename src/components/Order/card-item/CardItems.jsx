import React from "react";

export const CardItems = ({ item }) => {
  return item ? (
    <div key={item.id} className="order-item">
      <div className="order-img">
        <img className="order-img" src={item.image} alt="pic" />
      </div>
      <div className="order-desc">
        <h4 className="order-title">{item.title}</h4>
        <div className="order-price">{item.price} $</div>
      </div>
    </div>
  ) : null;
};
