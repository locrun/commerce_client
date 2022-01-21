import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemCart, removeItemCart } from "../../redux/actions";
import deleteBtn from "../../images/delete-icon.svg";
import "./cart_modules.scss";

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const clickHandler = (item) => {
    const isItemCart = cartItems.some((cartItem) => cartItem.id === item.id);
    isItemCart
      ? dispatch(removeItemCart(item.id))
      : dispatch(addItemCart(item));
  };

  return (
    <>
      <div className="product-wrapper">
        <ul className="cart-wrapper">
          {cartItems?.length > 0 ? (
            cartItems?.map((item) => {
              const { id, title, image, price, description, rating, category } =
                item;
              return (
                <li key={title} className="cart-item">
                  <div className="cart-item__image">
                    <img src={image} alt="pic" />
                  </div>
                  <div className="content">
                    <h3 className="cart-item__title">{title}</h3>
                    <div className="cart-item__price">
                      <span className="txt-price">Price</span>: {price} $
                    </div>
                    <div className="cart-item__category">{category}</div>
                    <div className="cart-item__desc">{description}</div>
                    <div className="d-fl">
                      <div className="cart-item__rating">
                        <strong>rating: {rating.rate}</strong>
                        <br />
                        <strong>count: {rating.count}</strong>
                      </div>
                      <div>
                        <Link to={`/order/${id}`} className="cart-btn-order ">
                          Оформить заказ
                        </Link>
                      </div>
                      <button
                        type="button"
                        className="button-delete"
                        onClick={() => clickHandler(item)}
                      >
                        <img src={deleteBtn} title="Удалить" alt="Delete" />
                      </button>
                    </div>
                  </div>
                </li>
              );
            })
          ) : (
            <h1 className="notification">Корзина пуста</h1>
          )}
        </ul>
      </div>
    </>
  );
};
