import React from "react";
import { CardItem } from "./card-item/CardItem";
import "./product_modules.scss";

export const Product = ({ products }) => {
  return (
    <div className="product-wrapper">
      <CardItem products={products} />
    </div>
  );
};
