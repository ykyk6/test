<template>
  <div class="product-container">
    <div class="content">
      <div class="category"></div>
      <div class="product-breadcrumbs">
        <q-breadcrumbs class="text-black">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="grey" />
          </template>
          <q-breadcrumbs-el label="ホーム" to="/" class="breadcrumbs-el" />
          <q-breadcrumbs-el
            label="ショッピング"
            to="/shopping"
            class="breadcrumbs-el"
          />
          <q-breadcrumbs-el
            :label="CurrentProductIdItem.type"
            to="/shopping"
            class="breadcrumbs-el"
          />
        </q-breadcrumbs>
      </div>
      <!-- 商品內容 -->
      <div class="product_content_wrapper">
        <!-- 商品圖+購物車button -->
        <div class="product_content">
          <div class="left">
            <left-pics :imgs="CurrentProductIdImgs"></left-pics>
          </div>
          <div class="right">
            <div class="right-wrapper">
              <div class="tag">
                <div class="new_tag"><span>NEW</span></div>
                <div class="sale_tag"><span>SALE</span></div>
              </div>
              <div class="brand">
                <span>ブランド：{{ CurrentProductIdItem.brand }}</span>
              </div>
              <div class="name">
                <span>{{ CurrentProductIdItem.name }}</span>
              </div>
              <div class="price">
                <del>￥{{ CurrentProductIdItem.ex_price }}</del>
              </div>
              <div class="sale_price">
                <p>￥{{ CurrentProductIdItem.price }}<span>（税込）</span></p>
              </div>
              <div class="text">
                <span>オーバーサイズで今っぽく♪</span><br />
              </div>
              <!-- choices -->
              <div class="color_choice">
                <div class="title"><p>カラーバリエーション</p></div>
                <!-- choice-items -->
                <div
                  class="color_choice-box"
                  v-for="img in CurrentProductIdImgs"
                  :key="img.color"
                >
                  <div class="img_color_wrapper">
                    <div class="img-box">
                      <div class="img-con">
                        <div class="img">
                          <img :src="img.pic" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="text">
                      <div class="size">{{ img.color }}（Fサイズ）</div>
                      <div class="stock">在庫あり○</div>
                    </div>
                  </div>
                  <div class="add-cart">
                    <div
                      class="add-cart_button"
                      @click="addCart(CurrentProductIdItem, img)"
                    >
                      <span class="material-icons"> shopping_cart </span>
                      カートに入れる
                    </div>
                  </div>
                  <div
                    class="icon"
                    :class="{
                      'icon-notlike': unlike(CurrentProductIdItem, img),
                      'icon-like': like(CurrentProductIdItem, img)
                    }"
                    @click="LikeItem(CurrentProductIdItem, img)"
                  >
                    <span class="material-icons"> favorite_border </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- share -->
        <div class="product-share-wrapper">
          <div class="product-share">
            <div class="title">*この商品をシェアする >></div>
            <div class="share-icons">
              <i class="fab fa-facebook-square"></i>
              <i class="fab fa-twitter"></i>
              <div class="ig"><i class="fab fa-instagram"></i></div>
            </div>
          </div>
        </div>
        <!-- 商品詳細+size -->
        <div class="more">
          <div class="left">
            <div class="left_1">
              <p class="title">サイズ</p>
              <div class="table-wrapper">
                <table class="size-table">
                  <tbody>
                    <tr class="">
                      <th>サイズ</th>
                      <th>身幅</th>
                      <th>着丈</th>
                      <th>裄丈</th>
                      <th>裾幅</th>
                    </tr>
                    <tr>
                      <th>F</th>
                      <td>80cm</td>
                      <td>66cm</td>
                      <td>47cm</td>
                      <td>76cm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="left_2">
              <p class="title">素材</p>
              <div class="text-wrapper">
                <div class="material_text">
                  <span>
                    ●品質／表地 綿 １００％・別布 綿 ９５％・ポリウレタン ５％
                  </span>
                  <span>■バングラデシュ製</span>
                  <div class="material_text_color">
                    <span>※商品のカラーについて</span>
                    <span>
                      ライティング等により実際の色と異なる場合がございます。<br />また、商品の色はお客様がご覧になっているモニター・画面環境などの関係上、実際の色と見え方が多少異なる場合がございます。予めご了承ください。
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="content-wrapper">
              <p class="title">アイテム説明</p>
              <div class="item_text">
                <p>オーバーサイズで今っぽく♪</p>
                <p>
                  ゆったりサイズの裾ラウンドデザインで、さらっと着るだけでおしゃれにキマるＴシャツ。
                </p>
                <span
                  >人にも環境にも優しい高品質なＵＳＡコットン１００％素材に、これからの季節にぴったりな『ＵＶカット』機能付き。
                </span>
                <span> すっきりと着たい方はサイズダウンもおすすめです。 </span>
                <div class="detailed">
                  <table>
                    <tbody>
                      <tr>
                        <th>カテゴリー</th>
                        <td>{{ CurrentProductIdItem.type }}</td>
                      </tr>
                      <tr>
                        <th>ブランド</th>
                        <td>{{ CurrentProductIdItem.brand }}</td>
                      </tr>
                      <tr>
                        <th>品名</th>
                        <td>{{ CurrentProductIdItem.name }}</td>
                      </tr>
                      <tr>
                        <th>品番</th>
                        <td>{{ CurrentProductIdItem.number }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="recommend">
          <p>
            <span class="material-icons" style="font-size: 26px; color: grey">
              recommend
            </span>
            あなたにおすすめの商品
          </p>
        </div>
        <div class="recommend-area">
          <recommend-area :RandomRecommend="RecommendOut"></recommend-area>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import LeftPics from './components/LeftPics.vue'
import { AllItems } from '@/data/shop/AllItems'
import RecommendArea from './components/RecommendArea.vue'
import { OrderProductsType } from './config/OrderProductsType'
import { useQuasar } from 'quasar'
import axios from 'axios'
import { itemType, colorType, useinfoType, LikeItemType } from '@/utils/Type'

export default defineComponent({
  components: {
    LeftPics,
    RecommendArea
  },
  setup() {
    const $q = useQuasar()
    const route = useRoute()
    const store = useStore()
    const user_mail = store.state.LoginModule.userInfo.mail
    let user_data = reactive({
      _id: '',
      name: '',
      mail: '',
      password: '',
      like_items: []
    })
    const current_product_id = route.params.product_id
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const CurrentProductIdItem: any = AllItems.find((item) => {
      return item.id === current_product_id
    })
    const CurrentProductIdImgs = CurrentProductIdItem.img
    // RandomRecommend
    const RandomProductRecommend = AllItems.filter((item) => {
      return item.id !== current_product_id
    })
    const RecommendOut = []
    const num = 10
    while (RecommendOut.length < num) {
      let temp = Math.random() * RandomProductRecommend.length
      RecommendOut.push(RandomProductRecommend.splice(temp, 1))
    }

    // order
    const addCart = (Items: itemType, custom: colorType) => {
      $q.notify({
        icon: 'shopping_cart',
        message: ` <span style="color: white"><strong> ${custom.color}</strong></span> をカートに入れました。`,
        html: true,
        textColor: 'white',
        color: 'black',
        iconColor: 'amber-4',
        position: 'top',
        badgeColor: 'pink',
        timeout: 800
      })
      const OrderProducts: OrderProductsType = {
        mail: '',
        _id: '',
        name: '',
        type: '',
        price: 0,
        number: 0,
        quantity: 0,
        pic: '',
        color: ''
      }
      OrderProducts.mail = user_mail
      OrderProducts._id = Items.id
      OrderProducts.name = Items.name
      OrderProducts.type = Items.type
      OrderProducts.price = Items.price
      OrderProducts.number = Items.number
      OrderProducts.quantity = 1
      OrderProducts.pic = custom.pic
      OrderProducts.color = custom.color
      // console.log(OrderProducts)
      store.commit('addCart', OrderProducts)
    }

    // Like or unLike icon
    const like = (item: itemType, color: colorType) => {
      const index = user_data.like_items.findIndex((aitem: LikeItemType) => {
        return aitem.LikeName === item.name && aitem.LikeColor === color.color
      })
      if (index !== -1) {
        return true
      } else {
        return false
      }
    }
    const unlike = (item: itemType, color: colorType) => {
      const index = user_data.like_items.findIndex((aitem: LikeItemType) => {
        return aitem.LikeName === item.name && aitem.LikeColor === color.color
      })
      if (index === -1) {
        return true
      } else {
        return false
      }
    }

    // CheckandGetUserInfo
    onMounted(() => {
      axios.get(process.env.VUE_APP_API + '/users/').then((res) => {
        if (res.data.success) {
          // user資料
          const db_user = res.data.result.filter((item: useinfoType) => {
            return item.mail === user_mail
          })
          const s_user_data = JSON.stringify(db_user)
          const o_user_data = JSON.parse(s_user_data)
          user_data._id = o_user_data[0]._id
          user_data.name = o_user_data[0].name
          user_data.mail = o_user_data[0].mail
          user_data.password = o_user_data[0].password
          user_data.like_items = o_user_data[0].like
        }
      })
    })
    // ItemsLike
    const LikeItem = (item: itemType, color: colorType) => {
      if (!user_mail) {
        alert('ログインしてください')
      } else {
        const index = user_data.like_items.findIndex((aitem: LikeItemType) => {
          return aitem.LikeName === item.name && aitem.LikeColor === color.color
        })
        if (index === -1) {
          // 時間戳
          const day = new Date()
          const getMonth = day.getMonth() + 1
          const thedate =
            day.getFullYear() + '/' + getMonth + '/' + day.getDate()
          // 提交
          axios
            .post(process.env.VUE_APP_API + '/users/' + user_data._id, {
              id: item.id,
              name: item.name,
              price: item.price,
              pic: color.pic,
              color: color.color,
              date: thedate
            })
            .then((res) => {
              if (res.data.success) {
                // alert('success')
                $q.notify({
                  icon: 'task_alt',
                  message: ` <span style="color: black"><strong> お気に入りに追加しました </strong></span>`,
                  html: true,
                  textColor: 'black',
                  color: 'grey-13',
                  iconColor: 'red',
                  position: 'top-right',
                  badgeColor: 'pink',
                  timeout: 800
                })
                //
                axios.get(process.env.VUE_APP_API + '/users').then((res) => {
                  if (res.data.success) {
                    // user資料
                    const db_user = res.data.result.filter(
                      (item: useinfoType) => {
                        return item.mail === user_mail
                      }
                    )
                    const s_user_data = JSON.stringify(db_user)
                    const o_user_data = JSON.parse(s_user_data)
                    user_data._id = o_user_data[0]._id
                    user_data.like_items = o_user_data[0].like
                  }
                })
              }
            })
          // .catch((err) => {
          //   console.log(err)
          // })
        } else {
          const S_userLikeItems = JSON.stringify(user_data.like_items)
          const O_userLikeItems = JSON.parse(S_userLikeItems)
          const NewUserLikeItems = O_userLikeItems.splice(index, 1)
          user_data.like_items = O_userLikeItems
          axios
            .patch(
              process.env.VUE_APP_API + '/users/' + user_data._id,
              user_data
            )
            .then((res) => {
              if (res.data.success) {
                // alert('delete success')
                $q.notify({
                  icon: 'delete_forever',
                  message: ` <span style="color: white"><strong> お気に入りから削除しました </strong></span>`,
                  html: true,
                  textColor: 'black',
                  color: 'black',
                  iconColor: 'white',
                  position: 'top-right',
                  badgeColor: 'pink',
                  timeout: 800
                })
                //
                axios.get(process.env.VUE_APP_API + '/users').then((res) => {
                  if (res.data.success) {
                    // user資料
                    const db_user = res.data.result.filter(
                      (item: useinfoType) => {
                        return item.mail === user_mail
                      }
                    )
                    const s_user_data = JSON.stringify(db_user)
                    const o_user_data = JSON.parse(s_user_data)
                    user_data._id = o_user_data[0]._id
                    user_data.like_items = o_user_data[0].like
                  }
                })
              }
            })
        }
      }
    }
    return {
      AllItems,
      CurrentProductIdItem,
      CurrentProductIdImgs,
      RecommendOut,
      addCart,
      LikeItem,
      like,
      unlike
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/common.css';
.product-container {
  width: 100%;
  font-family: 'NotoSansJP-R';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(173, 173, 173, 0.3);
  // background-image: url('@/assets/icon/bg-w.png');
  @media (min-width: 950px) {
    .content {
      width: 1100px;
      padding: 0 32px;
      .breadcrumbs {
        padding-left: 12px;
      }
    }
  }

  @media (max-width: 949px) {
    .content {
      width: 100%;
      .breadcrumbs {
        width: 100%;
        padding-left: 8px;
      }
    }
  }
  .content {
    background: rgba(255, 255, 255, 0.8);
    // width: 1100px;
    padding-top: 20px;
    padding-bottom: 50px;
    .category {
      width: 100%;
      height: 80px;
      background: rgb(250, 121, 16);
      display: none;
    }
    .product-breadcrumbs {
      padding-left: 5px;
      padding-bottom: 16px;
      width: 100%;
      .breadcrumbs-el {
        &:hover {
          color: grey;
          text-decoration: underline;
        }
      }
    }
    .product_content_wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      @media (min-width: 950px) {
        .product_content {
          display: flex;
          flex: row;
          width: 100%;
          .left {
            width: 50%;
            display: flex;
            justify-content: flex-start;
            padding-left: 7px;
          }
          .right {
            width: 50%;
            display: flex;
            justify-content: flex-end;
            padding-right: 7px;
            .right-wrapper {
              .color_choice {
                width: 465px;
                .title {
                  width: calc(98% - 2px);
                  p {
                    &::after {
                      left: 0;
                    }
                  }
                }
                .color_choice-box {
                  width: 98%;
                  .img_color_wrapper {
                    width: 300px;
                    .img-box {
                      width: 50px;
                      margin-left: 10px;
                    }
                    .text {
                      margin-left: 15px;
                      width: 197px;
                    }
                  }
                  .add-cart {
                    width: 148px;
                  }
                }
              }
            }
          }
        }
      }
      @media (max-width: 949px) {
        .product_content {
          display: flex;
          flex-direction: column;
          width: 100%;
          .left {
            width: 100%;
            justify-content: center;
          }
          .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            .right-wrapper {
              .color_choice {
                width: 465px;
                display: flex;
                flex-direction: column;
                align-items: center;
                .title {
                  width: calc(98% - 2px);
                  p {
                    &::after {
                      left: 0;
                    }
                  }
                }
                .color_choice-box {
                  width: 98%;
                  .img_color_wrapper {
                    width: 300px;
                    .img-box {
                      width: 50px;
                      margin-left: 10px;
                    }
                    .text {
                      margin-left: 15px;
                      width: 197px;
                    }
                  }
                  .add-cart {
                    width: 148px;
                  }
                }
              }
            }
          }
        }
      }

      @media (max-width: 594px) {
        .product_content {
          .right {
            display: flex;
            align-items: flex-start;
            .right-wrapper {
              width: 95vw;
              .tag,
              .brand,
              .name,
              .price,
              .sale_price,
              .text {
                padding-left: 10px;
              }
              .color_choice {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0 5px;
                margin-left: 2px;
                .title {
                  width: 100%;
                  padding-left: 8px;
                  p {
                    &::after {
                      left: -4px;
                    }
                  }
                }
                .color_choice-box {
                  width: 100%;
                  .img_color_wrapper {
                    width: 50%;
                    .img-box {
                      display: none;
                    }
                    .text {
                      margin-left: 0px;
                    }
                  }
                  .add-cart {
                    width: 45%;
                  }
                }
              }
            }
          }
        }
      }
      .product_content {
        .left {
          display: flex;
        }
        .right {
          display: flex;
          .right-wrapper {
            padding-left: -10px;
            .tag {
              margin-bottom: 9px;
              .new_tag {
                display: inline-block;
                width: 42px;
                height: 21px;
                background: rgb(0, 0, 0);
                text-align: center;
                span {
                  font-size: 11px;
                  color: white;
                  letter-spacing: 1px;
                }
              }
              .sale_tag {
                margin-left: 6px;
                display: inline-block;
                width: 42px;
                height: 21px;
                background: rgb(226, 33, 33);
                text-align: center;
                span {
                  font-size: 10px;
                  color: white;
                  letter-spacing: 1px;
                }
              }
            }

            .brand {
              margin-bottom: 6px;
              span {
                color: grey;
                font-size: 13px;
                background: rgb(235, 235, 235);
              }
            }
            .name {
              margin-bottom: 15px;
              letter-spacing: -0.5px;
              span {
                display: block;
                width: 413px;
                height: 30px;
                font-size: 26px;
                font-weight: bold;
              }
            }
            .price {
              margin-top: 8px;
              del {
                font-size: 17px;
                color: rgb(153, 153, 153);
                letter-spacing: 1px;
              }
            }
            .sale_price {
              p {
                font-weight: bold;
                letter-spacing: 1px;
                font-size: 30px;
                color: red;
                span {
                  font-size: 15px;
                  color: black;
                  letter-spacing: 0px;
                }
              }
            }
            .text {
              span {
                display: inline-block;
                color: grey;
                font-size: 14px;
              }
            }
            .color_choice {
              margin-top: 10px;
              position: relative;
              .title {
                margin-top: 15px;
                margin-bottom: -14px;
                position: relative;
                // width: calc(98% - 1px);
                p {
                  font-weight: bold;
                  font-size: 15px;
                  padding-bottom: 5px;
                  position: relative;
                  &::after {
                    content: '';
                    width: 100%;
                    height: 100%;
                    border-bottom: 1px dotted black;
                    position: absolute;
                    top: 0;
                    // left: 0;
                  }
                }
              }
              .color_choice-box {
                display: flex;
                align-items: center;
                // width: 100%;
                border-bottom: 1px dotted #4c4c4c;
                padding: 16px 0;
                .img_color_wrapper {
                  display: flex;
                  .img-box {
                    .img-con {
                      width: 47px;
                      height: 57px;
                      border: 1px solid #e3a6a6;
                      position: relative;
                      img {
                        max-width: 100%;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                      }
                    }
                  }
                  .text {
                    // margin-left: 15px;
                    // width: 197px;
                    height: 54px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    line-height: 2;
                    .size {
                      position: relative;
                      padding-bottom: 2px;
                      &::after {
                        content: '';
                        width: 90%;
                        height: 1px;
                        background: rgba(172, 172, 172, 0.5);
                        position: absolute;
                        left: 0;
                        bottom: 0;
                      }
                    }
                    .stock {
                      width: 70%;
                      margin-top: 2px;
                    }
                  }
                }
                .add-cart {
                  // width: 148px;
                  height: 45px;
                  background: rgb(100, 100, 100);
                  border-radius: 6px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  position: relative;
                  background: rgb(0, 0, 0);
                  color: white;
                  &:hover {
                    background: rgb(51, 51, 51);
                    transition: background 0.3s ease in;
                    cursor: pointer;
                  }
                }
                .icon {
                  margin-left: 11px;
                  margin-right: 3px;
                  font-size: 29px;
                  line-height: 28px;
                  color: #fffbfb;
                  width: 49px;
                  height: 45px;
                  padding: 5px;
                  border-radius: 6px;
                  text-align: center;
                  &:hover {
                    background: #e7798d;
                    cursor: pointer;
                  }
                }
              }
            }
          }
        }
      }

      @media (min-width: 950px) {
        .product-share-wrapper {
          .product-share {
            margin-left: 10px;
            width: 270px;
          }
        }
        .more {
          width: 100%;
          display: flex;
          flex-direction: row;
          .left {
            width: 50%;
            align-items: flex-start;
            padding-left: 10px;
            .title {
              width: 470px;
            }
            .left_1 {
              .table-wrapper {
                width: 470px;
              }
            }
            .left_2 {
              .text-wrapper {
                width: 470px;
                .material_text {
                  width: 440px;
                }
              }
            }
          }
          .right {
            width: 50%;
            align-items: flex-end;
            .content-wrapper {
              .title {
                margin-top: 10px;
                width: 470px;
              }
              .item_text {
                width: 440px;
                .detailed {
                  table {
                    width: 445px;
                  }
                }
              }
            }
          }
        }
      }
      @media (max-width: 949px) {
        .product-share-wrapper {
          margin-top: 8px;
          display: flex;
          justify-content: center;
          .product-share {
            width: 465px;
          }
        }
        .more {
          width: 100%;
          display: flex;
          flex-direction: column;
          .left {
            width: 100%;
            align-items: center;
            .title {
              width: 470px;
            }
            .left_1 {
              align-items: center;
              .table-wrapper {
                width: 470px;
              }
            }
            .left_2 {
              align-items: center;
              .text-wrapper {
                width: 470px;
                .material_text {
                  width: 440px;
                }
              }
            }
          }
          .right {
            width: 100%;
            align-items: center;
            .content-wrapper {
              align-items: center;
              .title {
                width: 470px;
                margin-top: 20px;
              }
              .item_text {
                width: 440px;
                .detailed {
                  table {
                    width: 445px;
                  }
                }
              }
            }
          }
        }
      }

      @media (max-width: 594px) {
        .more {
          .left {
            .title {
              width: 100%;
            }
            .left_1 {
              align-items: center;
              .table-wrapper {
                width: 100%;
              }
            }
            .left_2 {
              align-items: center;
              .text-wrapper {
                width: 100%;
                .material_text {
                  width: 93%;
                }
              }
            }
          }
          .right {
            .content-wrapper {
              width: 100%;
              align-items: center;
              .title {
                width: 100%;
              }
              .item_text {
                width: 93%;
                .detailed {
                  table {
                    width: 90%;
                  }
                }
              }
            }
          }
        }
      }

      .more {
        .left {
          display: flex;
          flex-direction: column;
          .title {
            margin-top: 10px;
            padding: 4px 10px;
            font-weight: bold;
            // width: 470px;
            background: rgba(181, 183, 183, 0.3);
            color: rgb(0, 0, 0);
            font-size: 14px;
          }
          .left_1 {
            width: 100%;
            display: flex;
            flex-direction: column;
            // align-items: center;
            .table-wrapper {
              // width: 470px;
              .size-table {
                margin-left: 13px;
                margin-top: 15px;
                border-collapse: collapse;
                text-align: center;
                font-size: 10px;
                th {
                  background: rgba(148, 148, 148, 0.3);
                }
                th,
                td {
                  border: 1px solid rgba(71, 71, 71, 0.8);
                  padding: 0 10px;
                  min-width: 60px;
                  height: 35px;
                }
              }
            }
          }

          .left_2 {
            width: 100%;
            margin-top: 17px;
            display: flex;
            flex-direction: column;
            .text-wrapper {
              .material_text {
                margin-left: 13px;
                // width: 440px;
                span {
                  display: inline-block;
                }
                .material_text_color {
                  border-top: 1px dotted grey;
                  margin-top: 8px;
                  padding-top: 8px;
                }
              }
            }
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          margin-bottom: -15px;
          .content-wrapper {
            // width: 100%;
            display: flex;
            flex-direction: column;
            .title {
              font-weight: bold;
              padding: 4px 10px;
              // width: 470px;
              background: rgba(181, 183, 183, 0.3);
              color: rgb(0, 0, 0);
              font-size: 14px;
            }
            .item_text {
              // width: 440px;
              margin-left: 10px;
              span {
                display: inline-block;
              }
              .detailed {
                margin-top: 20px;
                table {
                  border-collapse: collapse;
                  // width: 445px;
                  font-size: 10px;
                  th {
                    background: rgba(175, 175, 175, 0.6);
                    text-align: left;
                    width: 30%;
                  }
                  td {
                    background: rgba(226, 226, 226, 0.5);
                    width: 70%;
                  }
                  th,
                  td {
                    border: 2px solid rgba(255, 255, 255, 0.8);
                    padding: 7px 20px;
                    height: 30px;
                  }
                }
              }
            }
          }
        }
      }
      .product-share-wrapper {
        width: 100%;
        margin-bottom: 8px;
        .product-share {
          margin-top: 10px;
          display: flex;
          flex-wrap: nowrap;
          // height: 25px;
          line-height: 22px;
          border: 1px solid orange;
          padding: 2px 0px 4px 5px;
          .title {
            display: inline;
            // width: 180px;
            font-weight: bold;
            color: #da7134;
          }
          .share-icons {
            margin-top: 3px;
            margin-left: 12px;
            display: flex;
            .fa-facebook-square {
              color: #1877f2;
              font-size: 20px;
              margin-right: 9px;
              transform: scale(1);
              transition: transform 0.3s ease;
              &:hover {
                transform: scale(1.5);
                transition: transform 0.3s ease;
              }
            }
            .fa-twitter {
              color: rgb(29, 155, 240);
              font-size: 20px;
              margin-right: 9px;
              transform: scale(1);
              transition: transform 0.3s ease;
              &:hover {
                transform: scale(1.5);
                transition: transform 0.3s ease;
              }
            }
            .ig {
              width: 20px;
              height: 20px;
              background: radial-gradient(
                  circle farthest-corner at 35% 90%,
                  #fec564,
                  transparent 50%
                ),
                radial-gradient(
                  circle farthest-corner at 0 140%,
                  #fec564,
                  transparent 50%
                ),
                radial-gradient(
                  ellipse farthest-corner at 0 -25%,
                  #5258cf,
                  transparent 50%
                ),
                radial-gradient(
                  ellipse farthest-corner at 20% -50%,
                  #5258cf,
                  transparent 50%
                ),
                radial-gradient(
                  ellipse farthest-corner at 100% 0,
                  #893dc2,
                  transparent 50%
                ),
                radial-gradient(
                  ellipse farthest-corner at 60% -20%,
                  #893dc2,
                  transparent 50%
                ),
                radial-gradient(
                  ellipse farthest-corner at 100% 100%,
                  #d9317a,
                  transparent
                ),
                linear-gradient(
                  #6559ca,
                  #bc318f 30%,
                  #e33f5f 50%,
                  #f77638 70%,
                  #fec66d 100%
                );
              position: relative;
              border-radius: 5px;
              display: inline-block;
              transform: scale(1);
              transition: transform 0.3s ease;
              .fa-instagram {
                position: absolute;
                left: 49%;
                top: 50%;
                transform: translate(-50%, -50%);
                font-size: 16px;
                color: white;
              }
              &:hover {
                transform: scale(1.5);
                transition: transform 0.3s ease;
              }
            }
          }
        }
      }

      @media (min-width: 950px) {
        .recommend {
          p {
            width: 100%;
          }
        }
      }

      @media (max-width: 949px) {
        .recommend {
          p {
            text-align: center;
          }
        }
      }
      .recommend {
        margin-top: 80px;
        border-top: 1px dotted black;
        p {
          padding-left: 10px;
          margin-top: 20px;
          font-size: 20px;
          font-weight: bold;
        }
      }
      .recommend-area {
        margin-top: 20px;
      }
    }
  }
}
.badgStyle {
  background: #e7798d;
  color: white;
  border: 1px solid rgb(163, 35, 62);
}
.icon-notlike {
  background: #e3a6a6;
}
.icon-like {
  // background: #e7798d;
  background: #ef6e86;
}
</style>
