import { FC } from 'react';
import { useDecrementMutation, useIncrementMutation, useRemoveMutation } from '../../redux/api';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import s from "./BasketItems.module.scss";


interface ICard {
  product: {
    basket_product: {
      quantity: number,
      basketId: number,
      productId: number,
    },
    id: number;
    name: string;
    price: string;
    image: string;
  }
}

export const Card: FC<ICard> = ({ product }) => {

  const [fetchRemoveProduct] = useRemoveMutation();
  const [fetchDecrement] = useDecrementMutation()
  const [fetchIncrement] = useIncrementMutation()


  return (
    <div className={s.card}>
      <div className={s.flex}>
        <div className={s.image}>
          <img src={process.env.REACT_APP_IMAGE_URL + product.image} alt="product" />
        </div>
        <div className={s.group}>
          <h4 className={s.title}>{product.name}</h4>
          <div className={s.price}>{product.price} &#8381;</div>
        </div>
        <button className={s.remove} onClick={() => fetchRemoveProduct(product.id)}>
          <DeleteForeverIcon color="primary" fontSize="large" />
        </button>
      </div>
      <div className={s.flex}>
        <div className={s.buttons}>
          <button onClick={() => fetchDecrement(product.id)}>
            <IndeterminateCheckBoxIcon color="primary" fontSize="large" />
          </button>
          {product.basket_product?.quantity}
          <button>
            <AddBoxIcon onClick={() => fetchIncrement(product.id)}
              color="primary" fontSize="large" />
          </button>
        </div>
        <div className={s.bottomPrice}>{product.price} &#8381;</div>
      </div>
    </div>
  )
};
