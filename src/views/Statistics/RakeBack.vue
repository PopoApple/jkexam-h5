<template>
  <div class="RakeBack">
    <div class="header">
      <Icon name="question-o" color="#fff" size="16" class="headerIcon" @click="modalShow=true" />
      <div class="headerLabel">佣金总额：</div>
      <!-- <div class="headerUnit">¥</div> -->
      <div class="headerValue">¥ 88.12</div>
    </div>
    <div class="tabs">
      <div class="tab" :class="{tabActive: tabKey === 0}" @click="tabKey = 0">佣金记录</div>
      <div class="tab" :class="{tabActive: tabKey === 1}" @click="tabKey = 1">提现记录</div>
    </div>
    <div class="card list">
      <CommissionList v-if="tabKey === 0" />
      <CashOutList v-if="tabKey === 1" />
    </div>
    <ModalRules :show="modalShow" @input="e => modalShow = e" />
  </div>
</template>

<script>
import { Icon } from 'vant'
import CommissionList from './CommissionList'
import CashOutList from './CashOutList'
import ModalRules from './ModalRules'

export default {
  components: { Icon, CommissionList, CashOutList, ModalRules },
  data() {
    return {
      tabKey: 0,
      modalShow: false,
    }
  },
}
</script>

<style lang="less">
.RakeBack {
  .header {
    margin-top: 10px;
    border-radius: @borderRadiusL;
    background: @green;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    color: #fff;
    // flex-direction: column;
    position: relative;
  }
  .headerIcon {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .headerLabel {
    font-size: @fontSizeS;
    // margin-left: 3px;
  }
  .headerValue {
    // font-weight: bold;
    font-size: @fontSizeHeadL;
    line-height: @lineHeightHeadL;
    margin-left: 3px;
  }
  .headerUnit {
    font-size: @fontSizeS;
  }
  .card {
    border-radius: @borderRadiusL;
    background: #fff;
  }
  .list {
    margin-top: 10px;
    .van-cell {
      background: transparent;
    }
  }
  .tabs {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    .tab {
      padding: 6px 10px;
      border-radius: @borderRadius;
    }
    .tabActive {
      color: @green;
      // font-weight: bold;
      // color: #fff;
      // background: @green;
    }
  }
}
</style>

