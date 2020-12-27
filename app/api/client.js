import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.1.99:5000/api"
});

export default apiClient;