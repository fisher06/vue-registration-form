import axios from 'axios'

const state = {
  user: {}
}

const getters = {
}

const mutations = {
  setSourceData (state, data) {
    state.user = data
  }
}

const actions = {
  async fetchSourceData ({ commit, rootState, dispatch, state }, data) {
    try {
      // get products data as the way we used for API
      const res = await axios.get('/static/user.json')
      const sourceData = res.data

      commit('setSourceData', sourceData)
    } catch (e) {
      // eslint-disable-next-line no-new
      new Error({ statusCode: 404, message: 'No Data' })
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
