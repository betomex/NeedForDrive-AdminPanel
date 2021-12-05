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

const putRequest = (url, data) => {
  return instance.put(url, data, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
    }
  })
}

const postRequest = (url, data) => {
  return instance.post(url, data, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
    }
  })
}

const deleteRequest = (url) => {
  return instance.delete(url, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
    }
  })
}

const getRequest = (url) => {
  return instance.get(url, {
    headers: {
      "Authorization": `Bearer ${sessionStorage.getItem("access_token")}`
    }
  })
}

export const ordersAPI = {
  getOrders(page, limit, filters) {
    let filterParams = ``
    if (filters) {
      if (filters.cityId) filterParams += `&cityId=${filters.cityId}`
      if (filters.orderStatus) filterParams += `&orderStatusId=${filters.orderStatus}`
      if (filters.dateFrom) filterParams += `&dateFrom%5B%24gt%5D=${filters.dateFrom}`
    }
    return getRequest(`db/order?page=${page}&limit=${limit}${filterParams}`)
  },
  getOrderStatus() {
    return getRequest(`db/orderStatus`).then(r => r.data.data)
  }
}

export const carsAPI = {
  getCars(page = 1, limit = 10, sorters) {
    const url = sorters
      ? `db/car${sortParams(sorters)}&page=${page}&limit=${limit}`
      : `db/car?page=${page}&limit=${limit}`
    return getRequest(url)
  },
  getCategories() {
    return getRequest(`db/category`).then(r => r.data.data)
  },
  putCar(carId, data) {
    return putRequest(`db/car/${carId}`, data)
  },
  postCar(data) {
    return postRequest(`db/car`, data)
  },
  deleteCar(carId) {
    return deleteRequest(`db/car/${carId}`)
  }
}

export const citiesAPI = {
  getCities(sorters) {
    return getRequest(`db/city${sortParams(sorters)}`)
  },
  putCity(cityId, data) {
    return putRequest(`db/city/${cityId}`, data)
  },
  postCity(data) {
    return postRequest(`db/city`, data)
  }
}

export const pointsAPI = {
  getPoints(sorters) {
    return getRequest(`db/point${sortParams(sorters)}`)
  },
  putPoint(pointId, data) {
    return putRequest(`db/point/${pointId}`, data)
  },
  postPoint(data) {
    return postRequest(`db/point`, data)
  }
}