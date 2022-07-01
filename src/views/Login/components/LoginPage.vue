/* eslint-disable no-useless-escape */
<template>
  <div class="">
    <div class="login_outside">
      <!-- login-card -->
      <div class="">
        <q-card class="my-card">
          <q-card-section>
            <div class="text-h6 title">ログイン</div>
          </q-card-section>
          <!-- login/register切換區 -->
          <q-tabs v-model="tab" class="text-blue-grey-5">
            <q-tab label="ログイン" name="member-login" />
            <q-tab label="新規登録" name="member-register" />
          </q-tabs>

          <q-separator />
          <!-- 輸入框 -->
          <q-tab-panels v-model="tab" animated>
            <!-- member-login -->
            <member-login name="member-login"></member-login>
            <!-- member-register -->
            <member-reg name="member-register"></member-reg>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </div>
  <!--  -->
</template>

<script lang="ts">
import { ref } from 'vue'
import MemberLogin from './MemberLogin.vue'
import MemberReg from './MemberReg.vue'

export default {
  components: {
    MemberLogin,
    MemberReg
  },
  setup() {
    const tab = ref('member-login')

    return {
      tab
    }
  }
}
</script>
<style lang="scss" scoped>
@media (min-width: 700px) {
  .login_outside {
    background: rgba(149, 156, 149, 0.3);
    padding-bottom: 80px;
    .my-card {
      width: 100vw;
      margin-top: 50px;
      padding-top: 35px;
      margin-bottom: 20px;
    }
    .q-card {
      border: 1px solid rgb(129, 129, 129);
    }
  }
}
@media (max-width: 699px) {
  .login_outside {
    .my-card {
      width: 100vw;
      margin-top: 0px;
      padding-top: 30px;
      // height: 650px;
      // background: pink;
    }
  }
}
.login_outside {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  .my-card {
    width: 100%;
    max-width: 500px;
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(209, 209, 209, 0.8);
      border: 1px solid black;
      // transform: rotate(6deg);
      z-index: -1;
      opacity: 0;
    }
    // &:hover::after {
    //   opacity: 1;
    // }
    .title {
      // background: green;
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
    }
  }
  .q-card {
    box-shadow: none;
    // border: 1px solid rgb(129, 129, 129);
    // background: rgba(255, 255, 255, 0.5);
  }
}

.q-tab--active {
  background: rgb(22, 151, 160);
  // border: 1px solid black;
  color: white;
  border-bottom: none;
}
</style>
