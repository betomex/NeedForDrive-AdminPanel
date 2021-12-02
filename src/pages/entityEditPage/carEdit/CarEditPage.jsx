import React, {useState} from "react";
import {Button, Layout, Row, Upload} from 'antd';
import './CarEditPage.css'
import {UploadOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import blankCar from '../../../assets/blankCar.png'
import {CarEditForm} from "./CarEditForm";

export const CarEditPage = () => {
  const [image, setImage] = useState()

  const carToEdit = useSelector(state => state.cars.carToEdit)

  return <Layout className="editingContainer">
    <h1 className="pageTitle editingTitle">Карточка автомобиля</h1>
    <Row align="top">
      <div className="editingContent editingOne">
        <img
          className="cardImage"
          src={carToEdit?.thumbnail?.path || image?.path || blankCar}
          alt="carImage"
        />
        <p className="carName">{carToEdit?.name || "Марка авто"}</p>
        <p className="carCategory">{carToEdit?.categoryId?.name || "Категория"}</p>
        <Upload
          name="file"
          beforeUpload={(e) => {
            const reader = new FileReader();
            reader.readAsDataURL(e);
            reader.onload = () => {
              const tempThumbnail = {
                mimetype: e.type,
                originalname: e.name,
                path: reader.result,
                size: e.size
              }
              setImage(tempThumbnail)
            };
            return false
          }}
        >
          <Button icon={<UploadOutlined/>}>Выберите файл...</Button>
        </Upload>
      </div>
      <div className="editingContent editingTwo">
        <p className="EntityFormTitle">Настройки автомобиля</p>
        <CarEditForm image={image} carToEdit={carToEdit}/>
      </div>
    </Row>
  </Layout>
}