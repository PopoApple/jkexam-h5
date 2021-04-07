<template>
  <Dialog :value="show" :showConfirmButton="false" title="邀请情况详情" @input="e => $emit('input', e)" class="common-dialog ActivityModal ModalInvaitationDetail">
    <div class="content">
      <div class="task" v-for="(item, idx) in tasks" :key="item.id">
        <div class="task-title">
          <span class="task-no">{{`任务${idx + 1}：`}}</span>
          {{item.desc}}
          <div v-if="item.id === '4'" class="done-text-tips">
            <em>{{ item.doneText }}</em>
          </div>
          <template v-else>
            <em>{{ item.totalCount }}个</em>,
            {{ item.doneText }}
            <em>{{ item.doneCount }}个</em>!
            <div class="progress">
              <Progress :percentage="item.percentage" color="#ff892a" track-color="#ffdfa1" />
            </div>
          </template>
        </div>
      </div>
      <div class="tips">
        任务共计已获得额外奖券
        <em>
          {{totalCount}}张
        </em>
      </div>
    </div>
    <div class="close-btn" @click="$emit('input', false)"></div>
  </Dialog>
</template>

<script>
import { Icon, Dialog, Progress } from 'vant'

export default {
  components: { Icon, Dialog: Dialog.Component, Progress },
  props: {
    show: Boolean,
  },
  data() {
    return {
      tasks: [
        { id: '1', desc: '邀请好友助力', totalCount: 20, doneText: '已邀请', doneCount: 3, percentage: 12 },
        { id: '2', desc: '邀请好友注册', totalCount: 10, doneText: '已邀请', doneCount: 5, percentage: 50 },
        { id: '3', desc: '邀请好友登录', totalCount: 8, doneText: '已邀请', doneCount: 4, percentage: 50 },
        { id: '4', desc: '邀请好友购买!', doneText: '当前已有3位好友购买，已获得9张奖券！' },
      ],
      totalCount: 27,
    }
  },
}
</script>

<style lang="less">
@import url(./styles/modal.less);
.ModalInvaitationDetail {
  .task {
    font-size: 14px;
    margin-top: 20px;
    line-height: 28px;
    .done-text-tips {
      margin-top: 8px;
    }
    .progress {
      margin-top: 20px;
    }
  }
  .tips {
    font-size: 18px;
    margin: 20px 0 40px;
    text-align: center;
  }
}
</style>

