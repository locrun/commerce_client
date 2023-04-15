import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAppSelector } from "./hooks/redux-hooks";
import { Header } from "./components";
import { HomePage } from "./pages/HomePage";
import { privateRoutes, publicRoutes, authRoutes } from "./routes";
import { useLazyCheckUserQuery } from "./redux/api/authApi";
import { selectAuth } from "./redux/slices/authSlice";

import { path } from "./utils/constants";
import s from './styles/index.module.scss'


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


