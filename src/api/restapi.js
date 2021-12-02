import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api',
  headers: {
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
  },
});

const sortParams = (sorters) => {
  let sorterParams = ``
  if (sorters && sorters.field && sorters.sortDirection) {
    sorterParams += `?sort[${sorters.field}]=${sorters.sortDirection}`
  }
  return sorterParams
}

export const ordersAPI = {
  getOrders(page, limit, filters) {
    let filterParams = ``
    if (filters) {
      if (filters.cityId) filterParams += `&cityId=${filters.cityId}`
      if (filters.orderStatus) filterParams += `&orderStatusId=${filters.orderStatus}`
      if (filters.dateFrom) filterParams += `&dateFrom%5B%24gt%5D=${filters.dateFrom}`
    }
    return instance.get(`db/order?page=${page}&limit=${limit}${filterParams}`, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  },
  getOrderStatus() {
    return instance.get(`db/orderStatus`, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    }).then(r => r.data.data)
  }
}

export const carsAPI = {
  getCars(page = 1, limit = 10, sorters) {
    const url = sorters
      ? `db/car${sortParams(sorters)}&page=${page}&limit=${limit}`
      : `db/car?page=${page}&limit=${limit}`
    return instance.get(url, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  },
  getCategories() {
    return instance.get(`db/category`, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    }).then(r => r.data.data)
  },
  putCar(carId, data) {
    return instance.put(`db/car/${carId}`, data, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  },
  postCar(data) {
    return instance.post(`db/car`, data, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  },
  deleteCar(carId) {
    return instance.delete(`db/car/${carId}`, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  }
}

export const citiesAPI = {
  getCities(sorters) {
    return instance.get(`db/city${sortParams(sorters)}`, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  },
  putCity(cityId, data) {
    return instance.put(`db/city/${cityId}`, data,{
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  },
  postCity(data) {
    return instance.post(`db/city`, data,{
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  }
}

export const pointsAPI = {
  getPoints(sorters) {
    return instance.get(`db/point${sortParams(sorters)}`, {
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  },
  putPoint(pointId, data) {
    return instance.put(`db/point/${pointId}`, data,{
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  },
  postPoint(data) {
    return instance.post(`db/point`, data,{
      headers: {
        "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
      }
    })
  }
}