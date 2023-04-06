import { FC, useEffect } from 'react'
import { useAppSelector } from '../hooks/redux-hooks'
import { useGetTypeQuery } from '../redux/authApi'
import { selectAuth } from '../redux/slices/authSlice'
import { TypeBar, ProductList } from '../components'

export const Catalog: FC = () => {
  const isAuth = useAppSelector(selectAuth)
  const { data } = useGetTypeQuery(null)

  return (
    <>
      <TypeBar types={data} />
      <ProductList />
    </>
  )
}
