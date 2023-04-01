import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import s from "./card.module.scss"

interface IProducts {
  id: number,
  name: string,
  price: number,
  rating: number
  image: string,
}

type PropsProducts = {
  products: IProducts
}


export const Card: FC<PropsProducts> = ({ products: { id, name, price, rating, image } }) => {
  return (
    <div className={s.card}>
      <div className={s.header}>
        <div className={s.new}>
          {name}
        </div>
        <div className={s.type}>Type</div>
      </div>
      <div className={s.image}>
        <img src={image} alt="картинка" />
      </div>
      <div className={s.footer}>
        <h4 className={s.title}>
          <Link to={`product/${1}`}> {name}</Link>
        </h4>
        <div className={s.border}>
          <div className={s.price}>{price}$</div>
          <Link to={`detail/${1}`} className={s.button}>
            Купить
          </Link>
        </div>
      </div >
    </div >
  )
}
