import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {
  useCreateProductMutation,
  useCreateCategoryMutation,
  useGetAllCategoriesQuery
} from "../../redux/api";

import 'react-tabs/style/react-tabs.css';

import cn from "classnames"
import s from "./CreateProductForm.module.scss";


const tabs = [
  { id: 0, label: "Добавить товар" },
  { id: 1, label: "Добавить тип" },
]

type Info = {
  title: string,
  description: string,
  number: number
}[]


export const CreateProductForm: FC = () => {

  const navigate = useNavigate()
  const [tabIndex, setTabIndex] = useState(0);

  const [type, setType] = useState("Смартфоны")
  const [info, setInfo] = useState<Info>([{ title: "", description: "", number: Date.now() }])

  const { data: categories } = useGetAllCategoriesQuery()
  const [fetchCreateProduct] = useCreateProductMutation()
  const [fetchCreateType] = useCreateCategoryMutation()


  const { register, handleSubmit, reset } = useForm()


  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }])
  }

  const removeInfo = (number: number) => {
    setInfo(info.filter(i => i.number !== number))
  }

  const changeInfo = (key: string, value: string, number: number) => {
    setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
  }

  const submitFrom: SubmitHandler<FieldValues> = async (data) => {
    const file = data.file[0]
    try {
      const formData = new FormData()
      formData.append("name", data.name)
      formData.append("price", data.price)
      formData.append("image", file)
      formData.append("categoryId", data.type)
      formData.append("info", JSON.stringify(info))
      await fetchCreateProduct(formData)
      setInfo([]); reset();
      //navigate("/")
    } catch (error) {
      console.warn(error)
      alert("Ошибка при отправке данных!")
    }
  }

  const createCategory = async () => {
    await fetchCreateType({ name: type })
    setType('')
  }

  return (
    <div className={s.container}>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={s.tabList} >
          {tabs.map((tab) => {
            return (
              <Tab
                key={tab.id}
                className={cn(s.title, {
                  [s.selected]: tab.id === tabIndex
                })}>
                {tab.label}
              </Tab>
            )
          })}
        </TabList>
        <TabPanel>
          <form
            className={s.form}
            onSubmit={handleSubmit(submitFrom)}
          >
            <input
              className={s.input}
              {...register("name")}
              placeholder="Название"
            />
            <select
              {...register("type")} className={s.input}
            >
              <option value="">Выберите тип</option>
              {
                categories?.map(({ id, name }) => {
                  return <option key={id} value={id}>{name}</option>
                })
              }
            </select>
            <input
              type="number"
              className={s.input}
              {...register("price")}
              placeholder="Стоимость"
            />
            <input
              type="file"
              {...register("file")}
            />
            <div className={s.characteristic}>
              <h3>Добавить описание:</h3>
              {
                info.map((i) => {
                  return (
                    <div key={i.number} className={s.flex}>
                      <input
                        name="title"
                        className={s.input}
                        value={i.title}
                        onChange={(e) => changeInfo("title", e.target.value, i.number)}
                        placeholder="Введите название"
                      />
                      <input
                        name="description"
                        className={s.input}
                        value={i.description}
                        onChange={(e) => changeInfo("description", e.target.value, i.number)}
                        placeholder="Введите значение"
                      />
                      <div className={s.delete} >
                        <button
                          type='button'
                          onClick={() =>
                            removeInfo(i.number)} className={cn(s.deleteBtn, s.button)}>
                          Удалить поле
                        </button>
                      </div>
                    </div>
                  )
                })
              }
              <button type='button' onClick={addInfo} className={s.button}>
                Добавить поле
              </button>
            </div>
            <button type="submit" className={s.button}>
              Загрузить
            </button>
          </form>
        </TabPanel>
        <TabPanel className={s.flexCol}>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={s.input}
          />
          <button onClick={createCategory} className={s.button}>Загрузить</button>
        </TabPanel>
      </Tabs>
    </div >
  );
};
