<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/activity">activity</router-link> |
      <router-link to="/register">register</router-link> |
      <router-link to="/">statistics</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
import http from '@/api/http'

export default {
  created() {
    window.JKEXAM_H5 = this
    //JKEXAM_H5.$store.state.account=1333333333
  },
}
</script>

<style lang="less">
@import url(../../assets/styles/global.less);
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  color: @fontColor;
  font-size: @fontSize;
}
</style>
