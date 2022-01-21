import React from "react";

export const Form = () => {
  return (
    <form className="order-form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Имя и Фамилия"
        />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Телефон" />
      </div>
      <div className="form-group">
        <input type="email" className="form-control" placeholder="Email" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Адрес" />
      </div>

      <div className="form-group">
        <button type="button" className="btn btn-primary">
          Оформить заказ
        </button>
      </div>
    </form>
  );
};
