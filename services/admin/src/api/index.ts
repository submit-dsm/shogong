// axios instance 를 생성해주었습니다.
import { getStorage } from "@/util/storageGet";
import axios from "axios";
const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
const accessToken = getStorage();
if (accessToken !== undefined) {
  request.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
}
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default request;
