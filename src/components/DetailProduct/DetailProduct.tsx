import { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProductDetail, useGetOneProductQuery, useAppendMutation, useGetOneQuery }
  from "../../redux/api";
import s from "./DetailProduct.module.scss"

export const DetailProduct: FC = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { data } = useGetOneProductQuery<IProductDetail>(id)
  const [append] = useAppendMutation()

  const { data: items } = useGetOneQuery(true);

  const isItemInCart = items?.products.some((item: { id: number; }) => item.id === Number(id))


  const AddProductToBasket = async () => {
    await append(data.id)
    console.log('Товар добавлен в корзину')
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
            {
              isItemInCart ?
                <button className={s.goToBasket} onClick={() => navigate("/basket")}>
                  Перейти в корзину
                </button>
                :
                <button className={s.addToBasket} onClick={() => AddProductToBasket()}>
                  Добавить в корзину
                </button>
            }
          </div>
        </>
      }
    </>
  )
};
