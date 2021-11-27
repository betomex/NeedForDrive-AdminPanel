import React, {useState} from "react";
import {Drawer, Layout, Menu} from 'antd';
import {EditOutlined} from "@ant-design/icons";
import './AdminPage.css'
import {OrdersList} from "./tabs/orders/OrdersList";
import {AdminPageHeader} from "./components/AdminPageHeader";

export const AdminPage = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(1)
  const [visible, setVisible] = useState(false)

  const onSelectHandler = (e) => {
    setCurrentMenuItem(Number(e.key))
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
          <Menu.Item key="2" className="sideMenuItem">option2</Menu.Item>
          <Menu.Item key="3" className="sideMenuItem">option3</Menu.Item>
          <Menu.Item key="4" className="sideMenuItem">option4</Menu.Item>
        </Menu>
      </Drawer>
      <Layout className="adminPageContainer">
        {currentMenuItem === 1 && <OrdersList/>}
      </Layout>
    </Layout>
  </Layout>
}