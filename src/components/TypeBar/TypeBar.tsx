import { FC, useState } from "react";
import classNames from "classnames";

import s from "./typebar.module.scss"

interface ITypes {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string
}

type PropsTypeBar = {
  types: ITypes[] | undefined
}

export const TypeBar: FC<PropsTypeBar> = (props) => {
  const [active, setActive] = useState("WINDOWS");

  return (
    <ul className={s.list}>
      {props?.types?.map(({ id, name }) =>
        <li key={id} className={classNames(s.listItem, {
          [s.active]: name === active
        })}
        >{name}
        </li>
      )}
    </ul>
  );
};
