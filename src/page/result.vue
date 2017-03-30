<template>
  <div class='wrapper'>
    <p>あなたにオススメな部署は...</p>
    <div class='mb40' v-for='result in $store.state.result'>
      <h2>{{result.item.name}}</h2>
      <p>{{result.item.discription}}</p>
      <!-- <commit-chart :data="result.item.chart"></commit-chart> -->
      <commit-chart></commit-chart>
    </div>
    <router-link class='btn btn-primary btn-lg btn-block' tag="div" to="/">はじめからやり直す</router-link>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import CommitChart from '../components/CommitChart'

  const result = {
    name: 'result',
    beforeRouteEnter (route, redirect, next) {
      if (redirect.path === '/question') {
        //questionからのredirectだったら次
        next()
      } else {
        //それ以外はtopへ
        window.location.href = '/'
      }
    },
    methods: mapActions([
      //action.js
      'onInitState'
    ])
  }

  export default {
    result,
    //chartの描画
    components: {
      CommitChart
    }
  }
</script>
<style scoped>
h2 {
    margin-top: 40px;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid #aaa;
    margin-bottom: 20px;
  } 

.mb20 {
  margin-bottom: 40px;
}

</style>
