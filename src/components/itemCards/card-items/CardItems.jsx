import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const CardItems = (props) => {
  const { category, id, title, image, price } = props.items;
  return (
    <div key={id} className="card">
      <div className="card-top">
        <div
          className={classNames("card-top__new", {
            "card-top__sale": category === "jewelery",
          })}
        >
          {category === "jewelery" ? "Sale" : "Новинка"}
        </div>
        <div className="card-top__cat">{category}</div>
      </div>
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <h4 className="card-title">
          <Link to={`product/${id}`}>{title}</Link>
        </h4>
        <div className="card-btn">
          <div className="card-btn__price">{price} $</div>
          <Link to={`order/${id}`} className="card-btn__btn">
            Купить
          </Link>
        </div>
      </div>
    </div>
  );
};
