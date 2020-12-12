import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import cookies from 'vue-cookies'

import router from '@/router'
import authServices from '../services/authServices'
import { SET_ERROR, SET_LOADING, SET_USER, SET_LOGGING_OUT } from './types'
import tasks from './task'

const dataState = createPersistedState({
  key: 'user',
  paths: ['user', 'isLoggedIn']
})

export default createStore({
  plugins: [dataState],
  state: {
    user: null,
    error: null,
    isLoggedIn: false,
    loading: false,
    logging_out: false
  },
  mutations: {
    [SET_USER](state, payload) {
      state.user = payload
      state.isLoggedIn = !!state.user
    },
    [SET_ERROR](state, error) {
      state.error = error
    },
    [SET_LOADING](state, payload) {
      state.loading = payload
    },
    [SET_LOGGING_OUT](state, payload) {
      state.logging_out = payload
    }
  },
  actions: {
    login: async ({ commit }, payload) => {
      try {
        commit(SET_LOADING, true)
        const response = await authServices.login(payload)
        commit(SET_USER, response.data.user)
        cookies.set('jwt', response.data.token, '1d')
        commit(SET_ERROR, null)
        router.push({ name: 'Home' })
      } catch (error) {
        commit(SET_ERROR, error.response.data)
      } finally {
        commit(SET_LOADING, false)
      }
    },
    register: async ({ commit }, payload) => {
      try {
        commit(SET_LOADING, true)
        const response = await authServices.register(payload)
        commit(SET_USER, response.data.user)
        cookies.set('jwt', response.data.token, '1d')
        commit(SET_ERROR, null)
        router.push({ name: 'Home' })
      } catch (error) {
        commit(SET_ERROR, error.response.data)
      } finally {
        commit(SET_LOADING, false)
      }
    },
    logout: async ({ commit }) => {
      try {
        commit(SET_LOGGING_OUT, true)
        await authServices.logout()
        commit(SET_USER, null)
        cookies.remove('jwt')
        router.push({ name: 'Login' })
      } catch (error) {
        commit(SET_ERROR, error.respinse.data)
      } finally {
        commit(SET_LOGGING_OUT, false)
      }
    }
  },
  getters: {
    userInfo: ({ user }) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      age: user.age
    })
  },
  modules: { tasks }
})
