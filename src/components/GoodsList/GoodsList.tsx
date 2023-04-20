import { FC, useEffect } from "react";
import { Pagination } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Card } from "./Card";
import { useLazyGetAllGoodsQuery } from "../../redux/api";
import { IGoods } from '../../redux/api'
import s from "./Card.module.scss"
import { setCurrentPage, setLimit } from "../../redux/slices/pageSlice";


export const GoodsList: FC = () => {
  const dispatch = useAppDispatch()
  const { limit, currentPage } = useAppSelector((state) => state.page)
  const { typeId } = useAppSelector(state => state.type)

  const [fetchFilterGoods, { goods, count }] = useLazyGetAllGoodsQuery(
    {
      selectFromResult: ({ data }) => ({
        goods: data?.goods,
        count: data?.count
      })
    })

  const pageCount: any[] = [];

  console.log(limit)

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
    <div>
      <div className={s.container}>
        {goods?.map((goods: IGoods) => {
          return <Card key={goods.id} goods={goods} />
        })}

      </div >
      <>
        {!!pageCount.length &&
          <Pagination
            count={pageCount.length}
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
