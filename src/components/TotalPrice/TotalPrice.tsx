import { FC } from 'react'
import s from "./TotalPrice.module.scss"

interface TotalPice {
  totalPrice: number
}

export const TotalPrice: FC<TotalPice> = ({ totalPrice }) => {
  return (
    <div className={s.order}>
      <div className={s.totalPrice}>
        &#8381; {totalPrice}
      </div>
      <button className={s.orderBtn}>
        Перейти к оформлению
      </button>
    </div>
  )
}
