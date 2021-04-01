<template>
  <div class="bg-img wrap">
    <i class="bg-img icon-info" @click="modalShow = true" />
    <!-- <img :src="img" /> -->
    <h1 class="title">轻松考试神器</h1>
    <div class="bg-img btn-register"></div>
    <div class="card">
      <div class="bg-img card-top"></div>
      <div class="card-content">
        <div class="card-main-content">
          <div class="card-title">
            点击认识建考
          </div>
          <div class="info-item" v-for="item in infos" :key="item">
            <div class="info-item-icon"></div>
            <div class="info-item-text">{{ item }}</div>
          </div>
        </div>
        <div class="bg-img btns">
          <button class="btn-join">点击参与</button>
          <button class="btn-activity">最新抽奖活动</button>
        </div>
        <div class="downloads">
          <a :href="DOWNLOAD_URL_ANDROID" class="bg-img btn-download btn-download-android"></a>
          <a :href="DOWNLOAD_URL_IOS" class="bg-img btn-download btn-download-ios"></a>
        </div>
      </div>
      <div class="bg-img card-bottom"></div>
    </div>
    <ModalInfo :show="modalShow" @input="e => modalShow = e" />
  </div>
</template>

<script>
import ModalInfo from './ModalInfo'
import { DOWNLOAD_URL_ANDROID, DOWNLOAD_URL_IOS } from '@/config/constants'

export default {
  components: { ModalInfo },
  data() {
    return {
      // img,
      infos: [
        '题库丰富，解析全面',
        '碎片练习，让您不错过学习的每一分钟',
        '能力检测，智能生成试卷，不断挑战自我',
      ],
      modalShow: false,
      DOWNLOAD_URL_ANDROID,
      DOWNLOAD_URL_IOS,
    }
  },
  mounted() {
    gdt('track', 'VIEW_CONTENT_REGISTER')  //上报行为数据，浏览注册页面
  },
}
</script>

<style lang="less">
  body {
    background: #5d86fe;
  }
  .wrap {
    width: 100vw;
    background-image: url(./images/bg.png);
    padding-bottom: 30px;
  }
  .icon-info {
    position: absolute;
    right: 10px;
    top: 54px;
    width: 24px;
    height: 24px;
    background-image: url(./images/icon-info.png);
  }
  .title {
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 13vw;
    padding: 40px 0 0;
    text-shadow: 3px 4px 2px rgba(0,0,0,.2);
    font-weight: bold;
  }
  .btn-register {
    width: 48.875vw;
    height: 26vw;
    background-image: url(./images/btn-register.png);
    margin: 5px auto 0;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      right: 20px;
      bottom: 0;
      width: 11.71875vw;
      height: 8.59375vw;
      background-position: 0 0;
      background-size: 100%;
      background-repeat: no-repeat;
      background-image: url(./images/hand.png);
    }
  }
  .card {
    width: 87.5vw;
    margin: 15px auto 0;
    .card-top {
      background-image: url(./images/bg-card-top.png);
      width: 100%;
      height: 9.375vw;
      position: relative;
      top: 1px;
    }
    .card-content {
      background-position: 0 0;
      background-size: 100%;
      background-image: url(./images/bg-card.png);
      background-repeat: repeat-y;
      padding: 30px 30px 30px 20px;
    }
    .card-main-content {
      background: #e6eefb;
      position: relative;
      padding: 30px 20px 10px;
    }
    .card-title {
      position: absolute;
      width: 160px;
      height: 40px;
      line-height: 40px;
      top: -20px;
      left: 50%;
      margin-left: -80px;
      background: #5b7aec;
      color: #fff;
      text-align: center;
      font-size: 20px;
    }
    .info-item {
      color: #7aa6f9;
      position: relative;
      line-height: 30px;
      font-size: 18px;
      display: flex;
      .info-item-icon {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fdc441;
        margin-right: 10px;
        display: inline-block;
        position: relative;
        top: 6px;
      }
      .info-item-text {
        flex: 1;
      }
    }
    .card-bottom {
      background-image: url(./images/bg-card-bottom.png);
      width: 100%;
      height: 9.375vw;
      position: relative;
      top: -1px;
    }
    .btns{
      background-image: url(./images/btn.png);
      width: 67.34375vw;
      height: 10.9375vw;
      line-height: 10.9375vw;
      margin: 10px auto 0;
      display: flex;
      font-size: 18px;
      padding-left: 7vw;
      .btn-join {
        color: #5b7aec;
      }
      .btn-activity {
        color: #fff;
        margin-left: 7.5vw;
      }
    }
    .downloads {
      display: flex;
      justify-content: center;
      margin-top: 30px;
      .btn-download {
        width: 17.1875vw;
        height: 17.1875vw;
        &.btn-download-android {
          background-image: url(./images/download-android.png);
        }
        &.btn-download-ios {
          background-image: url(./images/download-ios.png);
          margin-left: 8vw;
        }
      }
    }
  }
</style>