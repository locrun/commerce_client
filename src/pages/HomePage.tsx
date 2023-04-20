import { FC } from 'react'
import { TypeBar } from '../components/TypeBar/TypeBar'
import { GoodsList } from '../components/GoodsList/GoodsList'

export const HomePage: FC = () => {
  return (
    <>
      <TypeBar />
      <GoodsList />
    </>
  )
}
