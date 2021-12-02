/* eslint-disable react/prop-types */
import React from "react";
import {Button, Layout} from "antd";
import './ErrorPage.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {utilsActions} from "../../redux/actions/utilsActions";

export const ErrorPage = (props) => {
  const {code, msg, submsg} = props

  const dispatch = useDispatch()

  return <Layout className="errorPageLayout">
    <div className="errorPageContent">
      <div className="errorCode">{code}</div>
      <div className="errorMessage">{msg}</div>
      <div className="errorSubMessage">{submsg}</div>
      <Link
        to="/admin"
        onClick={() => {dispatch(utilsActions.setError(null))}}
      >
        <Button type="primary">Назад</Button>
      </Link>
    </div>
  </Layout>
}