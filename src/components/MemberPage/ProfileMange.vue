<template>
  <div class="container">
    <div class="contain">
      <div class="profiledata_wrapper">
        <q-form method="post" @submit.prevent="onSubmit">
          <div class="profiledata_name">
            <div class="name_title">名前</div>
            <div class="name_input">
              <q-input
                filled
                v-model="user_data.name"
                class="name_input_area"
              />
            </div>
          </div>
          <div class="profiledata_birthday">
            <div class="birthday_title">*誕生日</div>
            <div class="birthday_input">
              <q-input
                filled
                v-model="user_data.birthday"
                class="birthday_input_area"
                readonly
              />
            </div>
          </div>
          <div class="profiledata_mail">
            <div class="mail_title">*メールアドレス</div>
            <div class="mail_input">
              <q-input
                filled
                v-model="user_data.mail"
                class="mail_input_area"
              />
            </div>
          </div>
          <div class="profiledata_password">
            <div class="password_title">*パスワード</div>
            <div class="password_input">
              <q-input
                filled
                v-model="user_data.password"
                :type="isPwd ? 'password' : 'text'"
                class="password_input_area"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
            </div>
          </div>
          <div class="profiledata_sure">
            <q-btn
              color="black"
              label="確認する"
              class="profiledata_sure_button"
              type="submit"
            />
          </div>
        </q-form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'

export default defineComponent({
  setup() {
    const store = useStore()
    const user_mail = store.state.LoginModule.userInfo.mail
    let user_data = reactive({
      _id: '',
      name: '',
      birthday: '',
      mail: '',
      password: '',
      like_items: []
    })

    onMounted(() => {
      axios.get(process.env.VUE_APP_API + '/users/').then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const temp_user_data = res.data.result.filter((item: any) => {
            return item.mail === user_mail
          })
          const s_user_data = JSON.stringify(temp_user_data)
          const o_user_data = JSON.parse(s_user_data)
          user_data._id = o_user_data[0]._id
          user_data.name = o_user_data[0].name
          user_data.birthday = o_user_data[0].birthday
          user_data.mail = o_user_data[0].mail
          user_data.password = o_user_data[0].password
          user_data.like_items = o_user_data[0].like
        }
      })
    })
    const onSubmit = () => {
      Swal.fire({
        icon: 'warning',
        title: '登録をもう一度確認する',
        showCancelButton: true,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'はい',
        cancelButtonText: 'キャンセル'
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .patch(
              process.env.VUE_APP_API + '/users/' + user_data._id,
              user_data
            )
            .then((res) => {
              if (res.data.success) {
                // alert('success')
                console.log(user_data)
                Swal.fire({
                  icon: 'success',
                  title: '登録しました'
                })
              }
            })
        }
      })
    }
    return {
      user_data,
      isPwd: ref(true),
      onSubmit
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  // background: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  .contain {
    margin-top: 20px;
    width: 90%;
    // height: 400px;
    // background: rgb(248, 166, 221);
    display: flex;
    flex-direction: column;
    align-items: center;
    .profiledata_wrapper {
      margin-top: 20px;
      width: 70%;
      // background: green;
      // display: flex;
      .profiledata_name,
      .profiledata_birthday,
      .profiledata_mail,
      .profiledata_password {
        margin-top: 20px;
        width: 100%;
        display: flex;
        // background: rgb(66, 88, 66);
        .name_title,
        .birthday_title,
        .mail_title,
        .password_title {
          width: 25%;
          font-size: 17px;
          line-height: 56px;
          text-align: left;
          // padding-left: 49px;
        }
        .name_input,
        .birthday_input,
        .mail_input,
        .password_input {
          width: 75%;
          &_area {
            width: 100%;
          }
        }
      }
      .profiledata_sure {
        margin-top: 65px;
        margin-bottom: 42px;
        width: 100%;
        text-align: center;
        &_button {
          width: 200px;
          height: 50px;
        }
      }
    }
  }
}
</style>
