import { FC } from 'react'
import { Category } from '../components'
import { GoodsList } from '../components'

export const HomePage: FC = () => {
  return (
    <>
      <Category />
      <GoodsList />
    </>
  )
}
