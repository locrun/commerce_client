import { FC, useEffect } from 'react'
import { Card } from './Card'
import { useLazyGetOneQuery } from '../../redux/api'
import s from "./BasketItems.module.scss"

export interface IBasketCard {
  basket_product: {
    quantity: number,
    basketId: number,
    productId: number,
  },
  id: number;
  name: string;
  price: string;
  image: string;
}

export const BasketItems: FC = () => {

  const [fetchBasket, { data }] = useLazyGetOneQuery();


  useEffect(() => {
    fetchBasket(false)
  }, [fetchBasket])

  return (
    <section className={s.grid}>
      {
        data?.products.map((product: IBasketCard) =>
          <Card key={product?.id} product={product} />
        )
      }
    </section>
  )
}
