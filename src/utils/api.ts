import axios from "axios"
import { ITodo } from "../redux/actionTypes/todosActionTypes"

const instance = axios.create()

const baseURL = "https://jsonplaceholder.typicode.com"

const createURL = (path: string) => `${baseURL}${path}`

const authenticationMiddleware = (config: any) => {
  const token = "abc"
  config.headers.Authorization = token

  return config;
}

const handleError = (error: any) => {
  return Promise.reject(error)
}

instance.interceptors.request.use(authenticationMiddleware, handleError);

const getTodos = () => instance.get<ITodo[]>(createURL("/todos"))

export default getTodos