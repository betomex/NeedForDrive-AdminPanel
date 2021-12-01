/* eslint-disable react/prop-types */
import React, {useEffect, useRef, useState} from "react";
import {AutoComplete, Button, Checkbox, Form, Input, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategories, postCar, putCar} from "../../../redux/actions/carsActions";

export const CarEditForm = (props) => {
  const {image, carToEdit} = props

  const [colors, setColors] = useState(carToEdit?.colors.map((color, index) => ({
    id: color + index,
    value: color
  })) || [])

  const carsData = useSelector(state => state.cars)
  const {categories, carAction, carSuccess} = carsData
  const options = categories.map(category => ({value: category.name}))
  const dispatch = useDispatch()
  const addColor = useRef()

  const onFormSubmitHandle = async (values) => {
    const categoryId = categories.find(category => category.name === values.categoryId).id

    const formData = {
      priceMin: Number(values.priceMin),
      priceMax: Number(values.priceMax),
      name: values.name,
      number: values.number,
      description: values.description,
      categoryId,
      colors: values.colorsList,
      thumbnail: image
    }

    switch (carAction) {
      case "create": {
        dispatch(postCar(formData))
        break
      }
      case "update": {
        dispatch(putCar(carToEdit.id, formData))
        break
      }
      default:
        break
    }
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [])

  if (carSuccess && carAction === "update") {
    message.success("Успех! Машина обновлёна")
  } else if (carSuccess && carAction === "create") {
    message.success("Успех! Машина добавлена")
  }

  return <Form
    name="editCar"
    labelCol={{span: 6}}
    initialValues={{
      priceMin: carToEdit?.priceMin || null,
      priceMax: carToEdit?.priceMax || null,
      name: carToEdit?.name || null,
      number: carToEdit?.number || null,
      description: carToEdit?.description || null,
      categoryId: carToEdit?.categoryId?.name || null,
    }}
    onFinish={onFormSubmitHandle}
  >
    <Form.Item
      label="Минимальная цена"
      name="priceMin"
      rules={[{required: true, message: 'Введите минимальную смоимость аренды авто'}]}
    >
      <Input placeholder="0"/>
    </Form.Item>

    <Form.Item
      label="Максимальная цена"
      name="priceMax"
      rules={[{required: true, message: 'Введите максимальную смоимость аренды авто'}]}
    >
      <Input placeholder="0"/>
    </Form.Item>

    <Form.Item
      label="Наименование"
      name="name"
      rules={[{required: true, message: 'Введите наименование авто'}]}
    >
      <Input placeholder="Ford Focus"/>
    </Form.Item>

    <Form.Item
      label="Номер"
      name="number"
      rules={[{required: true, message: 'Введите автомобильный номер'}]}
    >
      <Input placeholder="A000AA"/>
    </Form.Item>

    <Form.Item
      label="Описание"
      name="description"
    >
      <Input.TextArea
        showCount
        maxLength={200}
        autoSize
        placeholder="Премиум-класс"
      />
    </Form.Item>

    <Form.Item
      label="Категория"
      name="categoryId"
      rules={[{required: true, message: 'Выберите категорию'}]}
    >
      <AutoComplete
        style={{width: 200}}
        options={options}
        allowClear
        placeholder="Выберите категорию..."
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </Form.Item>

    <Form.Item
      className="carColorItem"
      label="Цвета"
    >
      <Form.List name="colors">
        {() => (
          <>
            <Form.Item>
              <Input
                placeholder="Добавьте цвет"
                allowClear
                ref={addColor}
                className="carColorInput"
              />
            </Form.Item>
            <Form.Item>
              <Button type="dashed" className="carColorAddButton" onClick={() => {
                if (addColor.current.state.value) {
                  setColors([
                    ...colors,
                    {
                      id: colors.length,
                      value: addColor.current.state.value
                    }
                  ])
                  addColor.current.state.value = ""
                }
              }} block>
                <PlusOutlined/>
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </Form.Item>

    <Form.Item
      name="colorsList"
      label="Выберите цвета"
    >
      <Checkbox.Group className="colorsList">
        {colors.map((color) => <Checkbox value={color.value} key={color.id}>
          {color.value}
        </Checkbox>)}
      </Checkbox.Group>
    </Form.Item>

    <div className="formButtons">
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Сохранить
        </Button>
      </Form.Item>

      <Link to="/admin">
        {carSuccess
          ? <Button className="cancelButton">Вернуться</Button>
          : <Button danger className="cancelButton">Отменить</Button>
        }
      </Link>
    </div>
  </Form>
}