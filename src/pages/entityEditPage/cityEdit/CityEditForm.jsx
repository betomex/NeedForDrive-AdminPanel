/* eslint-disable react/prop-types */
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input, message} from "antd";
import {Link} from "react-router-dom";
import {postCity, putCity} from "../../../redux/actions/citiesActions";

export const CityEditForm = (props) => {
  const {cityToEdit} = props

  const citiesData = useSelector(state => state.cities)
  const {cityAction, citySuccess} = citiesData

  const dispatch = useDispatch()

  const onFormSubmitHandle = (values) => {
    switch (cityAction) {
      case "create": {
        dispatch(postCity(values))
        break
      }
      case "update": {
        dispatch(putCity(cityToEdit.id, values))
        break
      }
      default:
        break
    }
  }

  if (citySuccess && cityAction === "update") {
    message.success("Успех! Город сохранён")
  } else if (citySuccess && cityAction === "create") {
    message.success("Успех! Город добавлен")
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

      <Link to="/admin">
        {citySuccess
          ? <Button className="cancelButton">Вернуться</Button>
          : <Button danger className="cancelButton">Отменить</Button>
        }
      </Link>
    </div>
  </Form>
}