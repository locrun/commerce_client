import React from "react";
import { Link } from "react-router-dom";
import padblock from "../../images/padlock.svg";
import cart from "../../images/cart.svg";
import "./header_modules.scss";
import { useSelector } from "react-redux";

export const Header = () => {
  const quentity = useSelector((state) => state.cartReducer.quentity);
  const items = useSelector((state) => state.cartReducer.cartItems);
  const totalPrice = items
    .reduce((acc, item) => (acc += item.price), 0)
    .toFixed(2);

  return (
    <>
      <div className="header">
        <div className="d-flex">
          <Link to="/" className="site-logo">
            <span>fake</span>Store
          </Link>
          <div className="admin-link">
            <div>
              <Link style={{ textDecoration: "none" }} to="cart">
                <img
                  width="38"
                  src={cart}
                  alt="cart"
                  title="Перейти в корзину"
                />
                <span className="quentity">{quentity}</span>
              </Link>
              {totalPrice > 0 ? (
                <span style={{ paddingLeft: "15px" }}>{totalPrice} $</span>
              ) : null}
            </div>
            <img width="38" src={padblock} alt="icon" title="Выйти" />
          </div>
        </div>
      </div>
    </>
  );
};
