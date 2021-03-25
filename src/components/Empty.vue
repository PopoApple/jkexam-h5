<template>
  <div class="Empty" :style="{ height }">
    <div class="inner">
      <Icon name="other-pay" color="#ccc" size="40" />
      <div class="text">{{waringText}}</div>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'

  export default {
    components: { Icon },
    props: {
      height: {
        type: String,
        default: '200px',
      },
      waringText: {
        type: String,
        default: '暂无数据'
      }
    },
  }
</script>

<style lang="less" scoped>
.Empty {
  display: flex;
  align-items: center;
  justify-content: center;
  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .text {
    color: #ccc;
    font-size: @fontSizeL;
    margin-top: 5px;
  }
}
</style>
