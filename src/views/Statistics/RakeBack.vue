<template>
  <div class="RakeBack">
    <div class="header">
      <Icon name="question-o" color="#fff" size="16" class="headerIcon" @click="modalShow=true" />
      <div class="headerLabel">佣金总额：</div>
      <!-- <div class="headerUnit">¥</div> -->
      <div class="headerValue">¥ {{ totalMoney }}</div>
    </div>
    <div class="tabs">
      <div class="tab" :class="{tabActive: tabKey === 0}" @click="() => handleTabClick(0)">佣金记录</div>
      <div class="tab" :class="{tabActive: tabKey === 1}" @click="() => handleTabClick(1)">提现记录</div>
    </div>
    <div class="card list">
      <CommissionList v-if="tabKey === 0 && list_0.length > 0" :list="list_0" />
      <CashOutList v-if="tabKey === 1 && list_1.length > 0" :list="list_1" />
      <Empty v-if="(tabKey === 0 && list_0.length === 0) || (tabKey === 1 && list_1.length === 0)" height="calc(100vh - 218px)" />
    </div>
    <ScrollBottomLoadMore :totalpage="currentTotalPage" :loading="currentListLoading" @update="handleScrollBottomLoadMore" />
    <ModalRules :show="modalShow" @input="e => modalShow = e" />
  </div>
</template>

<script>
import { Icon } from 'vant'
import Empty from '@/components/Empty'
import ScrollBottomLoadMore from '@/components/ScrollBottomLoadMore'
import CommissionList from './CommissionList'
import CashOutList from './CashOutList'
import ModalRules from './ModalRules'
import { apiList, apiGet } from '@/api/statistics'

export default {
  components: { Icon, Empty, ScrollBottomLoadMore, CommissionList, CashOutList, ModalRules },
  data() {
    return {
      totalMoney: 0,
      tabKey: 0,
      modalShow: false,
      list_0: [],
      page_0: 0,
      totalPage_0: 0,
      listLoading_0: false,
      list_1: [],
      page_1: 0,
      totalPage_1: 0,
      listLoading_1: false,
    }
  },
  computed: {
    account() {
      return this.$store.state.account
    },
    currentTotalPage() {
      return this[`totalPage_${this.tabKey}`]
    },
    currentListLoading() {
      return this[`listLoading_${this.tabKey}`]
    }
  },
  watch: {
    account(newVal, oldVal) {
      if (newVal) {
        this.loadData()
      }
    }
  },
  mounted() {
    this.$toast.loading({ duration: 0, forbidClick: true })
    if (this.account) {
      this.loadData()
    }
  },
  methods: {
    loadData() {
      Promise.all([
        apiGet(),
        apiList({ page: 1 }),
      ]).then(([resTotalMoney, res0]) => {
        setTimeout(() => {
          this.$toast.clear()
          if (resTotalMoney.code === 200 && res0.code === 200) {
            this.totalMoney = 88.12
            this.list_0 = res0.data.list.map(d => `${this.account} 0 1 ${d.id}`)
            this.totalPage_0 = res0.data.totalPages
            this.page_0 = 1
          } else {
            throw new Error()
          }
        }, 1000)
      }).catch(e => {
        this.$toast.clear()
        this.$toast.fail('数据加载失败')
      })
    },
    handleTabClick (tabKey) {
      this.tabKey = tabKey
      this.clearList(tabKey)
      this.loadList(tabKey)
    },
    clearList(tabKey) {
      this[`list_${tabKey}`] = []
      this[`totalPage_${tabKey}`] = 0
      this[`page_${tabKey}`] = 0
    },
    loadList(tabKey) {
      this.$toast.loading({ duration: 0, forbidClick: true })
      apiList({ page: 1 }).then(res => {
        setTimeout(() => {
          this.$toast.clear()
          if (res.code === 200) {
            this[`list_${tabKey}`] = res.data.list.map(d => `${this.account} ${tabKey} 1 ${d.id}`)
            this[`totalPage_${tabKey}`] = res.data.totalPages
            this[`page_${tabKey}`] = 1
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
      let tabKey = this.tabKey
      if (this[`listLoading_${tabKey}`] || this[`page_${tabKey}`] >= this[`totalPage_${tabKey}`]) {
        return
      } 
      this[`listLoading_${tabKey}`] = true
      let page = this[`page_${tabKey}`] + 1
      apiList({ page }).then(res => {
        setTimeout(() => {
          this[`listLoading_${tabKey}`] = false
          if (res.code === 200) {
            this[`list_${tabKey}`] = [...this[`list_${tabKey}`], ...res.data.list.map(d => `${this.account} ${tabKey} ${page} ${d.id}`)]
            this[`page_${tabKey}`] = page
          } else {
            throw new Error()
          }
        }, 1000)
        
      }).catch(e => {
        this[`listLoading_${tabKey}`] = false
        this.$toast.fail('数据加载失败')
      })
    },
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

