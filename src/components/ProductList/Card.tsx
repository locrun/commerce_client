
import { FC } from 'react'
import { Link } from 'react-router-dom'
import process from 'process'
import { IProduct, useAppendMutation } from '../../redux/api'
import s from "./Card.module.scss"

type PropsCard = {
  products: IProduct
}
export const Card: FC<PropsCard> = ({ products: { id, name, price, rating, image } }) => {

  const [append] = useAppendMutation()

  const AddProductToBasket = async () => {
    await append(id)
    console.log('Товар добавлен в корзину')
  }

  return (
    <div className={s.card}>
      <Link to={`detail/${id}`} >
        <div className={s.header}>
          <div className={s.new}>
            {name}
          </div>
          <div className={s.type}>Type</div>
        </div>
        <div className={s.image}>
          <img src={process.env.REACT_APP_IMAGE_URL + image} alt={name} />
        </div>
        <div className={s.footer}>
          <h4 className={s.title}>{name}</h4>
        </div >
      </Link >
      <div className={s.padding}>
        <div className={s.border}>
          <div className={s.price}>{price}$</div>
          <button className={s.button} onClick={() => AddProductToBasket()}>В корзину</button>
        </div>
      </div>
    </div>
  )
}
