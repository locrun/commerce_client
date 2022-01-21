import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemCart, removeItemCart } from "../../../redux/actions";

export const CardItem = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const item = props.products?.find((item) => {
    return item.id === parseInt(location.pathname.slice(9, 14));
  });

  const isCartItem = useCallback(
    (item) => {
      return cartItems.some((cartItem) => cartItem.id === item?.id);
    },
    [cartItems]
  );

  const [toggleBtn, setToggleBtn] = useState(isCartItem);

  useEffect(() => {
    const isItemCart = isCartItem(item);
    setToggleBtn(isItemCart);
  }, [isCartItem, item]);

  const clickHandler = (item) => {
    const isItemCart = isCartItem(item);
    isItemCart
      ? dispatch(removeItemCart(item.id))
      : dispatch(addItemCart(item));
  };

  return item ? (
    <>
      <div className="product-title">{item.title}</div>
      <div className="prod-flex">
        <div className="product-img">
          <img src={item.image} alt="" />
        </div>
        <div className="desc-wrapper">
          <div className="product-price">{item.price} $</div>
          <button
            type="button"
            onClick={() => clickHandler(item)}
            className="product-btn-order"
          >
            {!toggleBtn ? "Добавить в корзину" : "Убрать из корзины"}
          </button>
          <div className="product-desc">
            <p>{item.description}</p>
          </div>
        </div>
      </div>
    </>
  ) : null;
};
