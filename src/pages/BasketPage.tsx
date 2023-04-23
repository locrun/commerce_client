import { FC } from 'react'
import { useGetAllCartItemsQuery } from '../redux/api'


export const BasketPage: FC = () => {

  const { data: result } = useGetAllCartItemsQuery(false)
  //console.log(result)
  return (
    <h1>Basket</h1>
  )
}
