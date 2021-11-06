import React from "react";
import './Login.css'
import {Button, Form, Input, Space} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useDispatch, useSelector} from "react-redux";
import {postLogin} from "../../redux/authReducer";
import logo from '../../assets/Logo Icon.svg'

export const Login = () => {
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(postLogin(values.username, values.password))
  };

  const authStatus = useSelector(state => state.auth.authStatus)

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
          initialValues={{remember: true}} // intern intern-S!
        >
          <Form.Item
            className="formItem"
            name="username"
            rules={[{required: true, message: 'Введите логин'}]}
            validateStatus={authStatus === 401 ? "error" : null}
          >
            <Input
              prefix={<UserOutlined/>}
              placeholder="Username"
              allowClear
            />
          </Form.Item>

          <Form.Item
            className="formItem"
            name="password"
            rules={[{required: true, message: 'Введите пароль'}]}
            validateStatus={authStatus === 401 ? "error" : null}
            help={authStatus === 401 ? "Неверный логин или пароль" : null}
          >
            <Input
              prefix={<LockOutlined/>}
              type="password"
              placeholder="Password"
              allowClear
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