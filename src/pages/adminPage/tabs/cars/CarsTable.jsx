import React, {useEffect, useState} from "react";
import './CarsTable.css'
import {useDispatch, useSelector} from "react-redux";
import {Layout, Table} from "antd";
import {getCars} from "../../../../redux/carsReducer";
import {carsColumns} from "../../tablesColumns";

export const CarsTable = () => {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  const carsData = useSelector(state => state.cars)
  const {cars, totalCount} = carsData

  const dispatch = useDispatch()

  useEffect(async () => {
    setLoading(true)
    await dispatch(getCars(currentPage))
    setLoading(false)
  }, [currentPage])

  return <>
    <h1 className="pageTitle">Автомобили</h1>
    <Layout.Content className="ordersListContent">
      <Table
        bordered
        columns={carsColumns}
        dataSource={cars}
        loading={loading}
        rowKey={car => car.id}
        pagination={{
          total: totalCount - 10, // Из-за какой-то ошибки в базе (безолаберности интернов) там аж 10 пустых записей
          pageSize: 10,
          current: currentPage,
          showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} авто`,
          onChange: page => {
            setCurrentPage(page)
          }
        }}
      />
    </Layout.Content>
  </>
}
