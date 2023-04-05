import { FC } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { logout, selectAuth } from "../../redux/slices/authSlice";
import { path } from "../../utils/constants";
import { AdminPanelHeader } from "./AdminPanelHeader/AdminPanelHeader";
import s from "./header.module.scss";

export const Header: FC = () => {
  const navigate = useNavigate();
  const dispath = useAppDispatch()

  const { pathname } = useLocation()
  const isAuth = useAppSelector(selectAuth)

  const isAdmin = path.ADMIN_ROUTE === pathname

  const handleLogout = () => {
    dispath(logout())
    toast.success("User Logout Successfully")
  }


  return (
    <header className={s.header}>
      <div className={s.flex}>
        {
          isAdmin && isAuth ? <AdminPanelHeader /> :
            <>
              <Link to="/" className={s.logo}>
                <span>техно</span>Store
              </Link>
              <div className={s.buttons}>
                {
                  isAuth ?
                    <>
                      <button className={s.button} onClick={() => navigate("/admin")}>
                        Админ панель
                      </button>
                      <button className={s.button} onClick={handleLogout}>
                        Выйти
                      </button>
                    </>
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
