import axios from 'axios'

const state = {
  originData: {},
  user: {},
  countries: [
    {
      text: 'Canada',
      value: 'CA'
    },
    {
      text: 'France',
      value: 'FR'
    },
    {
      text: 'United Kingdom',
      value: 'GB'
    }
  ]
}

const getters = {
}

const mutations = {
  setSourceData (state, data) {
    state.originData = data
    state.user = { ...state.originData }
  },
  setUserData (state, data) {
    state.user[data.type] = data.value
  },
  cancelModification (state) {
    state.user = { ...state.originData }
  }
}

const actions = {
  async fetchSourceData ({ commit }) {
    try {
      // get user data from API
      const res = await axios.get('/static/user.json')
      const sourceData = res.data
      commit('setSourceData', sourceData)
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' })
    }
  },
  // async
  submitUserData ({ dispatch }, data) {
    try {
      // update user data from API
      // await this.$axios.patch()
      dispatch('alert/setSuccessMsg', 'account.updateSuccess', { root: true })
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' })
    }
  },
  cancelModification ({ dispatch, commit }) {
    try {
      commit('cancelModification')
      dispatch('alert/setInfoMsg', 'account.dataRollback', { root: true })
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' })
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
