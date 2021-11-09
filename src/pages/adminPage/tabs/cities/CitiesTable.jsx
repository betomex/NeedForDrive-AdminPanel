import React, {useEffect, useState} from "react";
import {Layout, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getCities} from "../../../../redux/citiesReducer";
import {citiesColumns} from "../../tablesColumns";

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
      <Table
        bordered
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