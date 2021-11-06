import React, {useState} from "react";
import {Avatar, Badge, Col, Layout, Menu, Row, Space} from 'antd';
import {BellFilled, EditOutlined} from "@ant-design/icons";
import './AdminPage.css'
import logo from '../../assets/Logo Icon.svg'
import avatar from '../../assets/avatar.png'
import {OrdersList} from "./tabs/orders/OrdersList";

export const AdminPage = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(1)

  const onSelectHandler = (e) => {
    setCurrentMenuItem(Number(e.key))
  }

  return <Layout>
    <Row className="adminPageHeader">
      <Col
        span={3}
        className="adminPageCompany"
      >
        <Space align="baseline">
          <img
            src={logo}
            alt="logo"
            className="logoImg"
          />
          <p className="logoTitle">Need For Drive</p>
        </Space>
      </Col>
      <Col
        offset={19}
        span={1}
        className="adminPageHeaderNotification"
      >
        <Badge
          count={2}
          size="small"
        >
          <BellFilled className="notificationIcon"/>
        </Badge>
      </Col>
      <Col
        span={1}
        className="adminUserAccount"
      >
        <Avatar src={avatar}/>
      </Col>
    </Row>

    <Layout>
      <Layout.Sider
        width={250}
        className="adminPageSider"
      >
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
      </Layout.Sider>

      <Layout className="adminPageContainer">
        {currentMenuItem === 1 && <OrdersList/>}
      </Layout>

    </Layout>
  </Layout>
}