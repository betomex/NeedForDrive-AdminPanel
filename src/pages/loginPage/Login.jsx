import React from "react";
import './Login.css'
import {Button, Form, Input, Space} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {postLogin} from "../../redux/authReducer";
import logo from '../../assets/Logo Icon.png'

export const Login = () => {
  const dispatch = useDispatch()
  
  const onFinish = (values) => {
    dispatch(postLogin(values.username, values.password))
  };

  const isAuth = useSelector(state => state.auth.isAuth)

  if (isAuth) {
    return <Redirect to="/admin"/>
  }
  
  return <div className="loginContainer">
    <div className="loginContent">
      <Space
        className="loginHeader"
        size="middle"
      >
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
        <p className="company">Need For Drive</p>
      </Space>
      <div className="loginCard">
        <p className="loginTitle">Вход</p>
        <Form
          name="loginForm"
          onFinish={onFinish}
          initialValues={{username: "intern", password: "intern-S!", remember: true}}
        >
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Введите логин'}]}
          >
            <Input
              prefix={<UserOutlined/>}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Введите пароль'}]}
          >
            <Input
              prefix={<LockOutlined/>}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <div className="loginCardFooter">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>Запросить доступ</a>
            <Button
              type="primary"
              htmlType="submit"
              className="submitButton"
            >Войти</Button>
          </div>
        </Form>
      </div>
    </div>
  </div>
}