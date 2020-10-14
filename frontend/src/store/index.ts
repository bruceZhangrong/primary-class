import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showBottomBar: true
  },
  mutations: {
    UPDATE_BOTTOM_BAR (state, status) {
      state.showBottomBar = status
    }
  },
  actions: {
    updateBottomBar ({commit}, status) {
      commit('UPDATE_BOTTOM_BAR', status)
    }
  },
  modules: {
  }
})
