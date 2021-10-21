import axios from "axios"

const baseURL = 'https://jsonplaceholder.typicode.com'
export const createURL = (path: string) => `${baseURL}${path}`
export const withAuth = axios.create()
export const withOutAuth = axios.create()

const authenticationMiddleware = (config: any) => {
  const token = 'abc'
  config.headers.Authorization = token

  return config;
}

const authenticationHandleError = (error: any) => {
  return Promise.reject(error)
}

withAuth.interceptors.request.use(authenticationMiddleware, authenticationHandleError)