import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.mocki.io/v1/6558cb8e',
  headers: {
    'Content-type': 'application/json'
  }
})
