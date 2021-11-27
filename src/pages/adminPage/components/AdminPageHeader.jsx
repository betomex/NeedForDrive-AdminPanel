/* eslint-disable react/prop-types */
import React from "react";
import {Avatar, Badge, Button, Col, Row} from "antd";
import {BellFilled, MenuUnfoldOutlined, SearchOutlined} from "@ant-design/icons";
import useBreakpoint from "antd/es/grid/hooks/useBreakpoint";
import logo from "../../../assets/Logo Icon.svg";
import avatar from "../../../assets/avatar.png";
import './AdminPageHeader.css'

export const AdminPageHeader = (props) => {
  const {setVisible} = props

  const pageSize = useBreakpoint()
  
  return <Row className="adminPageHeader">
    <Col
      xs={{span: 15}}
      md={{span: 7}}
      lg={{span: 6}}
      xl={{span: 4}}
      className="adminPageCompany"
    >
      <Button className="sideMenuButton" onClick={() => setVisible(true)}>
        <MenuUnfoldOutlined/>
      </Button>
      <img
        src={logo}
        alt="logo"
        className="logoImg"
      />
      <p className="logoTitle">Need For Drive</p>
    </Col>
    <Col
      className="adminPageSearch"
      xs={{offset: 3, span: 3}}
      md={{offset: 11, span: 2}}
      lg={{offset: 12}}
      xl={{offset: 17, span: 1}}
    >
      <SearchOutlined className="searchIcon"/>
    </Col>
    <Col
      xs={pageSize.xs && {offset: 3, span: 3}}
      md={{span: 2}}
      xl={{span: 1}}
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
}