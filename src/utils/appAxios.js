import axios from "axios";
const TOKEN = "KFDhwo8KTqjKpBrhxjwn6aqBAWwm4VjUnlsoDN6C";
const appAxios = axios.create({
  baseURL: "http://localhost/api",

  withCredentials: false,
});

export default appAxios;
