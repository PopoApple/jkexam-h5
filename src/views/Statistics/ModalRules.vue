<template>
  <Dialog :value="show" title="返佣规则说明" @input="e => $emit('input', e)" class="common-dialog ModalRules">
    <Tabs v-model="active">
      <Tab title="获取佣金">
        <div class="content" >
          获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍获取佣金规则介绍
        </div>
      </Tab>
      <Tab title="佣金提现">
        <div class="content" >
          佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍佣金提现规则介绍
        </div>
      </Tab>
    </Tabs>
  </Dialog>
</template>

<script>
import { Icon, Dialog, Tab, Tabs } from 'vant'

export default {
  components: { Icon, Dialog: Dialog.Component, Tab, Tabs },
  props: {
    show: Boolean,
  },
  data() {
    return {
      active: 0,
    }
  },
}
</script>

<style lang="less">
.ModalRules {
  &.van-dialog {
    top: 50%;
  }
  .content {
    height: calc(100vh - 300px);
    overflow-y: auto;
    margin: 10px 0 0 0;
    padding: 0 15px 10px 15px;
  }
}
</style>

