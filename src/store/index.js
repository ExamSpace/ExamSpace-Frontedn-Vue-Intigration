import Vue from 'vue'
import Vuex from 'vuex'
import { getAPI } from '../axios-api'

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
      localStorage.setItem('access', access)
      localStorage.setItem('refresh', refresh)
      localStorage.setItem('username', username)
      state.accessToken = access
      state.refreshToken = refresh
      state.username = username
    },
    updateAccess(state, access) {
      state.accessToken = access
    },
    destroyToken(state) {
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
    userLogout(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('username')
        context.commit('destroyToken')
      }
    },
    userLogin(context, credentials) {
      return new Promise((resolve, reject) => {
        // send the username and password to the backend API:
        getAPI
          .post('/api/auth/token', {
            username: credentials.username,
            password: credentials.password
          })
          // if successful update local storage:
          .then(response => {
            context.commit('updateStorage', {
              access: response.data.access,
              refresh: response.data.refresh,
              username: credentials.username
            }) // store the access and refresh token in localstorage
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    registerUser(context, usercredentials) {
      return new Promise((resolve, reject) => {
        getAPI
          .post('/api/auth/register', {
            username: usercredentials.username,
            email: usercredentials.email,
            password: usercredentials.password,
            repeat: usercredentials.repeat
          })
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    refreshToken(context) {
      return new Promise((resolve, reject) => {
        getAPI
          .post('/api/auth/token/refresh', {
            refresh: context.state.refreshToken
          }) // send the stored refresh token to the backend API
          .then(response => {
            // if API sends back new access and refresh token update the store
            console.log('New access successfully generated')
            context.commit('updateAccess', response.data.access)
            resolve(response.data.access)
          })
          .catch(err => {
            console.log('error in refreshToken Task')
            reject(err) // error generating new access and refresh token because refresh token has expired
          })
      })
    }
  }
})
