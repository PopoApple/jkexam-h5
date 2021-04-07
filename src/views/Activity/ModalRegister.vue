<template>
  <Dialog :value="show" :showConfirmButton="false" title="注册" @input="e => $emit('input', e)" class="common-dialog ActivityModal ModalRegister">
    <div class="content">
      <div class="field field-phone">
        <div class="field-input">
          <input class="input" placeholder="请输入手机号" />
        </div>
        <div class="field-error">请输入信息</div>
      </div>
      <div class="field field-code">
        <div class="field-input">
          <input class="input" placeholder="请输入验证码" />
          <button class="send-code-btn">获取验证码</button>
        </div>
        <div class="field-error">请输入信息</div>
      </div>
      <button class="btn btn-orange btn-confirm">确定</button>
    </div>
    <div class="close-btn" @click="$emit('input', false)"></div>
  </Dialog>
</template>

<script>
import { Dialog } from 'vant'

export default {
  components: { Dialog: Dialog.Component },
  props: {
    show: Boolean,
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="less">
@import url(./styles/modal.less);
.ModalRegister {
  .field {
    margin-top: 20px;
    position: relative;
    &.field-code {
      margin-top: 30px;
    }
    .field-input {
      display: flex;
      border: 1px solid @orange;
      height: 44px;
      line-height: 44px;
      border-radius: 8px;
      background-color: #fff;
      padding: 0 10px;
    }
  }
  .field-error {
    color: red;
    font-size: 12px;
    position: absolute;
    bottom: -20px;
  }
  .input {
    border: none;
    background-color: transparent;
    height: 100%;
    flex: 1;
  }
  .send-code-btn {
    color: @orange;
    width: 100px;
    text-align: right;
  }
  .btn-confirm {
    width: 39vw;
    height: 11vw;
    margin: 30px auto 24px;
    line-height: 11vw;
  }
}
</style>

