import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { ICategory, useGetAllCategoriesQuery } from "../../redux/api";
import { setIdCategory } from "../../redux/slices/categorySlice";
import { setCurrentPage } from "../../redux/slices/pageSlice";

import cn from "classnames";
import s from "./Category.module.scss"

export const Category: FC = (props) => {

  const dispatch = useAppDispatch()

  const { data: category } = useGetAllCategoriesQuery()
  const { categoryId } = useAppSelector(state => state.type)

  const getTypeId = (id: number) => {
    dispatch(setIdCategory({ categoryId: id }))
    dispatch(setCurrentPage(1))
  }

  return (
    <ul className={s.list}>
      {category?.map(({ id, name }: ICategory) =>
        <li
          key={id}
          onClick={() => getTypeId(id)}
          className={cn(s.listItem, {
            [s.active]: id === categoryId
          })}
        >
          {name}
        </li>
      )}
    </ul>
  );
};
