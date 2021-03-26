<template>
  <div class="Activity">
    <h1>活动页面</h1>
  </div>
</template>

<script>

const isWeixin = () => {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return true
  } else {
    return false
  } 
}

export default {
  mounted() {
    console.log('isWeixin:', isWeixin())
  },
}
</script>

