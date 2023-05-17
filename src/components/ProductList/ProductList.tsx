import { FC, useEffect } from "react";
import { Pagination } from '@mui/material';
import { Card } from "./Card";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { useLazyGetAllProductsQuery, IProduct } from "../../redux/api";
import { setCurrentPage, setLimit } from "../../redux/slices/pageSlice";
import s from "./Card.module.scss"


export const ProductList: FC = () => {
  const dispatch = useAppDispatch()
  const { limit, currentPage } = useAppSelector((state) => state.page)
  const { typeId } = useAppSelector(state => state.type)



  const [fetchFilterGoods, { product, count }] = useLazyGetAllProductsQuery(
    {
      selectFromResult: ({ data }: any) => ({
        product: data?.product,
        count: data?.count
      })
    })

  const pageCount: number[] = [];

  for (let i = 1; i < Math.ceil(count / limit); i++) {
    pageCount.push(i + 1);
  }

  useEffect(() => {
    fetchFilterGoods(`?typeId=${typeId}&page=${currentPage || "1"}&limit=${limit}`)
  }, [typeId, limit, currentPage, fetchFilterGoods])


  useEffect(() => {
    dispatch(setLimit(3))
  }, [dispatch])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value))
  };

  return (
    <section>
      <div className={s.container}>
        {product?.map((goods: IProduct) => {
          return <Card key={goods.id} products={goods} />
        })}
      </div >
      <>
        {!!pageCount.length &&
          <Pagination
            count={pageCount[0]}
            page={currentPage}
            onChange={(event: React.ChangeEvent<unknown>, value: number) =>
              handleChange(event, value)}
            color="primary"
          />
        }
      </>
    </section>
  );
};
