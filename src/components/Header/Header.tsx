import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { HeaderAdmin } from "./HeaderAdmin";
import { logout, selectAuth } from "../../redux/slices/authSlice";
import { path } from "../../utils/constants";

import s from "./Header.module.scss"

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const { quantity } = useAppSelector(state => state.basket)
  const { pathname } = useLocation()
  const isAuth = useAppSelector(selectAuth)

  const isDetailPage = path.PRODUCT_DETAIL_ROUTE === pathname.slice(0, 7)
  const isBasketPage = path.BASKET_ROUTE === pathname.slice(0, 7)
  const isAdminPage = path.ADMIN_ROUTE === pathname

  const handleLogout = () => {
    dispatch(logout())
    toast.success("User Logout Successfully")
  }

  return (
    <header className={s.header}>
      {isAdminPage && isAuth ? <HeaderAdmin /> :
        <>
          <Link to="/" className={s.logo}>
            <span>техно</span>Store
          </Link>
          {
            isAuth ?
              <div className={s.flex}>
                {isDetailPage &&
                  <div className={s.icon} onClick={() => navigate("/")} >
                    <HomeOutlinedIcon color="primary" fontSize="large" />
                    <span>На главную</span>
                  </div>
                }
                {
                  isBasketPage &&
                  <div className={s.icon} onClick={() => navigate("/")} >
                    <HomeOutlinedIcon color="primary" fontSize="large" />
                    <span>На главную</span>
                  </div>
                }
                <div className={s.icon} onClick={() => navigate("/admin")}>
                  <AdminPanelSettingsOutlinedIcon color="primary" fontSize="large" />
                  <span>Админ панель</span>
                </div>

                <div className={s.icon} onClick={() => navigate("/basket")}>
                  <ShoppingCartOutlinedIcon color="primary" fontSize="large" />
                  <span>Корзина</span>
                  {quantity > 0 && <span className={s.quantity}>{quantity}</span>}
                </div>

                <div className={s.icon} onClick={handleLogout}>
                  <LogoutIcon color="primary" fontSize="large" />
                  <span>Выйти</span>
                </div>
              </div>
              :
              <div className={s.flex}>
                <div className={s.icon} onClick={() => navigate("/auth")}>
                  <LoginOutlinedIcon color="primary" fontSize="large" />
                  <span>Войти</span>
                </div>
                <div className={s.icon} onClick={() => navigate("/registration")}>
                  <HowToRegIcon color="primary" fontSize="large" />
                  <span>Регистрация</span>
                </div>
              </div>
          }
        </>
      }
    </header >
  );
};
