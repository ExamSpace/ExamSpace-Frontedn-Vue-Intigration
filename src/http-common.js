import axios from 'axios'

export default axios.create({
  baseURL: 'http://localhost:8000/api/exam',
  headers: {
    'Content-type': 'application/json'
  }
})
