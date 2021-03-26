<template>
  <div class="InvitationUser">
    <div class="header">
      <!-- <div class="headerIcon">
        <Icon name="friends" color="#fff" size="16" />
      </div> -->
      <div class="headerLabel">用户总数：</div>
      <div class="headerValue">{{totalUser}}</div>
      <!-- <div class="headerUnit">人</div> -->
    </div>
    <div class="card list">
      <template v-if="list.length > 0">
        <Cell v-for="item in list" :key="item" :title="`${item} 邀请记录标题`" value="内容" label="描述信息" center />
      </template>
      <Empty v-else height="calc(100vh - 176px)" />
    </div>
    <ScrollBottomLoadMore :totalpage="totalPage" :loading="listLoading" @update="handleScrollBottomLoadMore" />
  </div>
</template>

<script>
import { Cell, Icon } from 'vant'
import Empty from '@/components/Empty'
import ScrollBottomLoadMore from '@/components/ScrollBottomLoadMore'
import { apiList } from '@/api/statistics'

export default {
  components: { Cell, Icon, Empty, ScrollBottomLoadMore },
  data() {
    return {
      totalUser: 0,
      list: [],
      page: 0,
      totalPage: 0,
      listLoading: false,
    }
  },
  computed: {
    account() {
      return this.$store.state.account
    }
  },
  watch: {
    account(newVal, oldVal) {
      if (newVal) {
        this.loadList()
      }
    }
  },
  mounted() {
    this.$toast.loading({ duration: 0, forbidClick: true })
    if (this.account) {
      this.loadList()
    }
  },
  methods: {
    loadList() {
      apiList({ page: 1 }).then(res => {
        setTimeout(() => {
          this.$toast.clear()
          if (res.code === 200) {
            this.list = res.data.list.map(d => `${this.account} 1 ${d.id}`)
            this.totalPage = res.data.totalPages
            this.page = 1
            this.totalUser = 12
          } else {
            throw new Error()
          }
        }, 1000)
      }).catch(e => {
        this.$toast.clear()
        this.$toast.fail('数据加载失败')
      })
    },
    handleScrollBottomLoadMore() {
      if (this.listLoading || this.page >= this.totalPage) {
        return
      } 
      this.listLoading = true
      let page = this.page + 1
      apiList({ page }).then(res => {
        setTimeout(() => {
          this.listLoading = false
          if (res.code === 200) {
            this.list = [...this.list, ...res.data.list.map(d => `${this.account} ${page} ${d.id}`)]
            this.page = page
          } else {
            throw new Error()
          }
        }, 1000)
        
      }).catch(e => {
        this.listLoading = false
        this.$toast.fail('数据加载失败')
      })
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

