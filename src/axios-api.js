import axios from 'axios'

const getAPI = axios.create({
  baseURL: 'http://examspace.ddns.net:8000/',
  timeout: 10000
})

export { getAPI }
