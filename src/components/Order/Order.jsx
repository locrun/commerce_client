import React from "react";
import { useLocation } from "react-router-dom";
import { CardItems } from "./card-item/CardItems";
import { Form } from "./form/Form";
import "./order_modules.scss";
export const Order = ({ products }) => {
  const location = useLocation();

  const item = products?.find((item) => {
    return item.id === parseInt(location.pathname.slice(7, 9));
  });

  return (
    <div className="order-container">
      <div className="title-1">Сделать заказ</div>
      <CardItems item={item} />
      <Form />
    </div>
  );
};
