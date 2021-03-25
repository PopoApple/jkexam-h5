<template>
  <List
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <Cell v-for="item in list" :key="item" :title="`${item} 提现记录标题`" value="内容" label="描述信息" center />
  </List>
</template>

<script>
import { List, Cell } from 'vant'

export default {
  components: { List, Cell },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  computed: {
    account() {
      return this.$store.state.account
    }
  },
  watch: {
    account(newVal, oldVal) {
      if (newVal) {
        this.onLoad()
      }
    }
  },
  methods: {
    onLoad() {
      if (!this.account) {
        return
      }
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(`${this.account} ${this.list.length + 1}`);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
}
</script>

