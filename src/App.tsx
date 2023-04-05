import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { useAppSelector } from "./hooks/redux-hooks";
import { Header } from "./components";
import { Catalog } from "./pages/Catalog";
import { privateRoutes, publicRoutes, authRoutes } from "./routes";
import { path } from "./utils/constants";
import s from './styles/index.module.scss'
import { ToastContainer } from "react-toastify";
import { useLazyCheckUserQuery } from "./redux/authApi";
import { selectAuth } from "./redux/slices/authSlice";

export const App: FC = () => {

  const isAuth = useAppSelector(selectAuth)

  const [fetchCheckUser, { data }] = useLazyCheckUserQuery()

  useEffect(() => {
    fetchCheckUser(true)
  }, [fetchCheckUser])

  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path={path.CATALOG_ROUTE} element={<Layout />}>
          <Route index element={<Catalog />} />
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
          <Route path={path.NOT_FOUND} element={<Catalog />} />
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

export const Layout: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <Header />
        <main className={s.body}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};


