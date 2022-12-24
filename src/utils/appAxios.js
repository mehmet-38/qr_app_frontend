import axios from "axios";
const TOKEN = localStorage.getItem("userToken");
const appAxios = axios.create({
  baseURL: "http://localhost/api",
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    //"Content-Type": "application/json",
  },

  withCredentials: false,
});

export default appAxios;
