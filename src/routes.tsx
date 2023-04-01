import { Admin } from "./pages/Admin";
import { Auth } from "./pages/Auth";
import { Basket } from "./pages/Basket";
import { Catalog } from "./pages/Catalog";
import { DetailPage } from "./pages/DetailPage";
import { path } from "./utils/constants";

export const privateRoutes = [
  {
    path: path.ADMIN_ROUTE,
    Component: <Admin />,
  },
  {
    path: path.BASKET_ROUTE,
    Component: <Basket />,
  },
];

export const publicRoutes = [
  {
    path: path.CATALOG_ROUTE,
    Component: <Catalog />,
  },
  {
    path: path.PRODUCT_DETAIL_ROUTE + '/:id',
    Component: <DetailPage />,
  },
];
export const authRoutes = [
  {
    path: path.AUTH_ROUTE,
    Component: <Auth />,
  },
  {
    path: path.REGISTRATION_ROUTE,
    Component: <Auth />,
  },
]
