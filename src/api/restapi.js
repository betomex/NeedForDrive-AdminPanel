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
  getOrders(page = 1, limit = 20) {
    return instance.get(`db/order?page=${page}&limit=${limit}`)
  }
}