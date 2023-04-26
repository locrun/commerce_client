import { FC } from "react";
import { useParams } from "react-router-dom";
import { IProductDetail, useAddProductsToBasketMutation, useGetOneProductQuery } from "../../redux/api";

import s from "./DetailProduct.module.scss"

export const DetailProduct: FC = () => {
  const { id } = useParams()

  const { data } = useGetOneProductQuery<IProductDetail>(id)
  const [fetchBasket] = useAddProductsToBasketMutation()


  const AddProductToBasket = async () => {
    //await fetchBasket({ productId: data.id })
  }

  return (
    <>
      {
        data &&
        <>
          <div className={s.image}>
            <img
              src={process.env.REACT_APP_IMAGE_URL + data.image}
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
            <button className={s.button} onClick={() => AddProductToBasket()}>
              Добавить в корзину
            </button>
          </div>
        </>
      }
    </>
  )
};
