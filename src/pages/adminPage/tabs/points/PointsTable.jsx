import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Layout, Table} from "antd";
import {Link} from "react-router-dom";
import {getPoints, setPointAction, setPointToEdit} from "../../../../redux/pointsReducer";
import {pointsColumns} from "../../tablesColumns";
import './PointsTable.css'

export const PointsTable = () => {
  const [loading, setLoading] = useState(true)

  const pointsData = useSelector(state => state.points)
  const {points, totalCount} = pointsData

  const dispatch = useDispatch()

  useEffect(async () => {
    setLoading(true)
    await dispatch(getPoints())
    setLoading(false)
  }, [])

  return <>
    <h1 className="pageTitle">Пункты</h1>
    <Layout.Content className="ordersListContent">
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
      <Table
        className="pointTable"
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
    </Layout.Content>
  </>
}