import React from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";

export const AdminPage = () => {
  const isAuth = useSelector(state => state.auth.isAuth)

  if (!isAuth) {
    return <Redirect to="/login"/>
  }

  return <h1>ADMIN PAGE</h1>
}