<template>
  <div class='wrapper'>
    <p>あなたにオススメな部署は...</p>

    <h2>{{$store.state.result.name}}</h2>
    <p>{{$store.state.result.discription}}</p>

    <commit-chart
      :data="{
        labels: ['飲食', 'ステージ', '会場', '広報', 'PA', '運動会','幹部'],
        datasets: [
          {
            backgroundColor: '#f0831e',
            data: $store.state.points
          }
        ]
      }"
      :options = "{
        legend: {
          display: false
        },
        scale: {
          scaleLabel: false,
          ticks: { //http://www.chartjs.org/docs/#scales-radial-linear-scale
            stepSize: 5, // 目盛の間隔
            max: 40, //最大値
            min: 10,
            beginAtZero: false,
           }
        }
      }"
      ></commit-chart>

    <router-link class='btn btn-primary btn-lg btn-block' tag="div" to="/">はじめからやり直す</router-link>
  </div>
</template>
<script src="https://unpkg.com/vue-chartjs@2.6.0/dist/vue-chartjs.full.min.js"></script>
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
    margin-top: 20px;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 10px;
    border-bottom: 1px solid #aaa;
    margin-bottom: 20px;
  }

.mb20 {
  margin-bottom: 20px;
}

</style>
