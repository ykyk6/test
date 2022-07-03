<template>
  <div class="checkout-container">
    <div class="contain">
      <div class="order_check_title">ご注文内容の確認</div>
      <div class="order_check_list">
        <table>
          <tbody>
            <tr>
              <th class="item_img img_td">商品</th>
              <th class="item_name">商品名</th>
              <th class="item_color">カラー</th>
              <th class="item_price">価格</th>
              <th class="item_quantity">数量</th>
            </tr>
            <!-- 商品內容 -->
            <tr v-for="item in cartItems" :key="item.pic">
              <td class="img_td">
                <div class="img_box_wrapper">
                  <div class="img-box">
                    <div class="img-con">
                      <img :src="item.pic" alt="" />
                    </div>
                  </div>
                </div>
              </td>
              <td>{{ item.name }}</td>
              <td>{{ item.color }}</td>
              <td>￥{{ item.price }}</td>
              <td>{{ item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <!-- 送料 -->
        <div class="order_check_shipping">
          <div class="shipping-left">送料</div>
          <div class="shipping-right">￥{{ ShippingFee }}</div>
        </div>
        <!-- 合計 -->
        <div class="order_check_total">
          <div class="total-left">合計</div>
          <div class="total-right">￥{{ AllTotalPrice }}</div>
        </div>
        <!-- </q-scroll-area> -->
      </div>
      <q-form @submit.prevent="onSubmit">
        <div class="address_enter_title">お届け先情報入力</div>
        <div class="address_enter_list">
          <table>
            <tbody>
              <tr>
                <td class="address_title">お名前</td>
                <td class="address_name_title">
                  <q-input
                    outlined
                    v-model="receive.name"
                    label=""
                    class="address_enter"
                  />
                </td>
              </tr>
              <tr>
                <td class="address_title">郵便番号</td>
                <td>
                  <q-input
                    outlined
                    v-model="receive.post"
                    label=""
                    mask="### - ####"
                    class="address_enter"
                  />
                </td>
              </tr>
              <tr>
                <td class="address_title">住所</td>
                <td>
                  <q-input
                    outlined
                    v-model="receive.address"
                    label=""
                    class="address_enter"
                  />
                </td>
              </tr>
              <tr>
                <td class="address_title">お電話番号</td>
                <td>
                  <q-input
                    outlined
                    v-model="receive.phone"
                    label=""
                    mask="(###) #### - ####"
                    class="address_enter"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pay_title">お支払い方法選択</div>
        <div class="pay_list">
          <!-- BANK -->
          <div class="bank_pay">
            <!-- 選擇後打勾 -->
            <div v-show="choice_B" class="choice">
              <q-icon name="check_circle" size="60px" color="red"></q-icon>
            </div>
            <q-card class="my-card" flat bordered>
              <q-img src="@/assets/pay_logo/bank.png" />

              <q-card-section>
                <div class="text-overline_2 text-orange-9 text-center">
                  振込手数料ご負担下さい
                </div>
                <div class="text-h6 q-mb-xs text-center">銀行振り込み</div>
                <div class="text-grey pay_text">
                  振込先情報は購入完了メールに記載されております。振込手数料はご負担下さい。
                </div>
              </q-card-section>

              <q-card-actions>
                <q-space />

                <q-btn
                  color="black"
                  flat
                  dense
                  label="選択する"
                  :icon="
                    expanded_B ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded_B = !expanded_B"
                />
              </q-card-actions>

              <q-slide-transition>
                <div v-show="expanded_B">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    <div class="row justify-center items-center w-10">
                      <table
                        class="w-10 q-pa-md q-mt-sm"
                        style="border: 1px solid #000"
                      >
                        <!-- info -->
                        <thead>
                          <tr>
                            <th class="text-center bg-orange-4">
                              どのようにお支払いしますか？
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-left">
                              入金期限は購入の翌日から数えて土日祝日を除いた5営業日以内です。
                              ※期限を過ぎた場合には自動的にキャンセルとなります。
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="q-mt-md surebtn">
                        <q-btn
                          color="black"
                          label="確認"
                          name="123"
                          @click="btnok_B('銀行振り込み')"
                        />
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <!-- CVS -->
          <div class="CVS_pay">
            <!-- 選擇後打勾 -->
            <div v-show="choice_C" class="choice">
              <q-icon name="check_circle" size="60px" color="red"></q-icon>
            </div>
            <q-card class="my-card" flat bordered>
              <q-img src="@/assets/pay_logo/CVS.png" />

              <q-card-section>
                <div class="text-overline_2 text-orange-9 text-center">
                  支払手数料は300円。
                </div>
                <div class="text-h6 q-mb-xs text-center">コンビニ決済</div>
                <div class="text-grey pay_text">
                  コンビニ決済の受付番号は購入後に送らせていただくメールに記載されております。
                </div>
              </q-card-section>

              <q-card-actions>
                <!-- <q-btn flat color="primary" label="Book" /> -->

                <q-space />

                <q-btn
                  color="black"
                  flat
                  dense
                  label="選択する"
                  :icon="
                    expanded_C ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded_C = !expanded_C"
                />
              </q-card-actions>

              <q-slide-transition>
                <div v-show="expanded_C">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    <div class="row justify-center items-center w-10">
                      <table
                        class="w-10 q-pa-md q-mt-sm"
                        style="border: 1px solid #000"
                      >
                        <!-- info -->
                        <thead>
                          <tr>
                            <th class="text-center bg-orange-4">
                              どのようにお支払いしますか？
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="text-left">
                              お近くのコンビニにて、受付番号と電話番号をもとにお支払いいただきます。
                              お支払用紙は郵送されませんので、ご注意ください。
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="q-mt-md surebtn">
                        <q-btn
                          color="black"
                          label="確認"
                          @click="btnok_C('コンビニ決済')"
                        />
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
          <!-- CARD -->
          <div class="card_pay">
            <!-- 選擇後打勾 -->
            <div v-show="choice_CA" class="choice">
              <q-icon name="check_circle" size="60px" color="red"></q-icon>
            </div>
            <q-card class="my-card" flat bordered>
              <q-img src="@/assets/pay_logo/card.png" />

              <q-card-section>
                <div class="text-overline_2 text-orange-9 text-center">
                  支払手数料なし。
                </div>
                <div class="text-h6 q-mb-xs text-center">クレジットカード</div>
                <div class="text-grey pay_text">
                  リボ払い・分割払いには対応しておりません。
                  一括払いのみ可能となっております。
                </div>
              </q-card-section>

              <q-card-actions>
                <q-space />
                <q-btn
                  color="black"
                  flat
                  dense
                  label="選択する"
                  :icon="
                    expanded_CA ? 'keyboard_arrow_up' : 'keyboard_arrow_down'
                  "
                  @click="expanded_CA = !expanded_CA"
                />
              </q-card-actions>

              <q-slide-transition>
                <div v-show="expanded_CA">
                  <q-separator />
                  <q-card-section class="text-subitle2">
                    <div class="column justify-center items-center w-10">
                      <q-markup-table class="w-10 markup-table q-mt-sm">
                        <!-- card-num -->
                        <thead>
                          <tr>
                            <th class="text-center">カード番号</th>
                          </tr>
                        </thead>
                        <tbody>
                          <q-input
                            v-model="card.num"
                            autogrow
                            dense
                            filled
                            mask="#### #### #### ####"
                            color="grey"
                            class=""
                          />
                        </tbody>
                        <!-- card-date -->
                        <thead>
                          <tr>
                            <th class="text-center">有効期限</th>
                          </tr>
                        </thead>
                        <tbody>
                          <q-input
                            v-model="card.date"
                            autogrow
                            dense
                            mask="##/##"
                            unmasked-value
                            filled
                            class=""
                          />
                        </tbody>
                        <!-- security-num -->
                        <thead>
                          <tr>
                            <th class="text-center">セキュリティ番号</th>
                          </tr>
                        </thead>
                        <tbody>
                          <q-input
                            v-model="card.security"
                            autogrow
                            dense
                            mask="###"
                            unmasked-value
                            filled
                            class=""
                          />
                        </tbody>
                      </q-markup-table>
                      <div class="q-mt-md surebtn">
                        <q-btn
                          color="black"
                          label="確認"
                          @click="btnok_CA('クレジットカード')"
                        />
                      </div>
                    </div>
                  </q-card-section>
                </div>
              </q-slide-transition>
            </q-card>
          </div>
        </div>
        <div class="arrow">
          <span class="material-icons"> expand_more </span>
          <span class="material-icons"> expand_more </span>
          <span class="material-icons"> expand_more </span>
        </div>
        <div class="order_sure_">
          <q-btn
            no-caps
            color="black"
            label="注文を確認する"
            class="order_sure_button"
            type="submit"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'
// import OrderCompleteDetail from './OrderCompleteDetail.vue'
import { useStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '@/router'

export default defineComponent({
  setup() {
    // 付款方式控制項
    let expanded_B = ref(false)
    let expanded_C = ref(false)
    let expanded_CA = ref(false)
    let choice_B = ref(false)
    let choice_C = ref(false)
    let choice_CA = ref(false)
    // 打印當下日期
    const day = new Date()
    const getMonth = day.getMonth() + 1
    const date = day.getFullYear() + '/' + getMonth + '/' + day.getDate()
    // 收件資料
    const receive = reactive({
      name: '',
      post: '',
      address: '',
      phone: '',
      pay: '',
      date: date
    })
    // card資料，可以先不用傳
    const card = reactive({
      num: '',
      date: '',
      security: ''
    })

    const store = useStore()
    // user資料
    const userMail = ref(store.state.LoginModule.userInfo.mail)
    // 購物車items + price
    // const cartItems = JSON.parse(localStorage.PersonalItem).cartItem1
    const cartItems = store.state.cartItem1
    const ShippingFee = ref(store.getters.ShippingFee)
    const TotalPrice = ref(store.getters.TotalPrice)
    const AllTotalPrice = ref(TotalPrice.value + ShippingFee.value)

    const ShippingFeeValue = ShippingFee.value
    const AllTotalPriceValue = AllTotalPrice.value
    const userMailValue = userMail.value

    // 付款方式控制項fn
    const btnok_B = (value: string) => {
      choice_B.value = true
      choice_C.value = false
      choice_CA.value = false
      receive.pay = value
      expanded_B.value = false
    }
    const btnok_C = (value: string) => {
      choice_C.value = true
      choice_B.value = false
      choice_CA.value = false
      receive.pay = value
      expanded_C.value = false
    }
    const btnok_CA = (value: string) => {
      if (!card.num || !card.date || !card.security) {
        alert('クレジットカード番号が不正です。')
      } else {
        choice_CA.value = true
        choice_B.value = false
        choice_C.value = false
        receive.pay = value
        expanded_CA.value = false
      }
    }
    // 送出訂單資料
    const onSubmit = () => {
      if (
        !receive.name ||
        !receive.post ||
        !receive.address ||
        !receive.phone ||
        !receive.pay
      ) {
        alert('お届け先情報もしくはお支払い方法が不正です。')
      } else {
        Swal.fire({
          icon: 'warning',
          title: '注文内容を確定する',
          showCancelButton: true,
          confirmButtonColor: '#000',
          cancelButtonColor: '#d33',
          confirmButtonText: 'はい',
          cancelButtonText: 'キャンセル'
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .post(process.env.VUE_APP_API + '/orders', {
                userMailValue,
                cartItems,
                receive,
                ShippingFeeValue,
                AllTotalPriceValue
              })
              .then((res) => {
                if (res.data.success) {
                  // console.log(res.data)
                  // Swal.fire('Saved!', '', 'success')
                  store.commit('orderDetail', res.data.result)
                  router.push('/orderCompleteDetail')
                }
              })
              .catch((err) => {
                console.log(err)
              })
          }
        })
      }
    }
    return {
      expanded_B,
      expanded_C,
      expanded_CA,
      choice_B,
      choice_C,
      choice_CA,
      btnok_B,
      btnok_C,
      btnok_CA,
      receive,
      card,
      cartItems,
      ShippingFee,
      AllTotalPrice,
      onSubmit
    }
  }
})
</script>

<style lang="scss" scope>
@import '@/styles/common.css';
@media (max-width: 594px) {
  .checkout-container {
    width: 100%;
  }
}
.checkout-container {
  font-family: 'NotoSansJP-R';
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1250px) {
    .contain {
      width: 1100px;
      .order_check_title,
      .address_enter_title,
      .pay_title {
        text-align: left;
        &::after {
          content: '';
          width: 241px;
          height: 1px;
          background: black;
          position: absolute;
          left: 18%;
          top: 18px;
        }
      }
      .pay_list {
        display: flex;
        justify-content: space-between;
        .bank_pay,
        .CVS_pay,
        .card_pay {
          width: 30%;
        }
      }
      .order_check_shipping {
        padding-left: 0%;
        .shipping-left {
          width: calc(18% + 1px);
          text-align: left;
          padding-left: 7%;
        }
        .shipping-right {
          width: 82%;
          text-align: right;
          padding-right: 35px;
        }
      }
      .order_check_total {
        padding-left: 0%;
        .total-left {
          width: calc(18% + 1px);
          text-align: left;
          padding-left: 7%;
        }
        .total-right {
          width: 82%;
          text-align: right;
          padding-right: 35px;
        }
      }
    }
  }
  @media (max-width: 1249px) {
    .contain {
      width: 1000px;
      .order_check_title,
      .address_enter_title,
      .pay_title {
        text-align: center;
      }
      .pay_list {
        display: flex;
        justify-content: space-between;
        .bank_pay,
        .CVS_pay,
        .card_pay {
          width: 30%;
        }
      }
      .order_check_shipping {
        padding-left: 0%;
        .shipping-left {
          width: calc(18% + 1px);
          text-align: left;
          padding-left: 7%;
        }
        .shipping-right {
          width: 82%;
          text-align: right;
          padding-right: 35px;
        }
      }
      .order_check_total {
        padding-left: 0%;
        .total-left {
          width: calc(18% + 1px);
          text-align: left;
          padding-left: 7%;
        }
        .total-right {
          width: 82%;
          text-align: right;
          padding-right: 35px;
        }
      }
    }
  }
  @media (max-width: 1056px) {
    .contain {
      width: 900px;
      .order_check_title,
      .address_enter_title,
      .pay_title {
        text-align: center;
      }
      .pay_list {
        display: flex;
        justify-content: space-between;
        .bank_pay,
        .CVS_pay,
        .card_pay {
          width: 30%;
        }
      }
    }
  }
  @media (max-width: 848px) {
    .contain {
      width: 800px;
      .order_check_title,
      .address_enter_title,
      .pay_title {
        text-align: center;
      }
      .pay_list {
        display: flex;
        justify-content: space-between;
        .bank_pay,
        .CVS_pay,
        .card_pay {
          width: 30%;
        }
      }
    }
  }
  @media (max-width: 749px) {
    .contain {
      width: 700px;
      .order_check_title,
      .address_enter_title,
      .pay_title {
        text-align: center;
      }
      .q-form {
        width: 700px;
      }
      .pay_list {
        display: flex;
        flex-direction: column;
        align-items: center;
        .bank_pay,
        .CVS_pay,
        .card_pay {
          width: 70%;
          margin-bottom: 20px;
        }
      }
    }
  }

  @media (max-width: 594px) {
    .contain {
      width: 100%;
      .img_td {
        display: none;
      }
      .order_check_shipping {
        padding-left: 0%;
        .shipping-left {
          text-align: left;
          width: 70%;
          padding-left: 10px;
        }
        .shipping-right {
          width: 30%;
          text-align: right;
          padding-right: 10px;
        }
      }
      .order_check_total {
        padding-left: 0%;
        .total-left {
          text-align: left;
          width: 70%;
          padding-left: 10px;
        }
        .total-right {
          width: 30%;
          text-align: right;
          padding-right: 10px;
        }
      }
      .q-form {
        width: 100%;
      }
      .pay_list {
        display: flex;
        flex-direction: column;
        align-items: center;
        .bank_pay,
        .CVS_pay,
        .card_pay {
          width: 80%;
          margin-bottom: 20px;
        }
      }
    }
  }

  .contain {
    // width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .order_check_title {
      margin-top: 40px;
      width: 90%;
      font-size: 18px;
      font-weight: bold;
      padding: 5px;
      position: relative;
    }
    .order_check_list {
      margin-top: 20px;
      width: 90%;
      table {
        width: 100%;
        border-collapse: collapse;
        text-align: center;
        th {
          background: rgba(226, 226, 226, 0.7);
          height: 35px;
          border: 1px solid rgb(97, 90, 90);
        }
        td {
          background: white;
          height: 93px;
          border: 1px solid rgb(97, 90, 90);
        }
        .item_img {
          width: 18%;
        }
        .item_name {
          width: 38%;
        }
        .item_color {
          width: 17%;
        }
        .item_quantity {
          width: 10%;
        }
        .item_price {
          width: 17%;
        }
      }
      .img_box_wrapper {
        display: flex;
        justify-content: center;
        // background: pink;
        .img-box {
          width: 66px;
          height: 69px;
          // border: 1px solid black;
          .img-con {
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .order_check_shipping {
        width: 100%;
        height: 35px;
        background: rgba(233, 232, 232, 0.5);
        border-left: 1px solid rgb(97, 90, 90);
        border-right: 1px solid rgb(97, 90, 90);
        border-bottom: 1px solid rgb(97, 90, 90);
        // padding-left: 73%;
        display: flex;
        .shipping-left {
          // width: 37%;
          height: 35px;
          line-height: 35px;
          // text-align: center;
        }
        .shipping-right {
          // width: 63%;
          height: 35px;
          line-height: 35px;
          // text-align: center;
          // background: green;
        }
      }
      .order_check_total {
        width: 100%;
        height: 35px;
        background: rgba(233, 232, 232, 0.5);
        border-left: 1px solid rgb(97, 90, 90);
        border-right: 1px solid rgb(97, 90, 90);
        border-bottom: 1px solid rgb(97, 90, 90);
        // padding-left: 73%;
        display: flex;
        .total-left {
          // width: 37%;
          height: 35px;
          line-height: 35px;
          // text-align: center;
          // background: pink;
        }
        .total-right {
          // width: 63%;
          height: 35px;
          line-height: 35px;
          // text-align: center;
          // background: green;
        }
      }
    }
    .q-form {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .address_enter_title {
      margin-top: 40px;
      width: 90%;
      font-size: 18px;
      font-weight: bold;
      position: relative;
      padding: 5px;
    }
    .address_enter_list {
      margin-top: 20px;
      width: 90%;
      table {
        width: 100%;
        border-collapse: collapse;
        .address_title {
          padding-left: 10px;
          width: 28%;
          background: rgba(226, 226, 226, 0.7);
          // height: 30px;
          border: 1px solid rgb(175, 174, 174);
        }
        td {
          width: 72%;
          background: white;
          // height: 30px;
          border: 1px solid rgb(158, 158, 158);
        }
      }
    }
    .pay_title {
      margin-top: 40px;
      width: 90%;
      // text-align: left;
      font-size: 18px;
      font-weight: bold;
      position: relative;
      // background: rgb(218, 218, 218);
      padding: 5px;
    }
    .pay_list {
      margin-top: 25px;
      width: 90%;
      // display: flex;
      // justify-content: space-between;
      .q-card {
        padding-bottom: 5px;
      }
      .q-card--bordered {
        border: 2px solid #c5c5c5;
      }
      .q-card__section--vert {
        padding: 10px 17px;
        // height: 127px;
      }
      .text-overline_2 {
        margin-top: 6px;
        font-size: 0.8rem;
        font-weight: 500;
        line-height: 2rem;
        letter-spacing: 0.16667em;
      }
      .q-img {
        position: relative;
        // border: 1px solid black;
        padding-bottom: 5px;
        &::after {
          content: '';
          width: 90%;
          height: 100%;
          // background: grey;
          border-bottom: 1px dotted grey;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, 0);
        }
      }
      .q-focus-helper,
      .q-focusable,
      .q-manual-focusable,
      .q-hoverable {
        background: rgb(229 229 229 / 80%);
        width: 100%;
      }
      //
      .bank_pay {
        // width: 30%;
        // margin-right: 30px;
        // background: pink;
        position: relative;
        .choice {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: ease-in-out 0.5s;
        }
        .q-card {
          box-shadow: none;
          .pay_text {
            font-size: 0.85rem;
          }
        }
      }
      .CVS_pay {
        // width: 30%;
        position: relative;
        // margin-right: 30px;
        .choice {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: ease-in-out 0.5s;
        }
        .q-card {
          box-shadow: none;
          .pay_text {
            font-size: 0.85rem;
          }
        }
      }
      .card_pay {
        // width: 30%;
        position: relative;
        .choice {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          position: absolute;
          top: -28px;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: ease-in-out 0.5s;
        }
        .q-card {
          box-shadow: none;
          .pay_text {
            font-size: 0.85rem;
          }
          .q-table__card {
            width: 90%;
            color: #000;
            /* background-color: #fff; */
            border-radius: 4px;
            box-shadow: none;
            border: 1px solid grey;
          }
        }
      }
    }
    .arrow {
      margin-top: 40px;
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      .material-icons {
        font-size: 33px;
        color: grey;
      }
    }
    .order_sure_ {
      margin-top: 40px;
      margin-bottom: 80px;
      width: 100%;
      text-align: center;
      .order_sure_button {
        width: 200px;
        height: 45px;
      }
    }
  }
}

.address_enter_list {
  .q-field__control {
    color: grey;
    height: 45px;
    max-width: 90%;
    outline: none;
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .q-field--labeled .q-field__native,
  .q-field--labeled .q-field__prefix,
  .q-field--labeled .q-field__suffix {
    line-height: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .q-field--standard .q-field__control:after {
    height: 1px;
    top: auto;
    transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .q-field__control:before,
  .q-field__control:after {
    content: '';
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0px;
    left: 0;
    pointer-events: none;
  }
}
</style>
