import axios from "axios";

const clientSecret = "4cbcea96de"
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyz";

const getBasicHash = () => {
  let rs = "";
  while (rs.length < 7) {
    rs += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `Basic ${window.btoa(`${rs}:${clientSecret}`)}`
}

const instance = axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api',
  headers: {
    "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Authorization": getBasicHash()
  },
});

export const authAPI = {
  postLogin(login, password) {
    const body = {
      username: login,
      password
    }
    return instance.post(`auth/login`, body)
  }
}