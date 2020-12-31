import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.107:5000/api"
});

export default apiClient;