import { FC } from 'react'
import { TypeBar } from '../components'
import { ProductList } from '../components'

export const HomePage: FC = () => {
  return (
    <>
      <TypeBar />
      <ProductList />
    </>
  )
}
