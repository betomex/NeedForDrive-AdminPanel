import React from "react";
import 'antd/dist/antd.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {AdminPage} from "./pages/adminPage/AdminPage";
import {Login} from "./pages/loginPage/Login";
import {PrivateRoute} from "./components/PrivateRoute";
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

    <PrivateRoute
      path="/admin"
      redirect="/login"
      isAuth={isAuth}
    >
      <AdminPage/>
    </PrivateRoute>

    <PrivateRoute
      path="/login"
      redirect="/admin"
      isAuth={!isAuth}
    >
      <Login/>
    </PrivateRoute>

    <PrivateRoute
      path="/car-edit"
      redirect="/login"
      isAuth={isAuth}
    >
      <CarEditPage/>
    </PrivateRoute>

    <PrivateRoute
      path="/city-edit"
      redirect="/login"
      isAuth={isAuth}
    >
      <CityEditPage/>
    </PrivateRoute>

    <PrivateRoute
      path="/point-edit"
      redirect="/login"
      isAuth={isAuth}
    >
      <PointEditPage/>
    </PrivateRoute>
  </Switch>
}

export default App
