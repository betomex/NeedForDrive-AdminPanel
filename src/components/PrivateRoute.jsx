/* eslint-disable react/prop-types */
import React from "react";
import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = (props) => {
  const {path, redirect, condition, children} = props

  return <Route
    path={path}
    render={() => {
      return condition ? children : <Redirect to={redirect}/>
    }}
  />
}