import { FC } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout, selectAuth } from "../../redux/slices/authSlice";
import { path } from "../../utils/constants";
import { AdminPanel } from "./AdminPanel/AdminPanel";
import s from "./Header.module.scss";

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const { pathname } = useLocation()
  const isAuth = useAppSelector(selectAuth)

  const isDetail = path.PRODUCT_DETAIL_ROUTE === pathname.slice(0, 7)
  const isAdmin = path.ADMIN_ROUTE === pathname

  const handleLogout = () => {
    dispatch(logout())
    toast.success("User Logout Successfully")
  }


  return (
    <header className={s.header}>
      <div className={s.flex}>
        {
          isAdmin && isAuth ? <AdminPanel /> :
            <>
              <Link to="/" className={s.logo}>
                <span>техно</span>Store
              </Link>
              <div className={s.buttons}>
                {
                  isAuth ?
                    <div className={s.flex}>
                      <div className={s.flex} style={{ marginRight: "50px" }}>
                        <button style={{ marginRight: "20px" }} className={s.button} onClick={() => navigate("/admin")}>
                          Админ панель
                        </button>
                        {isDetail &&
                          <button style={{ backgroundColor: "#cc4e5c" }}
                            className={s.button} onClick={() => navigate("/")}>
                            На главную
                          </button>
                        }
                      </div>
                      <button className={s.button} onClick={handleLogout}>
                        Выйти
                      </button>
                    </div>
                    :
                    <button className={s.button} onClick={() => navigate("/auth")}>
                      Aвторизуйтесь
                    </button>
                }
              </div>
            </>
        }
      </div >
    </header >
  );
};
