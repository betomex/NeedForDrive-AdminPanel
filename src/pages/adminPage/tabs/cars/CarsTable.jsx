import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Layout, Table} from "antd";
import {Link} from "react-router-dom";
import {getCars, setCarAction, setCarToEdit} from "../../../../redux/carsReducer";
import {carsColumns} from "../../tablesColumns";
import './CarsTable.css'

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
      <Link to="car-edit">
        <Button
          type="primary"
          className="addEntityButton"
          onClick={() => {
            dispatch(setCarAction("create"))
            dispatch(setCarToEdit(null))
          }}
        >Добавить авто</Button>
      </Link>
      <div className="entityTable">
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
      </div>
    </Layout.Content>
  </>
}
