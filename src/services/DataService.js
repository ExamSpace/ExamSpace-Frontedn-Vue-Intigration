import http from '../http-common'

class DataService {
  getAll() {
    return http.get('/list')
  }
}

export default new DataService()
