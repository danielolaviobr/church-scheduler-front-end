import axios from "axios";

const api = axios.create({
  baseURL: "https://church-scheduler-server.herokuapp.com",
});

export default api;
