import VueRouter from 'vue-router'
const router = new VueRouter()

export default {
  answer (state, ans) {
    if (state.answers.length < state.data.length) {
      //選ばれた選択肢をpush
      state.answers.push(ans.id)
    }
    //idを追加していく,3問目が終わったらelseへ
    if (state.questId < 10) {
      state.item = state.data[state.questId]
      state.point += state.data[state.questId].point
      state.questId++
    } else {
        //idが加算されきったら、resultへ
        state.result = state.results.filter((item) => {
        if (item.choice.toString() === state.answers.toString()) {
          return item
        }
      })
      //resultに移動
      router.push('result')
    }
  },
  //stateを空にする処理
  initialize (state) {
    state.answers = []
    state.questId = 0
  }
}
