import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAppDispatch, useAppSelector } from "./hooks/redux-hooks";
import { Header } from "./components";
import { HomePage } from "./pages/HomePage";
import { privateRoutes, publicRoutes, authRoutes } from "./routes";
import { useLazyCheckUserQuery } from "./redux/api/authApi";
import { selectAuth } from "./redux/slices/authSlice";

import { path } from "./utils/constants";
import { useLazyGetOneQuery } from "./redux/api";
import { setQuantityItemsCart } from "./redux/slices/cartSlice";

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const isAuth = useAppSelector(selectAuth)

  const [fetchCheckUser] = useLazyCheckUserQuery()
  const [fetchBasket, { data }] = useLazyGetOneQuery()

  useEffect(() => {
    async function fetchData() {
      try {
        const payload = await fetchCheckUser(false).unwrap();
        console.log('fulfilled', payload)
      } catch (error) {
        console.error('rejected', error);
      }
    }
    fetchData();
  }, [fetchCheckUser])

  useEffect(() => {
    fetchBasket(true)
  }, [fetchBasket])

  useEffect(() => {
    dispatch(setQuantityItemsCart(data?.products?.length))
  }, [data, dispatch])


  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={path.CATALOG_ROUTE} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route>
            {isAuth &&
              privateRoutes.map(({ path, Component }) => {
                return <Route key={path} path={path} element={Component} />;
              })}
          </Route>
          <Route>
            {publicRoutes.map(({ path, Component }) => {
              return <Route key={path} path={path} element={Component} />;
            })}
          </Route>
          <Route path={path.NOT_FOUND} element={<HomePage />} />
        </Route>
        {
          !isAuth &&
          <Route>
            {authRoutes.map(({ path, Component }) => {
              return <Route key={path} path={path} element={Component} />;
            })}
          </Route>
        }
      </Routes>
    </BrowserRouter>
  );
};

const Layout: FC = () => {
  return (
    <div className="container">
      <Header />
      <div className="header-plate"></div>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};


