import { FC } from "react";
import s from "./form.module.scss";

export const Form: FC = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Загрузить девайс</h2>
      <form className={s.form}>
        <input
          type="text"
          className={s.input}
          placeholder="Имя и Фамилия"
        />
        <input type="text" className={s.input} placeholder="Телефон" />
        <input type="email" className={s.input} placeholder="Email" />
        <input type="text" className={s.input} placeholder="Адрес" />
        <button type="button" className={s.button}>
          Загрузить
        </button>
      </form>
    </div>
  );
};
