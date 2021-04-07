<template>
  <div class="Activity">
    <!-- <div class="circle light-circle circle-bg-1"></div>
    <div class="circle light-circle circle-bg-2"></div>
    <div class="circle light-circle circle-bg-3"></div>
    <div class="circles">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
      <div class="circle circle-4"></div>
      <div class="circle light-circle circle-5"></div>
      <div class="circle light-circle circle-6"></div>
    </div>
    <button class="btn-rules" @click="rulesModalShow=true">活动详细规则</button>
    <h1 class="title title-1">买建考学习送大礼</h1>
    <h2 class="title title-2">双人游惊喜大派送</h2>
    <div class="header-btns">
      <button class="bg-img btn-login"></button>
      <button class="bg-img btn-register"></button>
    </div>

    <div class="sec-title">邀请好友助力可获得额外抽奖券</div>
    <div class="card card-help">
      <div class="circle light-circle card-help-circle"></div>
      <div class="card-header"></div>
      <div class="card-body">
        <div class="card-content card-content-help">
          <div class="info">已邀请<em>3人</em>，再邀请<em>2人</em>即可获额外抽奖券</div>
          <div class="help-btns">
            <div 
              class="help-btn" 
              v-for="item in helpersComputed" 
              :key="item.id"
            >
              <div 
                class="help-btn-circle"
                :class="{ 'bg-img': item.avator }" 
                :style="item.avator ? { 'background-image': `url(${item.avator})` } : null" 
              >
                <i class="help-btn-icon" v-if="!item.avator" />
              </div>
              <div class="ellipsis help-btn-text">{{ item.name || '待邀请' }}</div>
            </div>
          </div>
          <button class="btn-invitation-help">邀请好友助力</button>
          <button class="btn-invitation-detail" @click="invaitationDetailModalShow=true">邀请详情</button>
        </div>
        <div class="card-hole card-hole-help-1"></div>
        <div class="card-hole card-hole-help-2"></div>
        <div class="bg-img card-help-tape"></div>
      </div>
    </div>

    <div class="sec-title">奖品展示</div>
    <div class="sec-prize">
      <template v-for="(item, index) in prizes" >
        <div class="sec-prize-item" :key="item.id">
          <div class="sec-prize-name">{{ item.name }}</div>
          <div class="sec-prize-desc">{{ item.desc }}</div>
          <div class="sec-prize-count">{{ item.count }}</div>
        </div>
        <div v-if="index !== prizes.length - 1" :key="'split_' + item.id" class="sec-prize-split"></div>
      </template>
    </div>

    <div class="sec-title">奖券排行</div>
    <div class="card card-ranking">
      <div class="circle light-circle card-ranking-circle"></div>
      <div class="card-header"></div>
      <div class="card-body">
        <div class="card-content card-content-ranking">
          <div class="ranking-row ranking-header">
            <div class="ranking-col-rank">名次</div>
            <div class="ranking-col-name">姓名</div>
            <div class="ranking-col-count">抽奖券累计数</div>
          </div>
          <div class="ranking-row ranking-body" v-for="(item, i) in rankings" :key="item.id">
            <div class="ranking-col-rank">{{ i + 1 }}</div>
            <div class="ranking-col-name ellipsis">{{ item.name }}</div>
            <div class="ranking-col-count"><span class="ranking-count">{{ item.count }}</span>次</div>
          </div>
        </div>
      </div>
    </div> 
    <ModalInvaitationDetail :show="invaitationDetailModalShow" @input="e => invaitationDetailModalShow = e" />
    <ModalRules :show="rulesModalShow" @input="e => rulesModalShow = e" /> -->

    <button @click="handleGetWxUserInfo">获取用户微信信息</button>
    <wx-open-launch-app
      id="launch-btn"
      appid="wx49f566959c3a7e7e"
      extinfo="your-extinfo"
    >
      <script type="text/wxtag-template">
        <style>.btn { padding: 12px }</style>
        <button class="btn">打开APP</button>
      </script>
    </wx-open-launch-app>

  </div>
</template>

<script>
import { getQueryVariable, getClientType } from '@/utils'
import { DOWNLOAD_URL_ANDROID, DOWNLOAD_URL_IOS } from '@/config/constants'
import ModalInvaitationDetail from './ModalInvaitationDetail'
import ModalRules from './ModalRules'
const clientType = getClientType()

export default {
  components: { ModalInvaitationDetail, ModalRules },
  data() {
    return {
      helpers: [
        { id: '1', name: '曹小伟', avator: 'https://www.conschina.com/_nuxt/img/logo.e516e94.png' },
        { id: '2', name: '大张伟', avator: 'https://www.conschina.com/_nuxt/img/logo.e516e94.png' },
        { id: '3', name: '刘奕博可就是觉得卡拉斯科了', avator: 'https://www.conschina.com/_nuxt/img/logo.e516e94.png' },
      ],
      prizes: [
        { id: '1', name: '一等奖', desc: '旅游年卡', count: '限量3个' },
        { id: '2', name: '二等奖', desc: '旅游年卡', count: '限量3个' },
        { id: '3', name: '三等奖', desc: '旅游年卡', count: '限量3个' },
      ],
      rankings: [
        { id: '1', name: '李思思', count: 30 },
        { id: '2', name: '李思思', count: 30 },
        { id: '3', name: '李思思', count: 30 },
        { id: '4', name: '李思思', count: 30 },
        { id: '5', name: '李思思', count: 30 },
        { id: '6', name: '李思思', count: 30 },
        { id: '7', name: '李思思', count: 30 },
        { id: '8', name: '李思思', count: 30 },
      ],
      invaitationDetailModalShow: false,
      rulesModalShow: false,
    }
  },
  computed: {
    helpersComputed() {
      let emptyCount = 5 - this.helpers.length % 5
      return [ ...this.helpers, ...Array.apply(null, { length: emptyCount }).map((d ,i) => {
        return { id: 'empty_' + i }
      })]
    }
  },
  mounted() {
    //gdt('track', 'VIEW_CONTENT')  //上报行为数据，浏览活动页面
    console.log('isAPP:', clientType.isAPP)
    console.log('isWeixin:', clientType.isWeixin)
    console.log('isAndroid:', clientType.isAndroid)
    console.log('isIOS:', clientType.isIOS)
    const phone = getQueryVariable('phone')
    console.log('phone:', phone)
    var btn = document.getElementById('launch-btn')
    if (btn) {
      btn.addEventListener('click', function (e) {
        console.log('-------------launch-btn click')
      })
      btn.addEventListener('ready', function (e) {
        console.log('-------------wx-open-launch-app ready')
      })
      btn.addEventListener('launch', function (e) {
        console.log('-------------wx-open-launch-app launch')
      })
      btn.addEventListener('error', function (e) {
        console.log('-------------wx-open-launch-app error', e)
        console.log('e.detail:', e.detail)
        console.log('e.errMsg:', e.errMsg)
        if (e.errMsg === 'launch:fail') {
          if (clientType.isAndroid) {
            location.href = DOWNLOAD_URL_ANDROID
          } else if (clientType.isIOS) {
            location.href = DOWNLOAD_URL_IOS
          }
        }
      })
    }
  },
  methods: {
    handleGetWxUserInfo() {
      const appid = 'wx49f566959c3a7e7e'
      let redirect_uri = encodeURIComponent('http://bbs.jnpasture.com/wx/v1/web/info')
      const state = encodeURIComponent('/front.html')
      let url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=snsapi_userinfo&state=${state}#wechat_redirect`
      location.href = url
    }
  },
}
</script>

<style lang="less">
  // @import url(./styles/index.less);
</style>

