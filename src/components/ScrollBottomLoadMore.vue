<template>
  <div class="ScrollBottomLoadMore" :class="{ show: loading }">
    <template v-if="loading">
      <Loading type="spinner" size="24" class="icon" />
      <span>数据加载中</span>
    </template>
  </div>
</template>

<script>
import { Loading } from 'vant'

  export default {
    components: { Loading },
    props: {
      totalpage: {
        type: Number,
        required: true,
      }, 
      loading: {
        type: Boolean,
      },
      offset: {
        type: Number,
        default: 0,
      },
    },
    data() {
      return {
        totalOffset: 0,
      }
    },
    mounted() {
      // let footer = document.querySelector('footer')
      // if (footer) {
      //   this.totalOffset = this.offset + footer.clientHeight
      // } 
      window.addEventListener('scroll', this.disposeScroll) 
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.disposeScroll) 
    },
    methods: {
      disposeScroll() {
        let top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 // 获取滚动条垂直的位置
        if (top + document.body.clientHeight + this.totalOffset + 1 >= document.body.scrollHeight) { //如果滚动条的位置加上窗口的高度大于等于滚动内容的高度，那么也就是滚动条到低了
          this.$emit('update') 
        }
      },
    },
  }
</script>

<style lang="less">
.ScrollBottomLoadMore {
  color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  &.show {
    height: 44px;
  }
  .icon {
    margin-right: 5px;
  }
}
</style>
