import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { path } from "../../utils/constants"
import s from "./authform.module.scss"

export const AuthForm: FC = () => {

  const { pathname } = useLocation()

  const isLogin = pathname === path.AUTH_ROUTE;


  return (
    <div className={s.container}>
      <div className={s.formWrapper}>
        <h3 className={s.title}>{isLogin ? "Авторизация" : "Регистрация"}</h3>
        <div className={s.line}></div>
        <form className={s.form}>
          <input type="email" className={s.input} placeholder="Введите email" />
          <input type="password" className={s.input} placeholder="Введите пароль" />
          <button type="button" className={s.button}>
            {isLogin ? "Войти" : "Регистрация"}
          </button>
          <div className={s.padding}>
            {!isLogin ? "Уже есть аккаунт?" : "Нет аккаунта?"}
            {
              isLogin ?
                <div className={s.link} >
                  <Link to={path.REGISTRATION_ROUTE}>Регистрация</Link>
                </div>
                :
                <div className={s.link} >
                  <Link to={path.AUTH_ROUTE}>Войти</Link>
                </div>
            }
          </div>
        </form>
      </div>
    </div>
  )
}
