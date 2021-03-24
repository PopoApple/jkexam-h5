<template>
  <div class="Statistics">
    <Tabs v-model="active">
      <Tab title="加入返佣统计">
        <RakeBack v-if="active === 0" />
      </Tab>
      <Tab title="邀请用户统计">
        <InvitationUser v-if="active === 1" />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
import RakeBack from './RakeBack'
import InvitationUser from './InvitationUser'
import { apiList, apiGet } from '@/api/statistics'

export default {
  components: { Tab, Tabs, RakeBack, InvitationUser },
  data() {
    return {
      active: 0,
    };
  },
  mounted() {
    apiGet().then(res => {
      console.log('apiGet:', res)
    })
    apiList().then(res => {
      console.log('apiList:', res)
    })
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
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

<style lang="less">
.Statistics {
  padding: 10px;
  background: @bgColor;
  .van-tabs--line .van-tabs__wrap {
    border-radius: @borderRadiusL;
  }
}
</style>

