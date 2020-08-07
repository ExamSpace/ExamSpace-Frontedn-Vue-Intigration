import Vue from 'vue'
import Vuex from 'vuex'
import json from '../json/data.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: '',
    isLoggedIn: false,
    exams: 0
  },
  mutations: {
    login(state, username) {
      state.userName = username
      state.isLoggedIn = true
    },
    SET_QUESTIONS(state, jsonData) {
      console.log(jsonData)
      state.exams = jsonData
    },
    UPDATE_CHOICE(state, payload) {
      if (
        state.exams[payload.examidx].subjects[payload.subidx].questions[
          payload.quesidx
        ].selectedOptionIdx === payload.optidx
      ) {
        state.exams[payload.examidx].subjects[payload.subidx].questions[
          payload.quesidx
        ].selectedOptionIdx = -1
        state.exams[payload.examidx].subjects[payload.subidx].answered -= 1
      } else {
        state.exams[payload.examidx].subjects[payload.subidx].questions[
          payload.quesidx
        ].selectedOptionIdx = payload.optidx
        state.exams[payload.examidx].subjects[payload.subidx].answered += 1
      }
    },
    PREVIOUS(state, payload) {
      if (
        state.exams[payload.examidx].subjects[payload.subidx].currentIndex != 0
      ) {
        state.exams[payload.examidx].subjects[payload.subidx].currentIndex--
      }
    },
    NEXT(state, payload) {
      if (
        state.exams[payload.examidx].subjects[payload.subidx].currentIndex + 1 <
        state.exams[payload.examidx].subjects[payload.subidx].questions.length
      ) {
        state.exams[payload.examidx].subjects[payload.subidx].currentIndex++
      }
    }
  },
  actions: {
    load({ commit }) {
      commit(
        'SET_QUESTIONS',
        json.map(item => item)
      )
    },
    update_choice: ({ commit }, payload) => {
      commit('UPDATE_CHOICE', payload)
    },
    previous: ({ commit }, payload) => {
      commit('PREVIOUS', payload)
    },
    next: ({ commit }, payload) => {
      commit('NEXT', payload)
    }
  },
  modules: {}
})
