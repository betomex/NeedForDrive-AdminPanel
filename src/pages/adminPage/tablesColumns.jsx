import React from "react";
import {Button, Image, Modal, Space} from "antd";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import {deleteCar, getCars, setCarAction, setCarToEdit, setCurrentPage} from "../../redux/actions/carsActions";
import {setCityAction, setCityToEdit} from "../../redux/actions/citiesActions";
import {setPointAction, setPointToEdit} from "../../redux/actions/pointsActions";

export const carsColumns = [
  {
    title: 'Категория',
    dataIndex: 'categoryId',
    key: 'categoryId',
    render: categoryId => `${categoryId?.name}`
  },
  {
    title: 'Цвета',
    dataIndex: 'colors',
    key: 'colors',
    render: colors => colors.map((color, index) => {
      return `${color.toUpperCase()} ${index !== colors.length - 1 ? ", " : ""}`
    })
  },
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Номер авто',
    key: 'number',
    dataIndex: 'number',
  },
  {
    title: 'Цена',
    key: 'priceMin',
    dataIndex: 'priceMin',
  },
  {
    title: 'Фото',
    key: 'thumbnail',
    dataIndex: 'thumbnail',
    render: thumbnail => (
      <Image
        src={thumbnail?.path}
        alt="carImage"
        preview={false}
        width={100}
      />
    )
  },
  {
    title: 'Действия',
    key: 'actions',
    render: (car) => {
      const dispatch = useDispatch()
      const currentPage = useSelector(state => state.cars.currentPage)

      const showConfirm = () => {
        Modal.confirm({
          title: 'Точно удалить машину?',
          icon: <ExclamationCircleOutlined/>,
          onOk() {
            console.log(currentPage)
            dispatch(deleteCar(car.id))
            dispatch(setCurrentPage(1))
            dispatch(getCars(1))
          }
        });
      }

      return <Space>
        <Link to="car-edit" onClick={() => {
          dispatch(setCarAction("update"))
          dispatch(setCarToEdit(car))
        }}>Изменить</Link>
        <Button type="link" onClick={() => {
          dispatch(showConfirm)
        }}>Удалить</Button>
      </Space>
    }
  },
];

export const citiesColumns = [
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Действия',
    key: 'actions',
    render: (city) => {
      const dispatch = useDispatch()

      return <Link to="city-edit" onClick={() => {
        dispatch(setCityAction("update"))
        dispatch(setCityToEdit(city))
      }}>Изменить</Link>
    }
  },
];

export const pointsColumns = [
  {
    title: 'Город',
    dataIndex: 'cityId',
    key: 'cityId',
    render: cityId => cityId?.name
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Описание',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Действия',
    key: 'actions',
    render: (point) => {
      const dispatch = useDispatch()

      return <Link to="point-edit" onClick={() => {
        dispatch(setPointAction("update"))
        dispatch(setPointToEdit(point))
      }}>Изменить</Link>
    }
  },
];