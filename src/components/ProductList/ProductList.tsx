import { FC } from "react";
import { Card } from "./Card";
import s from "./card.module.scss"

const products = [
  {
    id: 1,
    name: "product",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/Bvb0Q5dd/nophotoshop13.jpg",
  },
  {
    id: 2,
    name: "product",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/Bvb0Q5dd/nophotoshop13.jpg",
  },
  {
    id: 3,
    name: "product",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/Bvb0Q5dd/nophotoshop13.jpg",
  },
  {
    id: 4,
    name: "product",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/Bvb0Q5dd/nophotoshop13.jpg",
  },
  {
    id: 5,
    name: "product",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/Bvb0Q5dd/nophotoshop13.jpg",
  },
];
export const ProductList: FC = () => {
  return (
    <div className={s.container}>
      {products.map((products) => {
        return <Card key={products.id} products={products} />
      })}
    </div >
  );
};
