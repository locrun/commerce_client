import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/redux-hooks'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { logout } from '../../redux/slices/authSlice'
import { toast } from "react-toastify";
import s from "./AdminPanel.module.scss"

export const AdminPanel: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
    toast.success("User Logout Successfully")
  }

  return (
    <>
      <h2 className={s.title}>Админ панель</h2>
      <div className={s.flex}>
        <div className={s.icon} onClick={() => navigate("/")} >
          <HomeOutlinedIcon color="primary" fontSize="large" />
          <span>На главную</span>
        </div>
        <div className={s.icon} onClick={() => navigate("/basket")}>
          <ShoppingCartOutlinedIcon color="primary" fontSize="large" />
          <span>Корзина</span>
        </div>
        <div className={s.icon} onClick={handleLogout} >
          <LogoutIcon color="primary" fontSize="large" />
          <span>Выйти</span>
        </div>
      </div>
    </>
  )
}


