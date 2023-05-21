import { FC } from 'react';
import { useDecrementMutation, useIncrementMutation, useRemoveMutation } from '../../redux/api';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import s from "./BasketItems.module.scss";

export interface ICard {
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

export const Card: FC<ICard> = ({ product: { basket_product, id, name, price, image } }) => {

  const [fetchDecrement] = useDecrementMutation()
  const [fetchIncrement] = useIncrementMutation()
  const [fetchRemoveProduct] = useRemoveMutation()

  return (
    <div className={s.card}>
      <div className={s.flex}>
        <div className={s.image}>
          <img src={process.env.REACT_APP_IMAGE_URL + image} alt="product" />
        </div>
        <div className={s.flexCol}>
          <div className={s.group}>
            <h4 className={s.title}>{name}</h4>
            <div className={s.price}>{price} &#8381;</div>
          </div>
          <div className={s.flex}>
            <div className={s.buttons}>
              <button onClick={() => fetchDecrement(id)}>
                <IndeterminateCheckBoxIcon color="primary" fontSize="medium" />
              </button>
              {basket_product.quantity}
              <button onClick={() => fetchIncrement(id)}>
                <AddBoxIcon
                  color="primary" fontSize="medium" />
              </button>
            </div>
          </div>
          <button className={s.remove} onClick={() => fetchRemoveProduct(id)}>
            <DeleteForeverIcon color="primary" fontSize="medium" />
          </button>
        </div>
        <div className={s.bottomPrice}>{price} &#8381;</div>
      </div>
    </div >
  )
};
