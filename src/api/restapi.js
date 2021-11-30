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
    return instance.get(`db/order?page=${page}&limit=${limit}${filterParams}`)
  },
  getOrderStatus() {
    return instance.get(`db/orderStatus`).then(r => r.data.data)
  }
}

export const carsAPI = {
  getCars(page = 1, limit = 10, sorters) {
    const url = sorters
      ? `db/car${sortParams(sorters)}&page=${page}&limit=${limit}`
      : `db/car?page=${page}&limit=${limit}`
    return instance.get(url)
  }
}

export const citiesAPI = {
  getCities(sorters) {
    return instance.get(`db/city${sortParams(sorters)}`)
  }
}

export const pointsAPI = {
  getPoints(sorters) {
    return instance.get(`db/point${sortParams(sorters)}`)
  }
}