import axios from 'axios'

const getAPI = axios.create({
  // baseURL: 'http://localhost:8000/', //localhost
  baseURL: 'http://examspace.ddns.net:8000/', //Site
  timeout: 10000
})

export { getAPI }
