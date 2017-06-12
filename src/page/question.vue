<template>
  <div class='wrapper'>
      <div class='question'>
        Q{{ $store.state.questId + 1}}
        {{$store.state.data[$store.state.questId].question.text}}
      </div>
      <div class='btn btn-default btn-lg btn-block answer-btn' v-for='answer in $store.state.data[$store.state.questId].answers'>
        <a @click="onClickAnswer(answer)">{{answer.text}}</a>
        <p>{{$store.state.data[$store.state.questId].answer.point}}</p>
      </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex'
import VueRouter from 'vue-router'
const router = new VueRouter()

const question = {
  name: 'question',
  beforeRouteEnter (route, redirect, next) {
    if (redirect.path === '/') {
      next()
    } else {
      router.push('/')
    }
  },
  methods: mapActions([
    'onClickAnswer'
  ])
}
export default question
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .question {
    margin-top: 160px;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid #aaa;
    margin-bottom: 20px;
  }
  .answer-btn {
    margin-bottom: 10px;
    font-weight: 200;
  }

  .answer-btn > a {
    color: #555;
    text-decoration: none;
  }

</style>
