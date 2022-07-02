<template>
  <div class="order-container">
    <div class="content">
      <div class="order-breadcrumbs">
        <q-breadcrumbs class="text-black">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="grey" />
          </template>
          <q-breadcrumbs-el label="ホーム" to="/" class="breadcrumbs-el" />
          <q-breadcrumbs-el
            label="プロフィール"
            to="/shopping"
            class="breadcrumbs-el"
          />
          <q-breadcrumbs-el label="お気に入り" class="" />
        </q-breadcrumbs>
      </div>
      <div class="orderinfo-title">注文履歴</div>
      <div class="order-not-login" v-if="user_mail.length === 0">
        <router-link to="/login" class="text"
          >！ログインしてください</router-link
        >
      </div>
      <div class="order-login" v-else>
        <div class="empty-wrapper" v-if="orderNotFoundIndex === -1">
          <p>
            <span class="material-icons"> search_off </span>何も入っていません
          </p>
        </div>
        <div class="content-wrapper" v-else>
          <div class="order-wrapper" v-for="order in userorders" :key="order">
            <div class="order-top">
              <div class="order-date">
                <div class="order-date-tag">注文日付</div>
                <div class="order-date-text">{{ order.date }}</div>
              </div>
              <div class="order-id">
                <div class="order-id-tag">受注番號</div>
                <div class="order-id-text">{{ order._id }}</div>
              </div>
              <div class="order-total">
                <div class="order-total-tag">合計(税込)</div>
                <div class="order-total-text">￥{{ order.AllTotalPrice }}</div>
              </div>
              <div class="order-delievery">
                <div class="order-delievery-tag">出荷狀況</div>
                <div class="order-delievery-text">未出荷</div>
              </div>
            </div>
            <div class="order-bottom">
              <div class="order-pic">
                <div class="img-box" @click="toShopping(order)">
                  <div class="img-con">
                    <img :src="order.cartItems[0].pic" alt="" />
                  </div>
                </div>
              </div>
              <div class="order-name" @click="toShopping(order)">
                <div class="name-wrapper">
                  <div class="number-wrapper">
                    <div class="number-tag">商品番号:&nbsp;</div>
                    <div class="number-text">
                      {{ order.cartItems[0].number }}
                    </div>
                  </div>
                  <div class="name-text">
                    {{ order.cartItems[0].name }}
                    <span style="font-size: 16px; color: grey">
                      - {{ order.cartItems[0].color }}</span
                    >
                  </div>
                  <div class="price-wrapper">
                    <div class="price-text">
                      <span
                        class="price-tag"
                        style="color: grey; font-size: 14px"
                        >価格</span
                      >
                      ￥{{ order.cartItems[0].price
                      }}<span style="font-size: 12px"> (税込)</span>
                    </div>
                  </div>
                  <div class="TotalQuantity">...など、詳細は注文明細へ</div>
                </div>
              </div>
              <div class="order-other">
                <div class="order-other-buttonTop" @click="OpenDetail(order)">
                  <p>注文明細へ</p>
                </div>
                <div class="order-other-buttonBottom"><p>問い合わせへ</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- DetailDialog -->
    <q-dialog v-model="DetailDialog">
      <q-layout view="Lhh lpR fff" container class="bg-white">
        <q-header class="bg-black">
          <q-toolbar>
            <q-toolbar-title>注文明細</q-toolbar-title>
            <q-btn flat v-close-popup round dense icon="close" />
          </q-toolbar>
        </q-header>
        <q-page-container>
          <q-page padding>
            <!-- content -->
            <!-- order date & order number -->
            <div class="DetailDialogContainer">
              <div class="detail_order_date">
                ・注文日:
                <span style="font-weight: bold"
                  >&nbsp;{{ userorders[orderindex].date }}</span
                >
              </div>
              <!-- order-content -->
              <div class="detail_order_number">
                ・受注番號:
                <span style="font-weight: bold"
                  >&nbsp;{{ userorders[orderindex]._id }}</span
                >
              </div>
              <table>
                <tbody>
                  <tr>
                    <th class="DetailPic">商品</th>
                    <th class="DetailName">商品名</th>
                    <th class="DetailColor">カラー</th>
                    <th class="DetailQuantity">数量</th>
                    <th class="DetailPrice">価格（税込）</th>
                  </tr>
                  <tr
                    v-for="item in userorders[orderindex].cartItems"
                    :key="item._id"
                  >
                    <td class="img-wrapper">
                      <div class="img-box">
                        <div class="img-con">
                          <img :src="item.pic" alt="" />
                        </div>
                      </div>
                    </td>
                    <td>
                      <!-- <div class="number">58237857865214</div> -->
                      <div class="name">{{ item.name }}</div>
                    </td>
                    <td>{{ item.color }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>￥{{ item.price }}</td>
                  </tr>
                </tbody>
              </table>
              <!-- 送料 -->
              <div class="detail_shipping">
                <div class="detail_shipping-left">送料</div>
                <div class="detail_shipping-right">
                  ￥{{ userorders[orderindex].ShippingFee }}
                </div>
              </div>
              <!-- 合計 -->
              <div class="detail_total">
                <div class="detail_total-left">合計</div>
                <div class="detail_total-right">
                  ￥{{ userorders[orderindex].AllTotalPrice }}
                </div>
              </div>
              <!-- order pay & order address -->
              <div class="detail_order_pay">
                <div class="detail_order_pay_title">お支払い方法</div>
                <div class="detail_order_pay_text">
                  {{ userorders[orderindex].pay }}
                </div>
              </div>
              <div class="detail_order_address">
                <div class="detail_order_address_title">配送先</div>
                <div class="detail_order_address_text">
                  <div class="name address_text_common">
                    {{ userorders[orderindex].name }}
                  </div>
                  <div class="post address_text_common">
                    {{ userorders[orderindex].post }}
                  </div>
                  <div class="address address_text_common">
                    {{ userorders[orderindex].address }}
                  </div>
                  <div class="phone address_text_common">
                    {{ userorders[orderindex].phone }}
                  </div>
                </div>
              </div>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
    </q-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'

export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    const user_mail = store.state.LoginModule.userInfo.mail
    const userorders = ref()
    const DetailDialog = ref(false)
    const orderindex = ref()
    const orderNotFoundIndex = ref(0)

    onMounted(() => {
      axios.get(process.env.VUE_APP_API + '/orders').then((res) => {
        if (res.data.success) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const index = res.data.result.findIndex((item: any) => {
            return item.user_mail === user_mail
          })
          orderNotFoundIndex.value = index
          // console.log(index)
          // orders資料
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const db_order = res.data.result.filter((item: any) => {
            return item.user_mail === user_mail && item.user_mail.length !== 0
          })
          // const s_user_data = JSON.stringify(db_order)
          // const o_user_data = JSON.parse(s_user_data)
          userorders.value = db_order
          console.log(userorders)
        }
      })
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toShopping = (order: any) => {
      router.push({
        name: 'Product',
        params: {
          product_id: order.cartItems[0]._id
        }
      })
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const OpenDetail = (order: any) => {
      DetailDialog.value = true
      console.log(order)
      const temporderindex = userorders.value.indexOf(order)
      orderindex.value = temporderindex
      console.log(order)
    }
    return {
      user_mail,
      orderNotFoundIndex,
      userorders,
      toShopping,
      OpenDetail,
      DetailDialog,
      orderindex
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/common.css';
.order-container {
  width: 100%;
  font-family: 'NotoSansJP-R';
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
  margin-bottom: 30px;
  @media (min-width: 1100px) {
    .content {
      width: 1100px;
      .order-wrapper {
        height: 235px;
        .order-top {
          .order-date-text,
          .order-id-text,
          .order-delievery-text {
            font-size: 15px;
          }
        }
        .order-bottom {
          display: flex;
          .order-name {
            width: 44%;
            .name-wrapper {
              border-right: 1px dotted #000;
              .TotalQuantity {
                margin-top: 30px;
                width: 180px;
                font-size: 14px;
                color: rgb(27, 99, 112);
                background: rgba(204, 204, 204, 0.3);
              }
            }
          }
          .order-pic {
            width: 18%;
            height: 100%;
            // background: orange;
            display: flex;
            align-items: center;
            justify-content: center;
            // border-right: 1px solid grey;
            padding-left: 10px;
            .img-box {
              width: 75%;
              height: 85%;
              position: relative;
              &::after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background: rgba(92, 92, 92, 0.2);
                opacity: 0;
              }
              &:hover {
                cursor: pointer;
              }
              &:hover::after {
                opacity: 1;
                transition: opacity 0.2s ease;
              }

              .img-con {
                width: 100%;
                height: 100%;
                img {
                  width: 100%;
                  height: 100%;
                  // border-radius: 0px 0px 0px 10px;
                }
              }
            }
          }
          .order-other {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 38%;
            &-buttonTop {
              margin-top: 23px;
              width: 73%;
              height: 50px;
              p {
                line-height: 50px;
              }
            }
            &-buttonBottom {
              margin-top: 15px;
              width: 73%;
              height: 50px;
              p {
                line-height: 50px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 1099px) {
    .content {
      width: 95%;
      .order-wrapper {
        height: 230px;
        .order-top {
          .order-date-text,
          .order-id-text,
          .order-delievery-text {
            font-size: 15px;
          }
        }
        .order-bottom {
          display: flex;
          .order-name {
            width: 44%;
            .name-wrapper {
              border-right: 1px dotted #000;
              .TotalQuantity {
                margin-top: 30px;
                width: 180px;
                font-size: 14px;
                color: rgb(27, 99, 112);
                background: rgba(204, 204, 204, 0.3);
              }
            }
          }
          .order-pic {
            width: 18%;
            height: 100%;
            // background: orange;
            display: flex;
            align-items: center;
            justify-content: center;
            // border-right: 1px solid grey;
            padding-left: 10px;
            .img-box {
              width: 75%;
              height: 85%;
              position: relative;
              &::after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background: rgba(92, 92, 92, 0.2);
                opacity: 0;
              }
              &:hover {
                cursor: pointer;
              }
              &:hover::after {
                opacity: 1;
                transition: opacity 0.2s ease;
              }

              .img-con {
                width: 100%;
                height: 100%;
                img {
                  width: 100%;
                  height: 100%;
                  // border-radius: 0px 0px 0px 10px;
                }
              }
            }
          }
          .order-other {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 38%;
            &-buttonTop {
              margin-top: 23px;
              width: 73%;
              height: 50px;
              p {
                line-height: 50px;
              }
            }
            &-buttonBottom {
              margin-top: 15px;
              width: 73%;
              height: 50px;
              p {
                line-height: 50px;
              }
            }
          }
        }
      }
    }
  }
  @media (max-width: 840px) {
    .content {
      width: 95%;
      .order-wrapper {
        height: 215px;
        .order-bottom {
          display: flex;
          .order-name {
            width: 65%;
            .name-wrapper {
              .TotalQuantity {
                margin-top: 18px;
              }
            }
          }
          .order-pic {
            display: none;
          }
          .order-other {
            width: 35%;
            &-buttonTop {
              margin-top: 23px;
              width: 75%;
              height: 50px;
            }
            &-buttonBottom {
              margin-top: 15px;
              width: 75%;
              height: 50px;
            }
          }
        }
      }
    }
  }
  @media (max-width: 610px) {
    .content {
      width: 95%;
      .order-wrapper {
        height: 219px;
        .order-top {
          .order-date-text,
          .order-id-text,
          .order-delievery-text {
            font-size: 14px;
          }
        }
        .order-bottom {
          display: flex;
          flex-direction: column;
          .order-name {
            width: 95%;
            .name-wrapper {
              border-right: 1px dotted transparent;
              .TotalQuantity {
                display: none;
              }
            }
          }
          .order-pic {
            display: none;
          }
          .order-other {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            margin-bottom: 13px;
            &-buttonTop {
              width: 43%;
              height: 40px;
              margin-top: -25px;
              margin-right: 8px;
              p {
                line-height: 40px;
              }
            }
            &-buttonBottom {
              width: 43%;
              height: 40px;
              margin-top: -25px;
              p {
                line-height: 40px;
              }
            }
          }
        }
      }
    }
  }
  .content {
    // width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    padding: 0 5px;
    .order-breadcrumbs {
      width: 100%;
      margin-top: 30px;
      padding-left: 5px;
      background: #e3e3e3;
      .breadcrumbs-el {
        &:hover {
          color: grey;
          text-decoration: underline;
        }
      }
    }
    .orderinfo-title {
      width: 100%;
      margin-top: 23px;
      padding-left: 5px;
      font-size: 23px;
      font-weight: bold;
      border-bottom: 2px solid #000;
      padding-bottom: 5px;
    }
    .order-not-login {
      width: 100%;
      .text {
        display: block;
        font-size: 19px;
        color: #dd940b;
        margin-top: 20px;
      }
    }
    .order-login {
      width: 100%;
      .empty-wrapper {
        margin-top: 12px;
        width: 100%;
        display: flex;
        p {
          font-size: 20px;
          color: grey;
          .material-icons {
            font-size: 33px;
          }
        }
      }
      .content-wrapper {
        width: 100%;
        .order-wrapper {
          margin-top: 15px;
          width: 98%;
          display: flex;
          flex-direction: column;
          // height: 235px;
          border: 1px solid rgb(121, 121, 121);
          border-radius: 10px;
          .order-top {
            width: 100%;
            height: 28%;
            // background: pink;
            display: flex;
            .order-date {
              width: 17%;
            }
            .order-id {
              width: 45%;
            }
            .order-total,
            .order-delievery {
              width: 18%;
            }
            .order-date {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left: 10px;
              &-tag {
                font-size: 12px;
                color: grey;
              }
              // &-text {
              //   font-size: 15px;
              // }
            }
            .order-id {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left: 10px;
              &-tag {
                font-size: 12px;
                color: grey;
              }
              // &-text {
              //   font-size: 15px;
              // }
            }
            .order-delievery {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left: 10px;
              &-tag {
                font-size: 12px;
                color: grey;
              }
              // &-text {
              //   font-size: 15px;
              // }
            }
            .order-total {
              display: flex;
              flex-direction: column;
              justify-content: center;
              padding-left: 10px;
              &-tag {
                font-size: 12px;
                color: grey;
              }
              &-text {
                font-size: 15px;
                color: red;
              }
            }
          }
          .order-bottom {
            border-top: 1px dotted grey;
            width: 100%;
            height: 72%;

            .order-name {
              padding-left: 20px;
              height: 100%;
              // background: rgb(80, 117, 80);
              display: flex;
              align-items: center;
              justify-content: center;
              // border-right: 1px dotted black;
              &:hover {
                text-decoration: underline;
                cursor: pointer;
              }
              .number-wrapper {
                // margin-top: 5px;
                display: flex;
                color: grey;
                font-size: 13px;
              }
              .name-wrapper {
                margin-top: 1px;
                width: 100%;
                height: 72%;
                // background: wheat;
                display: flex;
                flex-direction: column;
                // border-right: 1px dotted #000;

                .name-text {
                  font-size: 17px;
                }
                .color-wrapper {
                  // margin-top: 3px;
                  display: flex;
                  .color-tag {
                    // width: 20px;
                    margin-right: 8px;
                    height: 20px;
                    background: rgba(204, 204, 204, 0.5);
                  }
                  .color-text {
                    color: rgb(0, 0, 0);
                  }
                }
                .price-wrapper {
                  // margin-top: 4px;
                  display: flex;
                  margin-top: 3px;

                  .price-text {
                    margin-top: 3px;
                    font-size: 16px;
                    // color: red;
                  }
                }
              }
            }
            .order-other {
              &-buttonTop {
                border: 1px solid grey;
                border-radius: 5px;
                background: rgb(205, 205, 205, 0.2);
                &:hover {
                  cursor: pointer;
                  background: black;
                  transition: background 0.2s ease;
                }
                &:hover p {
                  color: white;
                }
                p {
                  width: 100%;
                  font-size: 17px;
                  text-align: center;
                  // line-height: 50px;
                }
              }
              &-buttonBottom {
                border: 1px solid grey;
                border-radius: 5px;
                background: rgb(205, 205, 205, 0.2);
                &:hover {
                  cursor: pointer;
                  background: black;
                  transition: background 0.2s ease;
                }
                &:hover p {
                  color: white;
                }
                p {
                  width: 100%;
                  font-size: 17px;
                  text-align: center;
                  // line-height: 50px;
                }
              }
            }
            .order-comment {
            }
          }
        }
      }
    }
  }
}
@media (min-width: 600px) {
  .q-dialog__inner--minimized > div {
    max-width: 1200px;
  }
}

//
.q-toolbar__title {
  font-size: 17px;
}
.DetailDialogContainer {
  font-family: 'NotoSansJP-R';
  width: 100%;
  // height: 800px;
  // background: rgba(192, 192, 192, 0.5);
  display: flex;
  flex-direction: column;
  // align-items: center;
  @media (min-width: 1200px) {
    table {
      th,
      td {
        font-size: 15px;
      }
    }
    .DetailPic {
      width: 16%;
    }
    .DetailName {
      width: 35%;
    }
    .DetailColor {
      width: 20%;
    }
    .DetailPrice {
      width: 17%;
    }
    .DetailQuantity {
      width: 12%;
    }
    .img-wrapper {
      .img-box {
        width: 100%;
        // height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .img-con {
          // width: 54%;
          height: 78px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .detail_shipping,
    .detail_total {
      padding-left: 71%;
      &-left {
        width: 40%;
        text-align: center;
      }

      &-right {
        width: 60%;
        text-align: center;
      }
    }

    .detail_order_pay,
    .detail_order_address {
      &_title {
        width: 16%;
      }
      &_text {
        width: 80%;
        padding: 6px;
      }
    }
  }

  @media (max-width: 1199px) {
    table {
      th,
      td {
        font-size: 15px;
      }
    }
    .DetailPic {
      width: 16%;
    }
    .DetailName {
      width: 35%;
    }
    .DetailColor {
      width: 20%;
    }
    .DetailPrice {
      width: 17%;
    }
    .DetailQuantity {
      width: 12%;
    }
    .img-wrapper {
      .img-box {
        width: 100%;
        // height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .img-con {
          // width: 62%;
          height: 78px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .detail_shipping,
    .detail_total {
      padding-left: 71%;
      &-left {
        width: 40%;
        text-align: center;
      }

      &-right {
        width: 60%;
        text-align: center;
      }
    }
    .detail_order_pay,
    .detail_order_address {
      &_title {
        width: 16%;
      }
      &_text {
        width: 80%;
        padding: 6px;
      }
    }
  }
  @media (max-width: 996px) {
    .img-wrapper {
      .img-box {
        width: 100%;
        // height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .img-con {
          // width: 69%;
          height: 78px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  @media (max-width: 699px) {
    table {
      th,
      td {
        font-size: 12px;
        height: 42px;
      }
    }
    .DetailPic {
      display: none;
    }
    .DetailName {
      width: 40%;
      font-size: 12px;
    }
    .DetailColor {
      width: 25%;
      font-size: 12px;
    }
    .DetailPrice {
      width: 21%;
      font-size: 12px;
    }
    .DetailQuantity {
      width: 14%;
      font-size: 12px;
    }
    .img-wrapper {
      display: none;
      .img-box {
      }
    }
    .detail_shipping,
    .detail_total {
      padding-left: 0%;
      &-left {
        width: 85%;
        text-align: left;
        padding-left: 15px;
      }

      &-right {
        width: 15%;
      }
    }
    .detail_order_pay,
    .detail_order_address {
      &_title {
        width: 40%;
      }
      &_text {
        width: 60%;
      }
    }
  }
  .detail_order_date {
    width: 99%;
    margin-bottom: 5px;
    border-bottom: 1px dotted #28787a;
    padding-bottom: 5px;
    color: #28787a;
  }
  .detail_order_number {
    width: 99%;
    margin-bottom: 15px;
    color: #28787a;
  }
  table {
    width: 99%;
    border-collapse: collapse;
    // background: rgba(228, 175, 175, 0.5);
    text-align: center;
    th {
      background: rgba(226, 226, 226, 0.7);
      height: 35px;
    }
    td {
      // height: 88px;
      padding: 5px 0;
    }
    th,
    td {
      border: 1px solid rgb(97, 90, 90);
      // font-size: 15px;
    }

    .number {
      font-size: 12px;
      color: grey;
    }
    .name {
    }
  }
  .detail_shipping {
    width: 99%;
    height: 35px;
    background: rgba(233, 232, 232, 0.5);
    border-left: 1px solid rgb(97, 90, 90);
    border-right: 1px solid rgb(97, 90, 90);
    border-bottom: 1px solid rgb(97, 90, 90);
    // padding-left: 71%;
    display: flex;
    &-left {
      // width: 40%;
      height: 35px;
      line-height: 35px;
      // background: pink;
    }
    &-right {
      // width: 60%;
      height: 35px;
      line-height: 35px;
      // background: green;
    }
  }
  .detail_total {
    width: 99%;
    height: 35px;
    background: rgba(233, 232, 232, 0.5);
    border-left: 1px solid rgb(97, 90, 90);
    border-right: 1px solid rgb(97, 90, 90);
    border-bottom: 1px solid rgb(97, 90, 90);
    // padding-left: 71%;
    display: flex;
    &-left {
      // width: 40%;
      height: 35px;
      line-height: 35px;
      // background: pink;
    }
    &-right {
      // width: 60%;
      height: 35px;
      line-height: 35px;
      // background: green;
    }
  }
  .detail_order_pay {
    margin-top: 35px;
    width: 99%;
    display: flex;
    border: 1px dotted rgb(10, 10, 10);
    height: 50px;
    &_title {
      // width: 16%;
      height: 100%;
      background: rgba(189, 189, 189, 0.3);
      line-height: 50px;
      text-align: center;
      border-right: 1px dotted rgb(97, 97, 97);
    }
    &_text {
      // width: 80%;
      line-height: 37px;
      padding-left: 10px;
    }
  }
  .detail_order_address {
    width: 99%;
    border: 1px dotted rgb(10, 10, 10);
    margin-top: -1px;
    display: flex;
    padding: 5px, 0;
    &_title {
      // width: 16%;
      // height: 100%;
      background: rgba(189, 189, 189, 0.3);
      border-right: 1px dotted rgb(97, 97, 97);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &_text {
      // width: 80%;
      display: flex;
      flex-direction: column;
      .address_text_common {
        margin-top: 3px;
        padding-left: 10px;
      }
      .name {
        margin-top: 5px;
      }
      .phone {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
