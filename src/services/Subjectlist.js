import http from '../http-common'

class Subjectlist {
  //   getAll(id) {
  //     return http.get('/' + id + '/subjectList')
  //   }
  getAll() {
    return http.get('/3/subjectList')
  }
}

export default new Subjectlist()
