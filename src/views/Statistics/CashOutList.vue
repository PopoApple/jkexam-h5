<template>
  <div class="CashOutList">
    <Cell v-for="item in list" :key="item" :title="`${item} 提现记录标题`" value="内容" label="描述信息" center />
  </div>
</template>

<script>
import { Cell } from 'vant'

export default {
  components: { Cell },
  props: {
    list: Array,
    totalPage: Number,
    listLoading: Boolean,
  },
}
</script>

<style lang="less">
  .CashOutList {
    .van-cell {
      background: transparent;
    }
  }
</style>

