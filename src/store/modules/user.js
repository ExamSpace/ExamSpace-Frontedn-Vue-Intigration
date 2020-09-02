import axios from 'axios'

export default {
  state: {
    Token: null
  },
  getters: {},
  mutations: {
    Update(state, token) {
      state.Token = token
    }
  },
  actions: {
    LOGIN: ({ commit }, payload) => {
      return new Promise(resolve => {
        axios.post(`login`, payload).then(response => {
          context.commit('Update', { token: response.data.token })
          resolve()
        })
      })
    }
  }
}
