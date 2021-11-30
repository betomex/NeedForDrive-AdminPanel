import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Collapse, Layout, Table} from "antd";
import {Link} from "react-router-dom";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {setPointAction, setPointToEdit} from "../../../../redux/pointsReducer";
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
              fields={[
                {idName: "cityId", name: "Город"},
                {idName: "address", name: "Адрес"},
                {idName: "name", name: "Описание"}
              ]}
              onSorterFormFinish={onSorterFormFinish}
            />
          </Collapse.Panel>
        </Collapse>
        : <SorterForm
          fields={[
            {idName: "cityId", name: "Город"},
            {idName: "address", name: "Адрес"},
            {idName: "name", name: "Описание"}
          ]}
          onSorterFormFinish={onSorterFormFinish}
        />
      }
      <Link to="point-edit">
        <Button
          type="primary"
          className="addEntityButton"
          onClick={() => {
            dispatch(setPointAction("create"))
            dispatch(setPointToEdit(null))
          }}
        >Добавить пункт</Button>
      </Link>
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