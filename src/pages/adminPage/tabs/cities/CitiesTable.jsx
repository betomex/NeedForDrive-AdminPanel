import React, {useEffect, useState} from "react";
import {Collapse, Layout, Table} from "antd";
import {useDispatch, useSelector} from "react-redux";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {citiesColumns} from "../../tablesColumns";
import './CitiesTable.css'
import {getCities} from "../../../../redux/actions/citiesActions";
import {SorterForm} from "../../components/SorterForm";

export const CitiesTable = () => {
  const [loading, setLoading] = useState(true)
  const [collapsedItems, setCollapsedItems] = useState([])
  const [sorters, setSorters] = useState(null)

  const citiesData = useSelector(state => state.cities)
  const {cities, totalCount} = citiesData

  const dispatch = useDispatch()
  const sizeOfPage = useBreakpoint()

  const onSorterFormFinish = (values) => {
    setSorters(values)
  }

  useEffect(async () => {
    setLoading(true)
    await dispatch(getCities(sorters))
    setLoading(false)
  }, [sorters])

  return <>
    <h1 className="pageTitle">Города</h1>
    <Layout.Content className="ordersListContent">
      {sizeOfPage.xs
        ? <Collapse
          ghost
          onChange={setCollapsedItems}
        >
          <Collapse.Panel key={1} header="Сортировки">
            <SorterForm
              fields={["name"]}
              onSorterFormFinish={onSorterFormFinish}
            />
          </Collapse.Panel>
        </Collapse>
        : <SorterForm
          fields={["name"]}
          onSorterFormFinish={onSorterFormFinish}
        />
      }
      <div
        className="citiesTable"
        style={collapsedItems.length ? {height: "60%"} : {height: "90%"}}
      >
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
      </div>
    </Layout.Content>
  </>
}