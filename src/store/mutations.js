import VueRouter from 'vue-router'
const router = new VueRouter()

export default {
  answer (state, ans) {
    if (state.answers.length + 1 < state.data.length) {

      state.answers.push(ans.id)

      for(var i = 0 ; i < 7 ; i++){
        state.points[i] += ans.point[i]
        console.log(state.points[i])
      }
      state.questId++

    } else {
      var max= state.points.indexOf(Math.max.apply(null,state.points))
      console.log(state.points)
      console.log(max)
      //resultに移動
      router.push('result')
    }
  },
  //stateを空にする処理
  initialize (state) {
    state.answers = []
    state.points = [0, 0, 0, 0, 0, 0, 0]
    state.questId = 0
  }
}
