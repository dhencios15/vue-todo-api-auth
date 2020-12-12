import taskServices from '@/services/taskServices'
import {
  SET_ERROR,
  SET_LOADING,
  SET_TASK,
  SET_NEW_TASK,
  UPDATE_TASK,
  DELETE_TASK
} from '../types'

const isLoading = (commit, status = true) => {
  commit(SET_LOADING, status, { root: true })
}

const hasError = (commit, error) => {
  commit(SET_ERROR, error.response.data, { root: true })
}

const state = {
  tasks: []
}

const mutations = {
  [SET_TASK](state, payload) {
    state.tasks = payload
  },
  [SET_NEW_TASK](state, payload) {
    state.tasks.unshift(payload)
  },
  [UPDATE_TASK](state, payload) {
    state.tasks = state.tasks.map(task => {
      if (task._id === payload._id) {
        return payload
      }
      return task
    })
  },
  [DELETE_TASK](state, payload) {
    state.tasks = state.tasks.filter(task => task._id !== payload)
  }
}

const actions = {
  getAllTask: async ({ commit }) => {
    try {
      isLoading(commit)
      const response = await (await taskServices.getAllTask()).data
      commit(SET_TASK, response.data)
    } catch (error) {
      hasError(error)
    } finally {
      isLoading(commit, false)
    }
  },
  addNewTask: async ({ commit }, description) => {
    try {
      const response = await (await taskServices.addTask(description)).data
      commit(SET_NEW_TASK, response.data)
    } catch (error) {
      hasError(error)
    }
  },
  updateTask: async ({ commit }, payload) => {
    try {
      const response = await (await taskServices.updateTask(payload)).data
      commit(UPDATE_TASK, response.data)
    } catch (error) {
      hasError(commit, error)
    }
  },
  deleteTask: async ({ commit }, payload) => {
    try {
      await taskServices.deleteTask(payload)
      commit(DELETE_TASK, payload)
    } catch (error) {
      hasError(error)
    }
  }
}

const getters = {
  tasks: state => state.tasks,
  completedTask: state => state.task.filter(task => task.completed),
  notCompletedTask: state => state.task.filter(task => !task.completed)
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
