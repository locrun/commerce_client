import { FC } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Header } from "./components";
import { Catalog } from "./pages/Catalog";
import { privateRoutes, publicRoutes, authRoutes } from "./routes";
import { path } from "./utils/constants";
import s from './styles/index.module.scss'

export const App: FC = () => {
  const isAuth = false
  return (
    <BrowserRouter>
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
        <Route>
          {authRoutes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={Component} />;
          })}
        </Route>
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

export default App;
