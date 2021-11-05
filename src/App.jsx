import React from "react";
import 'antd/dist/antd.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {AdminPage} from "./pages/adminPage/AdminPage";
import {Login} from "./pages/loginPage/Login";

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuth)

  return <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to="/admin"/>}
    />
    <Route
      path="/admin"
      render={() => {
        return isAuth ? <AdminPage/> : <Redirect to="/login"/>
      }}
    />
    <Route
      path="/login"
      render={() => {
        return !isAuth ? <Login/> : <Redirect to="/admin"/>
      }}
    />
  </Switch>
}

export default App
