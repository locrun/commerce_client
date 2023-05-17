
import { FC } from 'react'
import { Link } from 'react-router-dom'
import process from 'process'
import {
  IProduct, useAppendMutation, useDecrementMutation,
  useGetOneQuery, useIncrementMutation
} from '../../redux/api'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import s from "./Card.module.scss"

type PropsCard = {
  products: IProduct
}
export const Card: FC<PropsCard> = ({ products: { id, name, price, rating, image } }) => {

  const { data: basketItems } = useGetOneQuery(true);
  const [append] = useAppendMutation()
  const [fetchDecrement] = useDecrementMutation()
  const [fetchIncrement] = useIncrementMutation()

  const isItemInCart = basketItems?.products
    .some((item: { id: number }) => item.id === id)

  const AddProductToBasket = async () => {
    await append(id)
    console.log('Товар добавлен в корзину')
  }

  return (
    <div className={s.card}>
      <Link to={`detail/${id}`} >
        <div className={s.header}>
          <div className={s.new}>
            {name}
          </div>
          <div className={s.type}>Type</div>
        </div>
        <div className={s.image}>
          <img src={process.env.REACT_APP_IMAGE_URL + image} alt={name} />
        </div>
        <div className={s.footer}>
          <h4 className={s.title}>{name}</h4>
        </div >
      </Link >
      <div className={s.padding}>
        <div className={s.border}>
          <div className={s.price}>{price}$</div>
          {!isItemInCart ?
            <button className={s.button} onClick={() => AddProductToBasket()}>В корзину</button>
            :
            <div className={s.buttons}>
              <button onClick={() => fetchDecrement(id)}>
                <IndeterminateCheckBoxIcon color="primary" fontSize="large" />
              </button>
              {basketItems?.products.map((item: IProduct) => {
                let isItemInCart = item.id === id
                return (
                  isItemInCart ?
                    <span key={item.id}>{item.basket_product.quantity}</span>
                    : ''
                )
              })}
              <button>
                <AddBoxIcon onClick={() => fetchIncrement(id)}
                  color="primary" fontSize="large" />
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}
