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

export const App: FC = () => {

  const isAuth = useAppSelector(selectAuth)

  const [fetchCheckUser] = useLazyCheckUserQuery()

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
    <div className="wrapper">
      <Header />
      <div className="header-plate"></div>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};


