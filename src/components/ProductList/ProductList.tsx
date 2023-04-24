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
  const { categoryId } = useAppSelector(state => state.categories)

  const [fetchFilterGoods, { products, count }] = useLazyGetAllProductsQuery(
    {
      selectFromResult: ({ data }) => ({
        products: data?.products,
        count: data?.count
      })
    })

  const pageCount: number[] = [];

  for (let i = 1; i < Math.ceil(count / limit); i++) {
    pageCount.push(i + 1);
  }

  // useEffect(() => {
  //   fetchFilterGoods(`?categoryId=${categoryId}&page=${currentPage || "1"}&limit=${limit}`)
  // }, [categoryId, limit, currentPage, fetchFilterGoods])


  useEffect(() => {
    dispatch(setLimit(3))
  }, [dispatch])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPage(value))
  };

  return (
    <div>
      <div className={s.container}>
        {products?.map((goods: IProduct) => {
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
    </div>
  );
};
