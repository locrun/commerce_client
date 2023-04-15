import process from 'process'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IGoods } from '../../redux/api'
import s from "./Card.module.scss"

type PropsCard = {
  goods: IGoods
}
export const Card: FC<PropsCard> = ({ goods: { id, name, price, rating, img } }) => {

  return (
    <Link to={`detail/${id}`} className={s.card}>
      <div className={s.header}>
        <div className={s.new}>
          {name}
        </div>
        <div className={s.type}>Type</div>
      </div>
      <div className={s.image}>
        <img src={process.env.REACT_APP_API_URL + img} alt="картинка" />
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
