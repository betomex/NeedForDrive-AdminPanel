import React, {useEffect, useState} from "react";
import './CarsTable.css'
import {useDispatch, useSelector} from "react-redux";
import {Button, Collapse, Layout, Table} from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {Link} from "react-router-dom";
import {carsColumns} from "../../tablesColumns";
import {getCars, setCarAction, setCarToEdit, setCurrentPage} from "../../../../redux/actions/carsActions";
import {SorterForm} from "../../components/SorterForm";

export const CarsTable = () => {
  const [loading, setLoading] = useState(true)
  const [collapsedItems, setCollapsedItems] = useState([])
  const [sorters, setSorters] = useState(null)

  const carsData = useSelector(state => state.cars)
  const {cars, totalCount, currentPage} = carsData

  const dispatch = useDispatch()
  const sizeOfPage = useBreakpoint()

  const onSorterFormFinish = (values) => {
    setSorters(values)
  }

  useEffect(async () => {
    setLoading(true)
    await dispatch(getCars(currentPage - 1, 10, sorters))
    setLoading(false)
  }, [currentPage, sorters])

  return <>
    <h1 className="pageTitle">Автомобили</h1>
    <Layout.Content className="ordersListContent">
      {sizeOfPage.xs
        ? <Collapse
          ghost
          onChange={setCollapsedItems}
        >
          <Collapse.Panel key={1} header="Сортировки">
            <SorterForm
              fields={[
                {idName: "categoryId", name: "Категория"},
                {idName: "name", name: "Наименование"},
                {idName: "priceMin", name: "Цена"}
              ]}
              onSorterFormFinish={onSorterFormFinish}
            />
          </Collapse.Panel>
        </Collapse>
        : <SorterForm
          fields={[
            {idName: "categoryId", name: "Категория"},
            {idName: "name", name: "Наименование"},
            {idName: "priceMin", name: "Цена"}
          ]}
          onSorterFormFinish={onSorterFormFinish}
        />
      }
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
      <div
        className="carsTable"
        style={collapsedItems.length ? {height: "55%"} : {height: "85%"}}
      >
        <Table
          bordered
          columns={carsColumns}
          dataSource={cars}
          loading={loading}
          rowKey={car => car.id}
          pagination={{
            total: totalCount,
            pageSize: 10,
            current: currentPage,
            showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} авто`,
            onChange: page => {
              dispatch(setCurrentPage(page))
            }
          }}
        />
      </div>
    </Layout.Content>
  </>
}
