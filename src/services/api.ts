import axios from "axios";

const api = axios.create({
  baseURL: "https://church-scheduler-server.herokuapp.com",
  // baseURL: "http://localhost:3003/",
});

export default api;
