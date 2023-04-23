import { FC } from "react";
import { useParams } from "react-router-dom";
import { IGoodsDetail, useAddProductsToBasketMutation, useGetAllBasketProductsQuery, useGetOneGoodsQuery } from "../../redux/api";

import s from "./DetailGoods.module.scss"

export const DetailGoods: FC = () => {
  const { id } = useParams()

  const { data } = useGetOneGoodsQuery<IGoodsDetail>(id)
  const [fetchAddBasket] = useAddProductsToBasketMutation()

  const { data: result } = useGetAllBasketProductsQuery(false)
  console.log(result)

  const GoodsHandlerAddToCart = async () => {
    await fetchAddBasket({ productId: data.id })
  }

  return (
    <>
      {
        data &&
        <>
          <div className={s.image}>
            <img
              src={process.env.REACT_APP_IMAGE_URL + data.img}
              alt={data.name}
            />
          </div>
          <div className={s.info}>
            <h3 className={s.name}>{data.name || "Название"}</h3>
            <div className={s.flex}>
              <span>Цена</span>
              <span>{data?.price}</span>
            </div>
            <ul className={s.list}>
              {data.info.map(({ id, title, description }) => {
                return (
                  <li key={id} className={s.listItem}>
                    <span>{title}</span>
                    <span>{description}</span>
                  </li>
                )
              })}
            </ul>
            <button className={s.button} onClick={() => GoodsHandlerAddToCart()}>
              Добавить в корзину
            </button>
          </div>
        </>
      }
    </>
  )
};
