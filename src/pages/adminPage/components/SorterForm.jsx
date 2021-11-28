/* eslint-disable react/prop-types */
import React from "react";
import {Button, Form, Select} from "antd";

export const SorterForm = (props) => {
  const {fields, onSorterFormFinish} = props

  return <Form
    className="filterForm"
    name="sorterForm"
    onFinish={onSorterFormFinish}
  >
    <Form.Item
      className="filterFormItem"
      name="field"
    >
      <Select
        placeholder="Выберите поле"
        allowClear
      >
        {fields.map(field =>
          <Select.Option
            key={field}
            value={field}
          >{field}</Select.Option>
        )}
      </Select>
    </Form.Item>

    <Form.Item
      className="filterFormItem"
      name="sortDirection"
    >
      <Select
        placeholder="Сортировка по..."
        allowClear
      >
        <Select.Option value={1}>Возрастанию</Select.Option>
        <Select.Option value={-1}>Убыванию</Select.Option>
      </Select>
    </Form.Item>

    <Form.Item>
      <Button type="primary" htmlType="submit">
        Применить
      </Button>
    </Form.Item>
  </Form>
}