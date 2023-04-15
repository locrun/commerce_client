import { AdminPanel } from "./pages/AdminPanel";
import { AuthPage } from "./pages/AuthPage";
import { BasketPage } from "./pages/BasketPage";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";
import { path } from "./utils/constants";

export const privateRoutes = [
  {
    path: path.ADMIN_ROUTE,
    Component: <AdminPanel />,
  },
  {
    path: path.BASKET_ROUTE,
    Component: <BasketPage />,
  },
];

export const publicRoutes = [
  {
    path: path.CATALOG_ROUTE,
    Component: <HomePage />,
  },
  {
    path: path.PRODUCT_DETAIL_ROUTE + '/:id',
    Component: <DetailPage />,
  },
];
export const authRoutes = [
  {
    path: path.AUTH_ROUTE,
    Component: <AuthPage />,
  },
  {
    path: path.REGISTRATION_ROUTE,
    Component: <AuthPage />,
  },
]
