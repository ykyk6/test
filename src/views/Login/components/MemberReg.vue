<template>
  <q-tab-panel name="member-register" class="member-register">
    <q-form method="post" @submit.prevent="onSubmit">
      <div class="q-mx-xl" style="max-width: 380px">
        <div class="q-mt-md">
          <div class="">名前</div>
          <q-input
            filled
            v-model="reg.name"
            type="text"
            stack-label
            :rules="[(val) => !!val || '* 必須']"
            lazy-rules
          />
          <div class="">誕生日</div>
          <q-input
            filled
            v-model="reg.birthday"
            type="date"
            stack-label
            :rules="[(val) => !!val || '* 必須']"
            lazy-rules
          />
          <div class="">メールアドレス</div>
          <q-input
            filled
            v-model="reg.mail"
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
            v-model="reg.password"
            :type="reg.isPwd ? 'password' : 'text'"
            stack-label
            :rules="[
              (val) => !!val || '* 必須',
              (val) =>
                (val.length > 3 && val.length < 10) ||
                '英数字と記号3文字以上10文字以内で入力して下さい'
            ]"
            lazy-rules
          >
            <template v-slot:append>
              <q-icon
                :name="reg.isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="reg.isPwd = !reg.isPwd"
              />
            </template>
          </q-input>
        </div>
      </div>
      <!-- reg-rule -->
      <div class="reg-rule-sure" style="">
        <q-checkbox
          v-model="reg.rule_sure"
          color="secondary"
          label="利用規約と個人情報保護方針に同意します"
          true-value="yes"
          false-value="no"
          class=""
          size="30px"
        />
      </div>
      <!-- reg-btn -->
      <div class="btn-area">
        <q-btn
          color="black"
          class="reg-btn q-mx-xl"
          label="会員登録する"
          style="width: 380px"
          type="submit"
        />
      </div>
    </q-form>
  </q-tab-panel>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import isEmail from 'validator/lib/isEmail.js'

export default defineComponent({
  setup() {
    const reg = reactive({
      name: '',
      birthday: '',
      mail: '',
      password: '',
      isPwd: false,
      rule_sure: 'no'
    })

    const onSubmit = () => {
      const mailFormat = isEmail(reg.mail)
      const { name, birthday, mail, password } = reg
      if (mailFormat === false) {
        Swal.fire(
          '',
          'メールアドレスのフォーマットが正しくありません。',
          'warning'
        )
      } else if (mailFormat && reg.rule_sure === 'no') {
        Swal.fire('', '利用規約を同意してください。', 'warning')
      } else {
        axios
          .post(process.env.VUE_APP_API + '/users/', {
            name,
            birthday,
            mail,
            password
          })
          .then((res) => {
            if (res.data.success) {
              console.log(res)
              Swal.fire('', '登録しました!', 'success')
            }
          })
          .catch((err) => {
            console.log(err)
            if (err.response.status === 400) {
              Swal.fire('', 'メールアドレスは既に存在します。', 'warning')
            } else {
              Swal.fire('エラー', '', 'error')
            }
          })
      }
    }
    return {
      reg,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.member-register {
  .reg-rule-sure {
    // background: grey;
    text-align: center;
    margin-top: 10px;
  }
  .btn-area {
    display: flex;
    justify-content: center;
    .reg-btn {
      padding: 16px 0;
      margin-top: 22px;
      margin-bottom: 20px;
    }
  }
}
</style>
