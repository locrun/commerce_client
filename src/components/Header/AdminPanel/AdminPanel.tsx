import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/redux-hooks'
import { logout } from '../../../redux/slices/authSlice'
import { toast } from "react-toastify";
import s from "../Header.module.scss"

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
      <div className={s.buttons}>
        <button className={s.buttonRed} onClick={() => navigate("/")}>
          На главную
        </button>
        <button className={s.button} onClick={handleLogout}>
          Выйти
        </button>
      </div>
    </>
  )
}


