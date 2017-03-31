<script>
import { Radar } from 'vue-chartjs'
// export default Radar.extend({
//
//   mounted () {
//     // 下記データでグラフをレンダリング
//     this.renderChart({
//       labels: ['カフェ', '広報', '会場', 'ステージ', '運動会'],
//       datasets: [
//         {
//           label: '適部署チャート',
//           backgroundColor: '#f87979',
//           data: [20, 30, 40, 0, 10]
//         }
//       ]
//     })
//   }
// })

export default Radar.extend({
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})

</script>
