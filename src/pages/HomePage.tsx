import { FC } from 'react'
import { Category } from '../components'
import { ProductList } from '../components'

export const HomePage: FC = () => {
  return (
    <>
      <Category />
      <ProductList />
    </>
  )
}
