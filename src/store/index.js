import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import constants from '../constants'

Vue.use(Vuex)

const state = {
  questId: 0,
  answers: [],
  result: {},
  data: constants.data,
  results: constants.results
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
