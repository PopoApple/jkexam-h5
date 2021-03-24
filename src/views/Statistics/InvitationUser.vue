<template>
  <div class="InvitationUser">
    <div class="header">
      <!-- <div class="headerIcon">
        <Icon name="friends" color="#fff" size="16" />
      </div> -->
      <div class="headerLabel">用户总数：</div>
      <div class="headerValue">12</div>
      <!-- <div class="headerUnit">人</div> -->
    </div>
    <div class="card list">
      <List
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <Cell v-for="item in list" :key="item" :title="`${item} 邀请记录标题`" value="内容" label="描述信息" center />
      </List>
    </div>
  </div>
</template>

<script>
import { List, Cell, Icon } from 'vant'

export default {
  components: { List, Cell, Icon },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
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
.InvitationUser {
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
  }
  // .headerIcon {
  //   position: relative;
  //   top: 2px;
  // }
  .headerLabel {
    font-size: @fontSizeS;
    // margin-left: 3px;
  }
  .headerValue {
    // font-weight: bold;
    font-size: @fontSizeHeadL;
    line-height: @lineHeightHeadL;
  }
  .headerUnit {
    font-size: @fontSizeS;
    margin-left: 5px;
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
}
</style>

