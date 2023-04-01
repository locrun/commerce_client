import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import s from "./header.module.scss";

export const Header: FC = () => {

  const navigate = useNavigate();

  return (
    <header className={s.header}>
      <div className={s.flex}>
        <Link to="/" className={s.logo}>
          <span>Техно</span>Store
        </Link>
        <div className={s.buttons}>
          <button className={s.button} onClick={() => navigate("/auth")}>
            Aвторизуйтесь
          </button>
        </div>
      </div>
    </header >
  );
};
