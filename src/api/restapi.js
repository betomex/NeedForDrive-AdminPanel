import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api',
  headers: {
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("access_token")}`
  },
});

export const ordersAPI = {
  getOrders(page = 1, limit = 20) {
    return instance.get(`db/order?page=${page}&limit=${limit}`)
  }
}

export const carsAPI = {
  getCars(page = 1, limit = 10) {
    return instance.get(`db/car?page=${page}&limit=${limit}`)
  },
  getCategories() {
    return instance.get(`db/category`).then(r => r.data.data)
  },
  putCar(carId, data) {
    return instance.put(`db/car/${carId}`, data)
  },
  postCar(data) {
    return instance.post(`db/car`, data)
  },
  deleteCar(carId) {
    return instance.delete(`db/car/${carId}`)
  }
}

export const citiesAPI = {
  getCities() {
    return instance.get(`db/city`)
  },
  putCity(cityId, data) {
    return instance.put(`db/city/${cityId}`, data)
  },
  postCity(data) {
    return instance.post(`db/city`, data)
  }
}

export const pointsAPI = {
  getPoints() {
    return instance.get(`db/point`)
  },
  putPoint(pointId, data) {
    return instance.put(`db/point/${pointId}`, data)
  },
  postPoint(data) {
    return instance.post(`db/point`, data)
  }
}