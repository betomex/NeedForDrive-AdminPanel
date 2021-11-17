/* eslint-disable react/prop-types */
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AutoComplete, Button, Form, Input} from "antd";
import {Link} from "react-router-dom";
import {getCities} from "../../../redux/citiesReducer";

export const PointEditForm = (props) => {
  const {pointToEdit} = props

  const pointAction = useSelector(state => state.points.pointAction)
  const cities = useSelector(state => state.cities.cities)
  const options = cities.map(city => ({value: city.name}))
  const dispatch = useDispatch()

  const onFormSubmitHandle = (values) => {
    let cityId = null
    for (let i = 0; i < cities.length; i += 1) {
      if (cities[i].name === values.cityId) {
        cityId = cities[i].id
        break
      }
    }
    console.log({...values, cityId})
    console.log(pointAction)
    /* POST | PUT REQUEST */
  }

  useEffect(() => {
    dispatch(getCities())
  }, [])

  return <Form
    name="editPoint"
    labelCol={{span: 4}}
    initialValues={{
      name: pointToEdit?.name || null,
      address: pointToEdit?.address || null,
      cityId: pointToEdit?.cityId?.name || null,
    }}
    onFinish={onFormSubmitHandle}
  >
    <Form.Item
      label="Наименование"
      name="name"
      rules={[{required: true, message: 'Введите наименование пункта'}]}
    >
      <Input placeholder="Пункт..."/>
    </Form.Item>

    <Form.Item
      label="Адрес"
      name="address"
      rules={[{required: true, message: 'Введите адрес пункта'}]}
    >
      <Input placeholder="ул. Стахановская, 29/1"/>
    </Form.Item>

    <Form.Item
      label="Город"
      name="cityId"
      rules={[{required: true, message: 'Выберите город'}]}
    >
      <AutoComplete
        style={{width: 200}}
        options={options}
        allowClear
        placeholder="Выберите город..."
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </Form.Item>

    <div className="formButtons pointFormButtons">
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>

      <Link to="/admin"><Button danger className="cancelButton">Отменить</Button></Link>
    </div>
  </Form>
}