import React from "react";
import 'antd/dist/antd.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import {AdminPage} from "./pages/adminPage/AdminPage";
import {Login} from "./pages/loginPage/Login";
import {PrivateRoute} from "./components/PrivateRoute";

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
      condition={isAuth}
    >
      <AdminPage/>
    </PrivateRoute>

    <PrivateRoute
      path="/login"
      redirect="/admin"
      condition={!isAuth}
    >
      <Login/>
    </PrivateRoute>
  </Switch>
}

export default App
