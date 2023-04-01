import { FC } from "react";
import { Card } from "./Card";
import s from "./card.module.scss"

const products = [
  {
    id: 1,
    name: "Iphone 12 pro",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/vHRnqyzb/istockphoto-1298655045-1024x1024.jpg",
  },
  {
    id: 2,
    name: "Iphone 12 pro",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/vHRnqyzb/istockphoto-1298655045-1024x1024.jpg",
  },
  {
    id: 3,
    name: "Iphone 12 pro",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/vHRnqyzb/istockphoto-1298655045-1024x1024.jpg",
  },
  {
    id: 4,
    name: "Iphone 12 pro",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/vHRnqyzb/istockphoto-1298655045-1024x1024.jpg",
  },
  {
    id: 5,
    name: "Iphone 12 pro",
    price: 25000,
    rating: 5,
    image: "https://i.postimg.cc/vHRnqyzb/istockphoto-1298655045-1024x1024.jpg",
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
