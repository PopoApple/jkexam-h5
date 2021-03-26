<template>
  <div class="CommissionList">
    <Cell v-for="item in list" :key="item" :title="`${item} 佣金记录标题`" value="内容" label="描述信息" center />
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
  .CommissionList {
    .van-cell {
      background: transparent;
    }
  }
</style>

