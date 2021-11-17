/* eslint-disable react/prop-types */
import React from "react";
import {useSelector} from "react-redux";
import {Button, Form, Input} from "antd";
import {Link} from "react-router-dom";

export const CityEditForm = (props) => {
  const {cityToEdit} = props

  const cityAction = useSelector(state => state.cities.cityAction)

  const onFormSubmitHandle = (values) => {
    console.log(values)
    console.log(cityAction)
    /* POST | PUT REQUEST */
  }

  return <Form
    name="editCity"
    labelCol={{span: 5}}
    initialValues={{
      name: cityToEdit?.name || null
    }}
    onFinish={onFormSubmitHandle}
  >
    <Form.Item
      label="Наименование"
      name="name"
      rules={[{required: true, message: 'Введите название города'}]}
    >
      <Input placeholder="Москва..."/>
    </Form.Item>

    <div className="formButtons cityFormButtons">
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>

      <Link to="/admin"><Button danger className="cancelButton">Отменить</Button></Link>
    </div>
  </Form>
}