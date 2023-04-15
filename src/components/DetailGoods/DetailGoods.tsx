import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetOneGoodsQuery } from "../../redux/api";

export const DetailGoods: FC = () => {
  const { id } = useParams()
  const { data: detail } = useGetOneGoodsQuery(id || 0)
  console.log(detail)
  return (
    <>
      <img
        src={process.env.REACT_APP_API_URL + detail?.product.img}
        alt={detail?.product.name}
      />
    </>
  )
};
