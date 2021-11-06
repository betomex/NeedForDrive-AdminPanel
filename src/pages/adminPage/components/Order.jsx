/* eslint-disable react/prop-types */
import React from "react";
import './Order.css'
import {CheckSquareOutlined, CloseSquareOutlined} from "@ant-design/icons";

const carOption = (condition, text) => {
  return condition
    ? <div className="orderCarOption">
      <CheckSquareOutlined className="isCarOption"/>
      <p>{text}</p>
    </div>
    : <div className="orderCarOption">
      <CloseSquareOutlined className="isNotCarOption"/>
      <p className="isNotCarOptionText">{text}</p>
    </div>
}

export const Order = (props) => {
  const {order} = props
  const dateFrom = new Date(order?.dateFrom)
  const dateTo = new Date(order?.dateTo)

  return <div className="orderContent">
    <div className="orderImageBlock">
      <img
        src={order?.carId?.thumbnail.path}
        alt="carImage"
        className="orderCarImage"
      />
    </div>

    <div className="orderInfoBlock">
      <p><span>{order?.carId?.name}</span> в <span>{order?.cityId?.name}</span>, {order?.pointId?.address}</p>
      <p>{dateFrom.toLocaleString()} — {dateTo.toLocaleString()}</p>
      <p>Цвет: <span>{order?.color}</span></p>
    </div>

    <div className="orderOptionsBlock">
      {carOption(order?.isFullTank, "Полный бак")}
      {carOption(order?.isNeedChildChair, "Детское кресло")}
      {carOption(order?.isRightWheel, "Правый руль")}
    </div>

    <div className="orderPriceBlock">
      <p className="orderPrice">{order?.price} ₽</p>
    </div>
  </div>
}

