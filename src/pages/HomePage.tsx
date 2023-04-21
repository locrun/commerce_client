import { FC } from 'react'
import { TypeBar } from '../components'
import { GoodsList } from '../components'

export const HomePage: FC = () => {
  return (
    <>
      <TypeBar />
      <GoodsList />
    </>
  )
}
