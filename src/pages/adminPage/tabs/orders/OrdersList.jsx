import React, {useEffect, useState} from "react";
import {Layout, Pagination} from "antd";
import './OrdersList.css'
import {useDispatch, useSelector} from "react-redux";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {getOrders} from "../../../../redux/ordersReducer";
import {Order} from "../../components/Order";

export const OrdersList = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useDispatch()

  const ordersData = useSelector(state => state.orders)
  const {orders, totalCount} = ordersData

  useEffect(() => {
    dispatch(getOrders(currentPage))
  }, [currentPage])

  const paginationHandler = (page) => {
    setCurrentPage(page)
  }

  const sizeOfPage = useBreakpoint()

  return <>
    <h1 className="pageTitle">Заказы</h1>
    <Layout.Content className="ordersListContent">
      <div className="ordersList">
        {orders.map(order => <Order order={order} key={order.id}/>)}
      </div>
      <Pagination
        total={totalCount}
        pageSize={20}
        current={currentPage}
        showQuickJumper
        showTotal={total => `Всего ${total} заказов`}
        onChange={paginationHandler}
        simple={sizeOfPage.xs}
        size={sizeOfPage.lg ? "default" : "small"}
      />
    </Layout.Content>
  </>
}