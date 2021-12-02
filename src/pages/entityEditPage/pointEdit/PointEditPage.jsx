import React from "react";
import {useSelector} from "react-redux";
import {Layout} from "antd";
import {PointEditForm} from "./PointEditForm";
import './PointEditPage.css'

export const PointEditPage = () => {
  const pointToEdit = useSelector(state => state.points.pointToEdit)

  return <Layout className="editingContainer">
    <h1 className="pageTitle editingTitle">Карточка пункта</h1>
    <div className="editingContent pointEditContent">
      <p className="EntityFormTitle">Настройки пункта</p>
      <PointEditForm pointToEdit={pointToEdit}/>
    </div>
  </Layout>
}