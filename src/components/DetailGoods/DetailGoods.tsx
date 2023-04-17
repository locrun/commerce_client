import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IGoodsDetail, useLazyGetOneGoodsQuery, useGetOneGoodsQuery } from "../../redux/api";

import s from "./DetailGoods.module.scss"

export const DetailGoods: FC = () => {
  const { id } = useParams()

  //const { data } = useGetOneGoodsQuery<IGoodsDetail>(id)

  const [fetchOneGoods, { data }] = useLazyGetOneGoodsQuery<IGoodsDetail>()

  useEffect(() => {
    fetchOneGoods(id)
  }, [fetchOneGoods, id])

  return (
    <>
      <div className={s.image}>
        <img
          src={process.env.REACT_APP_API_URL + data?.img}
          alt={data?.name}
        />
      </div>
      <div className={s.info}>
        <h3 className={s.name}>{data?.name || "Название"}</h3>
        <div className={s.flex}>
          <span>Цена</span>
          <span>{data?.price}</span>
        </div>
        <ul className={s.list}>
          {data?.info &&
            data.info.map(({ id, title, description }) => {
              return (
                <li key={id} className={s.listItem}>
                  <span>{title}</span>
                  <span>{description}</span>
                </li>
              )
            })
          }
        </ul>
        <button className={s.button}>
          Добавить в корзину
        </button>
      </div>
    </>
  )
};
