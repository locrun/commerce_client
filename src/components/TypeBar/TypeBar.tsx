import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { useGetAllTypesQuery } from "../../redux/api";

import cn from "classnames";
import s from "./TypeBar.module.scss"
import { setSelectedType } from "../../redux/slices/typeSlice";
import { setCurrentPage } from "../../redux/slices/pageSlice";


interface ITypes {
  id: number,
  name: string,
  createdAt: string,
  updatedAt: string
}

export const TypeBar: FC = (props) => {

  const dispatch = useAppDispatch()
  const { data: types } = useGetAllTypesQuery()

  const [active, setActive] = useState("Стиральные машины");

  const getTypeId = (id: number) => {
    dispatch(setSelectedType({ typeId: id }))
    dispatch(setCurrentPage(1))
  }

  return (
    <ul className={s.list}>
      {types?.map(({ id, name }: ITypes) =>
        <li
          key={id}
          onClick={() => getTypeId(id)}
          className={cn(s.listItem, {
            [s.active]: name === active
          })}
        >{name}
        </li>
      )}
    </ul>
  );
};
