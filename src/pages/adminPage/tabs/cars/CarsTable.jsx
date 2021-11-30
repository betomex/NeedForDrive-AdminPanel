import React, {useEffect, useState} from "react";
import './CarsTable.css'
import {useDispatch, useSelector} from "react-redux";
import {Collapse, Layout, Table} from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {carsColumns} from "../../tablesColumns";
import {getCars} from "../../../../redux/actions/carsActions";
import {SorterForm} from "../../components/SorterForm";

export const CarsTable = () => {
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [collapsedItems, setCollapsedItems] = useState([])
  const [sorters, setSorters] = useState(null)

  const carsData = useSelector(state => state.cars)
  const {cars, totalCount} = carsData

  const dispatch = useDispatch()
  const sizeOfPage = useBreakpoint()

  const onSorterFormFinish = (values) => {
    setSorters(values)
  }

  useEffect(async () => {
    setLoading(true)
    await dispatch(getCars(currentPage - 1,10, sorters))
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
      <div
        className="carsTable"
        style={collapsedItems.length ? {height: "55%"} : {height: "90%"}}
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
              setCurrentPage(page)
            }
          }}
        />
      </div>
    </Layout.Content>
  </>
}
