import React, {useEffect, useState} from "react";
import {Collapse, Layout, Pagination} from "antd";
import './OrdersList.css'
import {useDispatch, useSelector} from "react-redux";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import {Order} from "../../components/Order";
import {OrdersFilterForm} from "./OrdersFilterForm";
import {getOrders} from "../../../../redux/actions/ordersActions";

export const OrdersList = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [filters, setFilters] = useState(null)
  const [collapsedItems, setCollapsedItems] = useState([])

  const ordersData = useSelector(state => state.orders)
  const {orders, totalCount} = ordersData

  const dispatch = useDispatch()
  const sizeOfPage = useBreakpoint()

  const paginationHandler = (page) => {
    setCurrentPage(page)
  }

  const onFilterFormFinish = (values) => {
    const date = new Date()
    let dateFrom = ""
    switch (values.dateFrom) {
      case "month": {
        dateFrom = date.setMonth(date.getMonth() - 1)
        break
      }
      case "week": {
        dateFrom = date.setDate(date.getDate() - 7)
        break
      }
      case "day": {
        dateFrom = date.setDate(date.getDate() - 1)
        break
      }
      default:
    }
    setFilters({...values, dateFrom})
  };

  useEffect(() => {
    dispatch(getOrders(currentPage - 1, limit, filters))
  }, [currentPage, filters])

  return <>
    <h1 className="pageTitle">Заказы</h1>
    <Layout.Content className="ordersListContent">
      {sizeOfPage.xs
        ? <Collapse
          ghost
          onChange={setCollapsedItems}
        >
          <Collapse.Panel key={1} header="Фильтры">
            <OrdersFilterForm onFilterFormFinish={onFilterFormFinish}/>
          </Collapse.Panel>
        </Collapse>
        : <OrdersFilterForm onFilterFormFinish={onFilterFormFinish}/>
      }
      <div
        className="ordersList"
        style={collapsedItems.length ? {height: "35%"} : {height: "70%"}}
      >
        {orders.map(order => <Order order={order} key={order.id}/>)}
      </div>
      <Pagination
        total={totalCount}
        pageSize={20}
        current={currentPage}
        showQuickJumper
        showSizeChanger={false}
        showTotal={total => `Всего ${total} заказов`}
        onChange={paginationHandler}
        simple={sizeOfPage.xs}
        size={sizeOfPage.lg ? "default" : "small"}
      />
    </Layout.Content>
  </>
}