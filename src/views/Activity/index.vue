<template>
  <div class="Activity">
    <h1>活动页面</h1>
    <button @click="handleGetWxUserInfo">获取用户微信信息</button>
    <wx-open-launch-app
      id="launch-btn"
      appid="your-appid"
      extinfo="your-extinfo"
    >
      <script type="text/wxtags-template">
        <style>.btn { padding: 12px }</style>
        <button class="btn">打开APP</button>
      </script>
      <!-- <template>
        <style>.btn { padding: 12px }</style>
        <button class="btn">打开APP</button>
      </template> -->
    </wx-open-launch-app>
  </div>
</template>

<script>
import { getQueryVariable, getClientType } from '@/utils'
import { DOWNLOAD_URL_ANDROID, DOWNLOAD_URL_IOS } from '@/config/constants'
const clientType = getClientType()

export default {
  mounted() {
    gdt('track', 'VIEW_CONTENT')  //上报行为数据，浏览活动页面
    console.log('isAPP:', clientType.isAPP)
    console.log('isWeixin:', clientType.isWeixin)
    console.log('isAndroid:', clientType.isAndroid)
    console.log('isIOS:', clientType.isIOS)
    const phone = getQueryVariable('phone')
    console.log('phone:', phone)
    var btn = document.getElementById('launch-btn')
    btn.addEventListener('launch', function (e) {
      console.log('wx-open-launch-app success')
    })
    btn.addEventListener('error', function (e) {
      console.log('wx-open-launch-app fail', e.detail)
      if (e.errMsg === 'launch:fail') {
        if (clientType.isAndroid) {
          location.href = DOWNLOAD_URL_ANDROID
        } else if (clientType.isIOS) {
          location.href = DOWNLOAD_URL_IOS
        }
      }
    })

  },
  methods: {
    handleGetWxUserInfo() {
      const appid = 'wxf0e81c3bee622d60'
      let redirect_uri = encodeURIComponent(`https://pk.xxx.cn/pk/wechat/getUserInfoCallback`)
      const state = encodeURIComponent('/')
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
      location.href = url
    }
  },
}
</script>

