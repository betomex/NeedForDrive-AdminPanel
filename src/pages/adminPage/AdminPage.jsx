import React, {useState} from "react";
import {Drawer, Layout, Menu} from 'antd';
import {CarOutlined, EditOutlined, EnvironmentOutlined, HomeOutlined} from "@ant-design/icons";
import './AdminPage.css'
import {useDispatch, useSelector} from "react-redux";
import {OrdersList} from "./tabs/orders/OrdersList";
import {AdminPageHeader} from "./components/AdminPageHeader";
import {CarsTable} from "./tabs/cars/CarsTable";
import {CitiesTable} from "./tabs/cities/CitiesTable";
import {PointsTable} from "./tabs/points/PointsTable";
import {setAdminCurrentPage} from "../../redux/actions/utilsActions";

export const AdminPage = () => {
  const [visible, setVisible] = useState(false)
  
  const currentMenuItem = useSelector(state => state.utils.adminCurrentPage)
  const dispatch = useDispatch()

  const onSelectHandler = (e) => {
    dispatch(setAdminCurrentPage(Number(e.key)))
    setVisible(false)
  }

  const onClose = () => {
    setVisible(false)
  }

  return <Layout>
    <AdminPageHeader setVisible={setVisible}/>
    <Layout>
      <Drawer
        title="Меню"
        placement="left"
        onClose={onClose}
        visible={visible}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{height: '100%', borderRight: 0}}
          onSelect={onSelectHandler}
        >
          <Menu.Item
            key="1"
            className="sideMenuItem"
            icon={<EditOutlined/>}
          >Список заказов</Menu.Item>
          <Menu.Item
            key="2"
            className="sideMenuItem"
            icon={<CarOutlined/>}
          >Таблица авто</Menu.Item>
          <Menu.Item
            key="3"
            className="sideMenuItem"
            icon={<EnvironmentOutlined/>}
          >Таблица городов</Menu.Item>
          <Menu.Item
            key="4"
            className="sideMenuItem"
            icon={<HomeOutlined/>}
          >Таблица пунктов</Menu.Item>
        </Menu>
      </Drawer>
      <Layout className="adminPageContainer">
        {currentMenuItem === 1 && <OrdersList/>}
        {currentMenuItem === 2 && <CarsTable/>}
        {currentMenuItem === 3 && <CitiesTable/>}
        {currentMenuItem === 4 && <PointsTable/>}
      </Layout>
    </Layout>
  </Layout>
}