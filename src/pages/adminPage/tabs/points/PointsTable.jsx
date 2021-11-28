import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Collapse, Layout, Table} from "antd";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {pointsColumns} from "../../tablesColumns";
import './PointsTable.css'
import {getPoints} from "../../../../redux/actions/pointsActions";
import {SorterForm} from "../../components/SorterForm";

export const PointsTable = () => {
  const [loading, setLoading] = useState(true)
  const [collapsedItems, setCollapsedItems] = useState([])
  const [sorters, setSorters] = useState(null)

  const pointsData = useSelector(state => state.points)
  const {points, totalCount} = pointsData

  const dispatch = useDispatch()
  const sizeOfPage = useBreakpoint()

  const onSorterFormFinish = (values) => {
    setSorters(values)
  }

  useEffect(async () => {
    setLoading(true)
    await dispatch(getPoints(sorters))
    setLoading(false)
  }, [sorters])

  return <>
    <h1 className="pageTitle">Пункты</h1>
    <Layout.Content className="ordersListContent">
      {sizeOfPage.xs
        ? <Collapse
          ghost
          onChange={setCollapsedItems}
        >
          <Collapse.Panel key={1} header="Сортировки">
            <SorterForm
              fields={["cityId", "address", "name"]}
              onSorterFormFinish={onSorterFormFinish}
            />
          </Collapse.Panel>
        </Collapse>
        : <SorterForm
          fields={["cityId", "address", "name"]}
          onSorterFormFinish={onSorterFormFinish}
        />
      }
      <div
        className="pointsTable"
        style={collapsedItems.length ? {height: "55%"} : {height: "90%"}}
      >
        <Table
          bordered
          columns={pointsColumns}
          dataSource={points}
          loading={loading}
          rowKey={point => point.id}
          pagination={{
            total: totalCount,
            showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} пунктов`,
          }}
        />
      </div>
    </Layout.Content>
  </>
}