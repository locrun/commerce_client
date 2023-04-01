import { FC, useState } from "react";
import classNames from "classnames";

import s from "./typebar.module.scss"

export const TypeBar: FC = () => {
  const [active, setActive] = useState("jewelery");

  const buttons = [
    { id: 1, name: "all", title: "Все товары" },
    {
      id: 2,
      name: "jewelery",
      title: "Украшения",
    },
    {
      id: 3,
      name: "men's clothing",
      title: "Мужская одежда",
    },
    {
      id: 4,
      name: "women's clothing",
      title: "Женская одежда",
    },
    { id: 5, name: "electronics", title: "Электроника" },
  ];

  return (
    <ul className={s.list}>
      {buttons.map(({ id, name, title }) =>
        <li className={classNames(s.listItem, {
          [s.active]: name === active
        })}
        >{title}
        </li>
      )}
    </ul>
  );
};
