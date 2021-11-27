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
  },
  getCities() {
    return instance.get(`db/city`).then(r => r.data.data)
  }
}