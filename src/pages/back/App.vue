<template>
  <div id="app">
    <div class="nav">
      <router-link to="/rakeBack">加入返佣统计</router-link>
      <router-link to="/invitationUser">邀请用户统计</router-link>
    </div>
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
  padding: 10px;
  background: @bgColor;

  .nav {
    display: flex;
    justify-content: space-around;
    background: #fff;
    padding: 4px 10px 0;
    border-radius: @borderRadiusL;
    a {
      color: @fontColorLight;
      padding: 10px 0;
      &.router-link-active {
        color: @fontColor;
        font-weight: bold;
        border-bottom: 3px solid @green;
      }
    }
  }
}
</style>
