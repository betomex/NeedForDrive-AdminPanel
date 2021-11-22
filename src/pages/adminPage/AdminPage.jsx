import React, {useState} from "react";
import {Avatar, Badge, Col, Layout, Menu, Row} from 'antd';
import {BellFilled, EditOutlined} from "@ant-design/icons";
import './AdminPage.css'
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import logo from '../../assets/Logo Icon.svg'
import avatar from '../../assets/avatar.png'
import {OrdersList} from "./tabs/orders/OrdersList";

export const AdminPage = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(1)

  const onSelectHandler = (e) => {
    setCurrentMenuItem(Number(e.key))
  }

  const sizeOfPage = useBreakpoint()

  let siderWidth = 0
  if (sizeOfPage.xs) siderWidth = 35
  else if (sizeOfPage.md) siderWidth = 200

  return <Layout>
    <Row className="adminPageHeader">
      <Col
        xs={{span: 13}}
        md={{span: 6}}
        lg={{span: 5}}
        xl={{span: 3}}
        className="adminPageCompany"
      >
        <img
          src={logo}
          alt="logo"
          className="logoImg"
        />
        <p className="logoTitle">Need For Drive</p>
      </Col>
      <Col
        xs={{offset: 5, span: 3}}
        md={{offset: 14, span: 2}}
        lg={{offset: 15}}
        xl={{offset: 19, span: 1}}
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
        xs={{span: 3}}
        md={{span: 2}}
        xl={{span: 1}}
        className="adminUserAccount"
      >
        <Avatar src={avatar}/>
      </Col>
    </Row>

    <Layout>
      <Layout.Sider
        width={siderWidth}
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