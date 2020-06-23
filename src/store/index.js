import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    isLoggedIn: false
  },
  mutations: {
    login(state, username) {
      state.userName = username
      state.isLoggedIn = true
    }
  },
  actions: {},
  modules: {}
})
