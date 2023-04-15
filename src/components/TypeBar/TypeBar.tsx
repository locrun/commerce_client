import { FC, useState } from "react";
import { useGetAllTypesQuery } from "../../redux/api";

import cn from "classnames";
import s from "./TypeBar.module.scss"


interface ITypes {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string
}

export const TypeBar: FC = (props) => {

  const { data: types } = useGetAllTypesQuery()

  const [active, setActive] = useState("Стиральные машины");


  return (
    <ul className={s.list}>
      {types?.map(({ id, name }: ITypes) =>
        <li key={id} className={cn(s.listItem, {
          [s.active]: name === active
        })}
        >{name}
        </li>
      )}
    </ul>
  );
};
