import React from "react";
import {useSelector} from "react-redux";
import {Layout} from "antd";
import {CityEditForm} from "./CityEditForm";
import './CityEditPage.css'

export const CityEditPage = () => {
  const cityToEdit = useSelector(state => state.cities.cityToEdit)

  return <Layout className="editingContainer">
    <h1 className="pageTitle editingTitle">Карточка города</h1>
    <div className="editingContent cityEditContent">
      <p className="EntityFormTitle">Настройки города</p>
      <CityEditForm cityToEdit={cityToEdit}/>
    </div>
  </Layout>
}