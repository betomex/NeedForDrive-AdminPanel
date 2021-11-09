import React from "react";
import {Image} from "antd";

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
];

export const citiesColumns = [
  {
    title: 'Наименование',
    dataIndex: 'name',
    key: 'name',
  }
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
  }
];