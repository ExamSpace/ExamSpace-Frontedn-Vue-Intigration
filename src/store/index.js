import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../axios-api'
Vue.use(require('vue-cookies'))

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('access') || null,
    refreshToken: localStorage.getItem('refresh') || null,
    username: localStorage.getItem('username') || null
    //APIData: ''
  },
  mutations: {
    updateStorage(state, { access, refresh, username }) {
      state.accessToken = access
      state.refreshToken = refresh
      state.username = username
    },
    // login(state) {
    //   //state.username = localStorage.getItem('username')
    //   state.loggedIn = true
    // },
    destroyToken(state) {
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      localStorage.removeItem('username')
      state.accessToken = null
      state.refreshToken = null
      state.username = null
    }
  },
  getters: {
    loggedIn(state) {
      return state.accessToken != null
    }
  },
  actions: {
    // userLogout(context) {
    //   if (context.getters.loggedIn) {
    //     //   return new Promise((resolve, reject) => {
    //     //     //getAPI.post('/api-token/', {
    //     //     getAPI
    //     //       .post('/api/auth/logout')
    //     //       .then(response => {
    //     // localStorage.removeItem('access_token')
    //     // localStorage.removeItem('refresh_token')
    //     // localStorage.removeItem('username')
    //     // context.commit('destroyToken')
    //     //         resolve(response)
    //     //       })
    //     //       .catch(err => {
    //     //         localStorage.removeItem('access_token')
    //     //         context.commit('destroyToken')
    //     //         reject(err)
    //     //       })
    //     //   })
    //   }
    // },
    userLogout(context) {
      if (context.getters.loggedIn) {
        context.commit('destroyToken')
      }
    },
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        // getAPI.post('/api-token/', {
        getAPI
          .post('/api/auth/token', {
            username: usercredentials.username,
            password: usercredentials.password
          })
          .then(response => {
            localStorage.setItem('access', response.data.access)
            localStorage.setItem('refresh', response.data.refresh)
            localStorage.setItem('username', usercredentials.username)
            context.commit('updateStorage', {
              access: response.data.access,
              refresh: response.data.refresh,
              username: usercredentials.username
            })
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
