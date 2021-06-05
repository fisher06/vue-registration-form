import i18n from '@/i18n.js'

const state = {
  success: [],
  info: [],
  warning: [],
  error: []
}

const mutations = {
  setSuccessMsg (state, message) {
    state.success.push(message)
  },
  removeSuccessMsg (state) {
    state.success.shift()
  },
  setInfoMsg (state, message) {
    state.info.push(message)
  },
  removeInfoMsg (state) {
    state.info.shift()
  }
}

const actions = {
  setSuccessMsg ({ commit }, message) {
    commit('setSuccessMsg', i18n.t(message))
    setTimeout(function () {
      commit('removeSuccessMsg')
    }, 10000)
  },
  setInfoMsg ({ commit }, message) {
    commit('setInfoMsg', i18n.t(message))
    setTimeout(function () {
      commit('removeInfoMsg')
    }, 10000)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
