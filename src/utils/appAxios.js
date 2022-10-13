import axios from "axios";
const TOKEN = localStorage.getItem("userToken");
const appAxios = axios.create({
  baseURL: "http://localhost/api",
  Authorization: `Bearer ${TOKEN}`,
  withCredentials: false,
});

export default appAxios;
