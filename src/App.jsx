import React from "react";
import 'antd/dist/antd.css';
import {Redirect, Route, Switch} from "react-router-dom";
import {AdminPage} from "./pages/adminPage/AdminPage";
import {Login} from "./pages/loginPage/Login";

const App = () => {
  return <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to="/admin"/>}
    />
    <Route
      path="/admin"
      render={() =>
        <AdminPage/>
      }
    />
    <Route
      path="/login"
      render={() =>
        <Login/>
      }
    />
  </Switch>
}

export default App
