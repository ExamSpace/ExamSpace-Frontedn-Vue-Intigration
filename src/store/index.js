import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../axios-api'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    accessToken: localStorage.getItem('access_token') || null,
    refreshToken: localStorage.getItem('refresh_token') || null,
    username: localStorage.getItem('username') || null,
    APIData: ''
  },
  mutations: {
    updateStorage(state, { access, refresh }) {
      state.accessToken = access
      state.refreshToken = refresh
    },
    login(state) {
      //state.username = localStorage.getItem('username')
      state.loggedIn = true
    },
    destroyToken(state) {
      state.accessToken = null
      state.refreshToken = null
    }
  },
  getters: {
    loggedIn(state) {
      return state.accessToken != null
    }
  },
  actions: {
    userLogout(context) {
      if (context.getters.loggedIn) {
        //   return new Promise((resolve, reject) => {
        //     //getAPI.post('/api-token/', {
        //     getAPI
        //       .post('/api/auth/logout')
        //       .then(response => {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('username')
        context.commit('destroyToken')
        //         resolve(response)
        //       })
        //       .catch(err => {
        //         localStorage.removeItem('access_token')
        //         context.commit('destroyToken')
        //         reject(err)
        //       })
        //   })
      }
    },
    userLogin(context, usercredentials) {
      return new Promise((resolve, reject) => {
        // getAPI.post('/api-token/', {
        getAPI
          .post('/api/auth/login', {
            username: usercredentials.username,
            password: usercredentials.password
          })
          .then(response => {
            localStorage.setItem('access_token', response.data.token)
            localStorage.setItem('username', usercredentials.username)
            context.commit('updateStorage', {
              access: response.data.token
            })
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })

        getAPI
          .get('/api/auth/refresh')
          .then(response => {
            localStorage.setItem('refresh_token', response.data.token)
            context.commit('updateStorage', {
              refresh: response.data.token
            })
            resolve(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
