import axios from 'axios'

const getAPI = axios.create({
  baseURL: 'http://127.0.0.1:80/',
  timeout: 10000
})

export { getAPI }
