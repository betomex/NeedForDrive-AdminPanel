import React from "react";
import 'antd/dist/antd.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {AdminPage} from "./pages/adminPage/AdminPage";
import {Login} from "./pages/loginPage/Login";
import {CarEditPage} from "./pages/entityEditPage/carEdit/CarEditPage";
import {CityEditPage} from "./pages/entityEditPage/cityEdit/CityEditPage";
import {PointEditPage} from "./pages/entityEditPage/pointEdit/PointEditPage";

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
    <Route
      path="/car-edit"
      render={() => {
        return isAuth ? <CarEditPage/> : <Redirect to="/login"/>
      }}
    />
    <Route
      path="/city-edit"
      render={() => {
        return isAuth ? <CityEditPage/> : <Redirect to="/login"/>
      }}
    />
    <Route
      path="/point-edit"
      render={() => {
        return isAuth ? <PointEditPage/> : <Redirect to="/login"/>
      }}
    />
  </Switch>
}

export default App
