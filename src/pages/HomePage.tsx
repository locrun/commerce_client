import { FC } from 'react'
import { useAppSelector } from '../hooks/redux-hooks'
import { selectAuth } from '../redux/slices/authSlice'
import { TypeBar, GoodsList } from '../components'

export const HomePage: FC = () => {
  //const isAuth = useAppSelector(selectAuth)

  return (
    <>
      <TypeBar />
      <GoodsList />
    </>
  )
}
