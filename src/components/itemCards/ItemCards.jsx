import React, { useState } from "react";
import { useSelector } from "react-redux";
import { CardItems } from "./card-items/CardItems";
import "./home_modules.scss";

export const ItemCards = ({ products }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase());
  };

  const name = useSelector((state) => state.filterReducer.name);
  const selected = products?.filter((item) => item.category === name);
  const product = name === "all" ? products : selected;

  const filter = product.filter((item) => {
    return item.title.toLowerCase().includes(value);
  });

  return (
    <>
      <input
        className="search-input"
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="...Поиск"
      />
      <div className="cards-wrapper">
        {filter?.map((items) => (
          <CardItems key={items.id} items={items} />
        ))}
      </div>
    </>
  );
};
