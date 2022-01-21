import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { productType } from "../../redux/actions";
export const Filter = () => {
  const [active, setActive] = useState("all");

  const buttonsData = [
    { id: 1, name: "all", label: "Все товары" },
    {
      id: 2,
      name: "jewelery",
      label: "Украшения",
    },
    {
      id: 3,
      name: "men's clothing",
      label: "Мужская одежда",
    },
    {
      id: 4,
      name: "women's clothing",
      label: "Женская одежда",
    },
    { id: 5, name: "electronics", label: "Электроника" },
  ];

  const dispatch = useDispatch();

  const clickHandler = (name) => {
    setActive(name);
    dispatch(productType(name));
  };

  return (
    <div className="filter-wrapper">
      <ul className="filter">
        <li className="filter__element">
          {buttonsData.map(({ id, name, label }) => {
            return (
              <p
                key={id}
                onClick={() => clickHandler(name)}
                className={classNames("filter__link ", {
                  "filter__link--active": name === active,
                })}
              >
                {label}
              </p>
            );
          })}
        </li>
      </ul>
    </div>
  );
};
