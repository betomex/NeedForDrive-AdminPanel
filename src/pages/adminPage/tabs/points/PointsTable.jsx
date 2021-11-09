import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Layout, Table} from "antd";
import {getPoints} from "../../../../redux/pointsReducer";
import {pointsColumns} from "../../tablesColumns";

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
    </Layout.Content>
  </>
}