import React, {useEffect, useState} from "react";
import {Button, Layout, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {getCities, setCityAction, setCityToEdit} from "../../../../redux/citiesReducer";
import {citiesColumns} from "../../tablesColumns";
import './CitiesTable.css'

export const CitiesTable = () => {
  const [loading, setLoading] = useState(true)

  const citiesData = useSelector(state => state.cities)
  const {cities, totalCount} = citiesData

  const dispatch = useDispatch()

  useEffect(async () => {
    setLoading(true)
    await dispatch(getCities())
    setLoading(false)
  }, [])

  return <>
    <h1 className="pageTitle">Города</h1>
    <Layout.Content className="ordersListContent">
      <Link to="city-edit">
        <Button
          type="primary"
          className="addEntityButton"
          onClick={() => {
            dispatch(setCityAction("create"))
            dispatch(setCityToEdit(null))
          }}
        >Добавить город</Button>
      </Link>
      <Table
        className="cityTable"
        bordered
        sticky
        columns={citiesColumns}
        dataSource={cities}
        loading={loading}
        rowKey={city => city.id}
        pagination={{
          total: totalCount,
          showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} городов`,
        }}
      />
    </Layout.Content>
  </>
}