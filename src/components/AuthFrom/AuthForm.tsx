import { FC, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { useAppDispatch } from '../../hooks/redux-hooks';
import { setUser } from '../../redux/slices/authSlice';
import { useLoginUserMutation, useRegisterUserMutation } from '../../redux/authApi'

import { path } from "../../utils/constants"
import s from "./authform.module.scss"
import 'react-toastify/dist/ReactToastify.css';


interface User {
  email: string,
  password: string
}

export const AuthForm: FC = () => {
  const dispath = useAppDispatch()
  const { pathname } = useLocation()
  const isLogin = pathname === path.AUTH_ROUTE;
  const navigate = useNavigate()


  const [loginUser, {
    data: loginData,
    isSuccess: isLoginSuccess,
    isError: isLoginError,
    error: loginError }] = useLoginUserMutation()

  const [registerUser, {
    data: registerData,
    isSuccess: isRegisterSuccess,
    isError: isRegisterError,
    error: registerError }
  ] = useRegisterUserMutation()

  const { register, handleSubmit } = useForm<User>()


  const submitForm: SubmitHandler<User> = async (data) => {
    if (data.email && data.password) {
      if (isLogin) {
        await loginUser(data)
      } else {
        await registerUser(data)
      }
    }
  }

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("User Login Successfully")
      dispath(setUser({
        token: loginData.token
      }))
      setTimeout(() => {
        navigate("/")
      }, 1000)
    }
  }, [dispath, isLoginSuccess, loginData, navigate])


  useEffect(() => {
    if (isRegisterSuccess) {
      toast.success("User Login Successfully")
      dispath(setUser({
        token: registerData.token
      }))
      setTimeout(() => {
        navigate("/")
      }, 1000)

    }
  }, [dispath, isRegisterSuccess, registerData, navigate])


  useEffect(() => {
    if (isLoginError) {
      toast.error((loginError as any).data.message)
    }
    if (isRegisterError) {
      toast.error((registerError as any).data.message)
    }
  }, [isLoginError, isRegisterError, loginError, registerError])



  return (
    <div className={s.container}>
      <div className={s.formWrapper}>
        <h3 className={s.title}>{isLogin ? "Авторизация" : "Регистрация"}</h3>
        <div className={s.line}></div>
        <form className={s.form} onSubmit={handleSubmit(submitForm)}>
          <div className={s.flex}>
            <input
              type='email'
              className={s.input}
              {...register("email")}
              placeholder="Введите email"
            />
          </div>
          <div className={s.flex}>
            <input
              type='password'
              className={s.input}
              {...register("password")}
              placeholder="Введите пароль"
            />
          </div>
          <div className={s.flexRow}>
            <div>
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
            <button type='submit' className={s.button}>
              {isLogin ? "Войти" : "Регистрация"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
