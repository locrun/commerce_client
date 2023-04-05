import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

import s from "../header.module.scss"

export const AdminPanelHeader: FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <h2 className={s.title}>Админ панель</h2>
      <div className={s.buttons}>
        <button className={s.button} onClick={() => navigate("/")}>
          На главную
        </button>
      </div>
    </>
  )
}
