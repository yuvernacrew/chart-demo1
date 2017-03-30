import { ANSWER, INIT } from './mutation-types'

export default {
  onClickAnswer: ({ commit }, answer) => {
    commit(ANSWER, answer)
  },
  onInitState: ({ commit }) => {
    commit(INIT)
  }
}
