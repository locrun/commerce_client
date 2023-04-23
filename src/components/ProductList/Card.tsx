
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import process from 'process'
import { IProduct } from '../../redux/api'
import s from "./Card.module.scss"

type PropsCard = {
  products: IProduct
}
export const Card: FC<PropsCard> = ({ products: { id, name, price, rating, img } }) => {

  return (
    <Link to={`detail/${id}`} className={s.card}>
      <div className={s.header}>
        <div className={s.new}>
          {name}
        </div>
        <div className={s.type}>Type</div>
      </div>
      <div className={s.image}>
        <img src={process.env.REACT_APP_IMAGE_URL + img} alt={name} />
      </div>
      <div className={s.footer}>
        <h4 className={s.title}>{name}</h4>
        <div className={s.border}>
          <div className={s.price}>{price}$</div>
          <div className={s.button}>Купить</div>
        </div>
      </div >
    </Link >
  )
}
