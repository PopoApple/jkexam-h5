<template>
  <div class="bg-img wrap">
    <h1 class="title">邀请赚佣金</h1>
    <div class="bg-img pic"></div>
    <div class="card">
      <div class="card-inner">
        <div class="bg-img card-title">活动规则说明</div>
        <div class="card-content">
          <div class="rule-item" v-for="(item, index) in rules" :key="index">
            <div class="bg-img item-no rule-item-no">{{ index + 1 }}</div>
            <div class="rule-item-text">{{ item }}</div>
          </div>
        </div>
        <button class="bg-img btn">立即邀请</button>
      </div>
    </div>
    <div class="card">
      <div class="card-inner">
        <div class="bg-img card-title">三步立享收益</div>
        <div class="card-content card-content-steps">
          <div class="step-item" v-for="(item, index) in steps" :key="index">
            <div class="step-item-icon-wrap">
              <img class="step-item-icon" :src="item.icon" />
              <div class="bg-img item-no step-item-no">{{ index + 1 }}</div>
            </div>
            <div class="step-item-text">{{ item.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iconStep1 from './images/icon-step1.png'
import iconStep2 from './images/icon-step2.png'
import iconStep3 from './images/icon-step3.png'

export default {
  data() {
    return {
      rules: [
        '活动时间：自活动发布起长期有效',
        '参与方式：打开建考APP，点击“我的”页面中的邀请好友，分享邀请页面给好友。',
        '奖励说明：没邀请成功一名新用户注册并且用户成功购买科目，可获得购买科目金额5%的佣金，佣金可提现可抵扣。',
      ],
      steps: [
        { icon: iconStep1, text: '分享邀请给好友，好友在邀请页面完成注册' },
        { icon: iconStep2, text: '好友登录建考APP，完成科目购买' },
        { icon: iconStep3, text: '邀请者获得好友购买科目金额5%佣金，可提现或抵扣' },
      ],
    }
  },
}
</script>

<style lang="less">
  body {
    background: #ff7c04;
  }
  .wrap {
    width: 100vw;
    background-image: url(./images/bg.png);
    padding-bottom: 30px;
    position: relative;
  }
  .title {
    margin: 0;
    color: #fff;
    text-align: center;
    font-size: 14vw;
    padding: 40px 0 0;
    text-shadow: 3px 4px 2px rgba(0,0,0,.2);
    font-weight: bold;
    font-style: italic;
    letter-spacing: -3px;
  }
  .pic {
    width: 92.5vw;
    height: 60vw;
    background-image: url(./images/pic.png);
    margin: 0 auto;
    position: relative;
    top: -4vw;
  }
  .card {
    width: 90vw;
    margin: 0 auto;
    background: rgba(255, 50, 0, .6);
    color: #ec4300;
    border-radius: 16px;
    padding: 7px;
    .card-inner {
      padding: 20px;
      border-radius: 16px;
      background: #f8e4c8;
      position: relative;
    }
    .card-title {
      position: absolute;
      width: 56.875vw;
      height: 10.625vw;
      line-height: 10.625vw;
      top: -5.3125vw;
      left: 50%;
      margin-left: -28.4375vw;
      background-image: url(./images/bg-title.png);
      color: #fff;
      text-align: center;
      font-size: 20px;
    }
    .card-content {
      padding-top: 20px;
    }
    .rule-item {
      display: flex;
      align-items: center;
    }
    .rule-item + .rule-item {
      margin-top: 12px;
    }
    .item-no {
      background-image: url(./images/bg-li.png);
      text-align: center;
      color: #fff;
    }
    .rule-item-no {
      width: 30px;
      height: 30px;
      line-height: 30px;
      background-position: 1px 1px;
      font-size: 16px;
      margin-right: 10px;
    }
    .rule-item-text {
      flex: 1;
      line-height: 18px;
    }
    .btn {
      width: 53.75vw;
      height: 11.25vw;
      line-height: 11.25vw;
      color: #fff;
      text-align: center;
      background-image: url(./images/bg-btn.png);
      margin: 16px auto 0;
      display: block;
      font-size: 20px;
    }
    .card-content-steps {
      display: flex;
      justify-content: space-between;
      padding-top: 25px;
    }
    .step-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;
    }
    .step-item-icon-wrap {
      position: relative;
    }
    .step-item-no {
      position: absolute;
      right: -10px;
      bottom: 10px;
      width: 22px;
      height: 22px;
      line-height: 22px;
      font-size: 14px;
    }
    .step-item-icon {
      height: 50px;
      margin-bottom: 10px;
    }
  }
  .card + .card {
    margin-top: 30px;
  }
</style>

