/* eslint-disable react/prop-types */
import React, {useEffect} from "react";
import {Button, Form, Select} from "antd";
import './OrdersFilterForm.css'
import {useDispatch, useSelector} from "react-redux";
import {getCities, getOrderStatus} from "../../../../redux/actions/ordersActions";

export const OrdersFilterForm = (props) => {
  const {onFilterFormFinish} = props
  const ordersData = useSelector(state => state.orders)
  const {orderStatus, cities} = ordersData

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getOrderStatus())
    dispatch(getCities())
  }, [])

  return <Form
    name="ordersFilterForm"
    className="filterForm"
    onFinish={onFilterFormFinish}
  >
    <Form.Item
      className="filterFormItem"
      name="cityId"
    >
      <Select
        placeholder="Выберите город"
        allowClear
      >
        {cities.map(city =>
          <Select.Option
            key={city.id}
            value={city.id}
          >{city.name}</Select.Option>
        )}
      </Select>
    </Form.Item>

    <Form.Item
      className="filterFormItem"
      name="orderStatus"
    >
      <Select
        placeholder="Выберите статус заказа"
        allowClear
      >
        {orderStatus.map(status =>
          <Select.Option
            key={status.id}
            value={status.id}
          >{status.name}</Select.Option>
        )}
      </Select>
    </Form.Item>

    <Form.Item
      className="filterFormItem"
      name="dateFrom"
    >
      <Select
        placeholder="Выберите промежуток"
        allowClear
      >
        <Select.Option value="month">За последний месяц</Select.Option>
        <Select.Option value="week">За последнюю неделю</Select.Option>
        <Select.Option value="day">За последний день</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Применить
      </Button>
    </Form.Item>
  </Form>
}