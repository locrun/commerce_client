import { FC, useEffect, useState } from 'react'
import { useGetOneQuery } from '../../redux/api'
import { Card } from './Card'
import { TotalPrice } from '../TotalPrice';

import s from "./BasketItems.module.scss"

export interface IBasketItems {
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

  const { data: basketItems } = useGetOneQuery(true)
  const [sortedItems, setSortedItems] = useState<IBasketItems[]>()

  useEffect(() => {
    setSortedItems([...basketItems.products].sort((a: { id: number; }, b: { id: number; }) => a.id > b.id ? 1 : -1))
  }, [basketItems])

  const totalPrice = basketItems?.products.reduce((acc: number, item: any) =>
    item.price * item.basket_product.quantity + acc, 0);

  if (basketItems?.products.length === 0)
    return <h1 className={s.alert}>Добавьте товары в корзину</h1>

  return (
    <section className={s.container}>
      <div className={s.flexCol}>
        {
          sortedItems?.map((item: IBasketItems) =>
            <Card key={item.id} product={item} />
          )
        }
      </div>
      <TotalPrice totalPrice={totalPrice} />
    </section>
  )
}
