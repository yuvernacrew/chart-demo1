<template>
  <div class='wrapper'>
    <div class='title-container'>
      <h2>適部署チャート</h2>
      <div class='btn bg-orange'>
        <a @click="onInitState">
          <router-link class='btn-next' tag="div" to="/question">スタート！</router-link>
        </a>
      </div>
    </div>
  </h2>
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
  h2 {
    font-weight: 200;
    margin-bottom: 20px;
  }

  .title-container {
    margin-top: 35vh;
  }

</style>
