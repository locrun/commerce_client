import { FC } from 'react'
import { useGetAllBasketProductsQuery } from '../redux/api'


export const BasketPage: FC = () => {

  const { data: result } = useGetAllBasketProductsQuery(false)
  //console.log(result)
  return (
    <h1>Basket</h1>
  )
}
