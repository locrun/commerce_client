import { FC } from "react";
import { Card } from "./Card";
import { useGetAllGoodsQuery } from "../../redux/api";
import { IGoods } from '../../redux/api'
import s from "./Card.module.scss"


export const GoodsList: FC = () => {

  const { data: goods } = useGetAllGoodsQuery()
  console.log(goods)
  return (
    <div className={s.container}>
      {goods?.rows.map((goods: IGoods) => {
        return <Card key={goods.id} goods={goods} />
      })}
    </div >
  );
};
