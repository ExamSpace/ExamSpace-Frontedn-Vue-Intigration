import http from '../http-common'

class Subjectlist {
  //   getAll(id) {
  //     return http.get('/' + id + '/subjectList')
  //   }
  getAll() {
    return http.get('/2/subjectList', { headers: { Authorization: `Bearer {this.$store.$state.accessToken}` } })
  }
}

export default new Subjectlist()
