<template>
  <div class='wrapper'>
    <div class='title-container'>
      <h2><img class='title-img' src='asset/img/logo-img.png'></h2>
      <p class='mb20'>10問の問いに答えていただいて<br>
        あなたに合う部署を分析します。</p>
      <div class='btn bg-orange'>
        <a @click="onInitState">
          <router-link class='btn-next' tag="div" to="/question">スタート！</router-link>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
const top = {
  name: 'top',
  created () {
    this.onInitState()
  },
  methods: mapActions([
    'onInitState'
  ])
}
export default top
</script>

<style scoped>
  .wrapper {
    position: relative;
    height: 100vh;
  }

  .title-container {
    position: absolute;
    top: 42%;
    left: 10%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  h2 {
    font-weight: 200;
    margin-bottom: 20px;
  }

  .title-img {
    width: 80vw;
  }

  .mb20 {
    margin-bottom: 20px;
  }

</style>
