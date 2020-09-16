import http from '../http-common'

class DataService {
  getAll() {
    return http.get('/list', {headers: { Authorization: `Bearer ${this.$store.state.accessToken}` }})
  }
}

export default new DataService()
