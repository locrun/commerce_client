import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { ICategory, useGetAllCategoriesQuery } from "../../redux/api";
import { setTypeId } from "../../redux/slices/typeSlice";
import { setCurrentPage } from "../../redux/slices/pageSlice";

import cn from "classnames";
import s from "./TypeBar.module.scss"

export const TypeBar: FC = (props) => {

  const dispatch = useAppDispatch()

  const { data: category } = useGetAllCategoriesQuery()
  const { typeId } = useAppSelector(state => state.type)

  const getTypeId = (id: number) => {
    dispatch(setTypeId({ typeId: id }))
    dispatch(setCurrentPage(1))
  }

  return (
    <ul className={s.list}>
      {category?.map(({ id, name }: ICategory) =>
        <li
          key={id}
          onClick={() => getTypeId(id)}
          className={cn(s.listItem, {
            [s.active]: id === typeId
          })}
        >
          {name}
        </li>
      )}
    </ul>
  );
};
