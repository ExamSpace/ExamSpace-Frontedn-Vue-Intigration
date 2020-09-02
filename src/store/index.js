import Vue from 'vue'
import Vuex from 'vuex'

import User from './modules/user'
//import json from '../json/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: User
  }
})
