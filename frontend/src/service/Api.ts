import axios from "axios";

const Api = axios.create({
  baseURL: `http://18.119.118.9:8090/v1`,
  headers: {},
});

export default Api;
