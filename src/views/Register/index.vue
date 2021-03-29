<template>
  <div class="Register">
    <h1>注册页面</h1>
  </div>
</template>

<script>

export default {
  mounted() {
    gdt('track', 'VIEW_CONTENT_REGISTER')  //上报行为数据，浏览注册页面
  },
}
</script>

