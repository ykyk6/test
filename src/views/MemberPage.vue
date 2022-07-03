<template>
  <div>
    <div class="member-container">
      <div class="cotain">
        <div class="member_title"><p>プロフィール</p></div>
        <div class="member_wrapper">
          <div class="member_content">
            <q-card class="member_content_card">
              <q-tabs
                v-model="member_manage_tab"
                dense
                class="text-black"
                align="justify"
                narrow-indicator
              >
                <q-tab name="profilemanage" label="プロフィール変更" />

                <!-- <q-tab name="orderhistory" label="注文履歴" />
                <q-tab name="LikeProducts" label="お気に入り商品" /> -->
              </q-tabs>

              <q-separator />

              <q-tab-panels v-model="member_manage_tab" animated>
                <q-tab-panel name="profilemanage">
                  <profile-mange :userData="user_data"></profile-mange>
                </q-tab-panel>
                <!-- <q-tab-panel name="orderhistory"> -->
                <!-- <order-history></order-history> -->
                <!-- </q-tab-panel> -->
                <!-- <q-tab-panel name="LikeProducts"> </q-tab-panel> -->
              </q-tab-panels>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import ProfileMange from '@/components/MemberPage/ProfileMange.vue'
// import OrderHistory from '@/components/MemberPage/OrderHistory.vue'
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({
  components: { ProfileMange },
  setup() {
    const member_manage_tab = ref('profilemanage')
    const store = useStore()
    const user_mail = store.state.LoginModule.userInfo.mail
    let user_data = ref('')

    onMounted(() => {
      axios.get(process.env.VUE_APP_API + '/users/').then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const temp_user_data = res.data.result.find((item: any) => {
            return item.mail === user_mail
          })
          // console.log(temp_user_data)
          user_data.value = temp_user_data
          // console.log(typeof user_data.value)
        }
      })
    })
    return {
      member_manage_tab,
      user_data
    }
  }
})
</script>

<style lang="scss" scope>
@import '@/styles/common.css';
.member-container {
  // width: 100%;
  font-family: 'NotoSansJP-R';
  display: flex;
  flex-direction: column;
  align-items: center;
  .cotain {
    width: 1100px;
    .member_title {
      width: 100%;
      text-align: center;
      margin-top: 30px;
      font-size: 30px;
    }
    .member_wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .member_content {
        width: 100%;
        display: flex;
        &_card {
          width: 100%;
          border: 1px solid black;
        }
        .q-card {
          box-shadow: none;
          border-radius: 2px;
          .q-tabs {
            .q-tab:nth-child(1),
            .q-tab:nth-child(2) {
              border-right: 1px dotted rgb(158, 158, 158);
            }
            .q-tab {
              padding: 12px 16px;
              background: rgba(202, 202, 202, 0.5);
              border-bottom: 1px solid black;
              &__label {
                color: black;
              }

              &__indicator {
                opacity: 0;
              }
              &--active {
                background: rgb(206, 206, 206);
                color: rgb(0, 0, 0);
              }
            }
          }
        }
      }
    }
  }
}
</style>
