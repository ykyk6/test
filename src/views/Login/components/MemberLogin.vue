<template>
  <q-tab-panel name="member-login" class="member-login">
    <q-form method="post" @submit.prevent="onSubmit" ref="formRef">
      <div class="q-mx-xl" style="max-width: 380px">
        <div class="q-mt-md">
          <div class="">メールアドレス</div>
          <q-input
            filled
            v-model="login.mail"
            type="email"
            stack-label
            :rules="[
              (val) => !!val || '* 必須',
              (val) => !!val.includes('@') || '”＠”は必要です'
            ]"
            lazy-rules
          />
        </div>
        <div class="">
          <div class="">パスワード</div>
          <q-input
            filled
            v-model="login.password"
            :type="login.isPwd ? 'password' : 'text'"
            stack-label
            :rules="[
              (val) => !!val || '* 必須',
              (val) =>
                (val.length > 3 && val.length < 10) ||
                '英数字と記号3文字以上10文字以内で入力して下さい'
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="login.isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="login.isPwd = !login.isPwd"
              />
            </template>
          </q-input>
        </div>
      </div>
      <!-- logindata-rember -->
      <div class="logindata_rember_area">
        <q-checkbox
          v-model="logindata_rember"
          color="secondary"
          label="ログインメールとパスワードを記録する"
          true-value="yes"
          false-value="no"
          class="logindata_rember"
          size="30px"
        />
      </div>
      <!-- login-rule -->
      <div class="login-rule-sure q-mx-xl" style="width: 380px">
        <div>
          <a href="">利用規約</a>と<a href="">個人情報保護方針</a
          >に同意いただいた上で、 <br />「ログイン」ボタンを押してください。
        </div>
      </div>
      <!-- login-btn -->
      <div class="btn-area">
        <q-btn
          color="black"
          class="login-btn q-mx-xl"
          label="ログインする"
          style="width: 380px"
          type="submit"
        />
      </div>
    </q-form>
    <!-- pw-forget -->
    <div class="pw-forget">
      <p>
        <span class="material-icons" style="color: red"> error </span>
        <a href=""> パスワードを忘れた場合はこちら</a>
      </p>
    </div>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
import LocalCache from '@/utils/cache'
import { useStore } from 'vuex'
import Swal from 'sweetalert2'
import isEmail from 'validator/lib/isEmail.js'

export default defineComponent({
  setup() {
    const login = reactive({
      mail: LocalCache.getCache('email') ?? '',
      password: LocalCache.getCache('password') ?? '',
      isPwd: true
    })

    const logindata_rember = ref('no')

    const store = useStore()

    const onSubmit = () => {
      const emailformat = isEmail(login.mail)
      if (emailformat === false) {
        Swal.fire(
          '',
          'メールアドレスのフォーマットが正しくありません。',
          'warning'
        )
      } else {
        // rember pw? -> save to localStrorage
        if (logindata_rember.value === 'yes') {
          LocalCache.setCache('email', login.mail)
          LocalCache.setCache('password', login.password)
        } else {
          LocalCache.deleteCache('email')
          LocalCache.deleteCache('password')
        }
        // login -> store/actions
        store.dispatch('LoginModule/AccountLogin', { ...login })
      }
    }
    return {
      login,
      logindata_rember,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.member-login {
  // background: grey;
  .logindata_rember_area {
    // background: green;
    text-align: center;
  }
  // .logindata_rember {
  // }
  .login-rule-sure {
    text-align: center;
    margin-top: 15px;
    a {
      // text-decoration: none;
      color: rgba(71, 71, 71, 0.8);
    }
  }
  .btn-area {
    display: flex;
    justify-content: center;
    .login-btn {
      padding: 16px 0;
      margin-top: 20px;
    }
  }
  .pw-forget {
    text-align: center;
    margin-top: 20px;
  }
}
</style>
