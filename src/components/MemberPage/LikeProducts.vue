<template>
  <div class="container">
    <div class="content">
      <div class="like-breadcrumbs">
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
      <div class="like-title">お気に入り商品</div>
      <div class="like-not-login" v-if="user_mail.length === 0">
        <router-link to="/login" class="text"
          >！ログインしてください</router-link
        >
      </div>
      <div class="like-login" v-else>
        <div class="empty-wrapper" v-if="user_data.like_items.length === 0">
          <p>
            <span class="material-icons"> search_off </span>何も入っていません
          </p>
        </div>
        <div class="content-wrapper" v-else>
          <div
            class="like-item"
            v-for="item in user_data.like_items"
            :key="item"
          >
            <div class="like-day">
              <span class="material-icons"> favorite </span> お気に入り日:
              {{ item.LikeDate }}
            </div>
            <div class="like-link-wrapper" @click="ToPage(item)">
              <div class="img-box">
                <div class="img-con">
                  <img :src="item.LikePic" alt="" />
                </div>
              </div>
              <div class="text">
                <div class="title">{{ item.LikeName }}</div>
                <div class="price">￥{{ item.LikePrice }}（税込）</div>
              </div>
            </div>
            <div class="toShopping" @click="ToPage(item)">
              <span class="material-icons"> open_in_new </span> 商品ページへ
            </div>
            <div class="deleteButton" @click="deleteLike(item)">
              <span class="material-icons"> delete </span> 削除
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { useinfoType, LikeItemType } from '@/utils/Type'

export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    const user_mail = store.state.LoginModule.userInfo.mail
    const user_data = reactive({
      _id: '',
      name: '',
      mail: '',
      password: '',
      like_items: []
    })

    onMounted(() => {
      axios.get(process.env.VUE_APP_API + '/users').then((res) => {
        if (res.data.success) {
          // user資料
          const db_user = res.data.result.filter((item: useinfoType) => {
            return item.mail === user_mail && user_mail.length !== 0
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

    const ToPage = (item: LikeItemType) => {
      router.push({
        name: 'Product',
        params: {
          product_id: item.Likeid
        }
      })
    }

    const deleteLike = (item: LikeItemType) => {
      const index = user_data.like_items.findIndex((aitem: LikeItemType) => {
        return (
          aitem.LikeName === item.LikeName && aitem.LikeColor === item.LikeColor
        )
      })
      const NewUserLikeItems = user_data.like_items.splice(index, 1)
      axios
        .patch(process.env.VUE_APP_API + '/users/' + user_data._id, user_data)
        .then((res) => {
          if (res.data.success) {
            axios.get(process.env.VUE_APP_API + '/users').then((res) => {
              if (res.data.success) {
                // user資料
                const db_user = res.data.result.filter((item: useinfoType) => {
                  return item.mail === user_mail
                })
                const s_user_data = JSON.stringify(db_user)
                const o_user_data = JSON.parse(s_user_data)
                user_data._id = o_user_data[0]._id
                user_data.like_items = o_user_data[0].like
              }
            })
          }
        })
    }

    return {
      user_mail,
      user_data,
      ToPage,
      deleteLike
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/common.css';
.container {
  font-family: 'NotoSansJP-R';
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  // background: rgba(219, 219, 219, 0.3);
  .like-breadcrumbs {
    margin-top: 30px;
    width: 100%;
    padding-left: 5px;
    background: #e3e3e3;
    .breadcrumbs-el {
      &:hover {
        color: grey;
        text-decoration: underline;
      }
    }
  }
  //
  @media (min-width: 1100px) {
    .content {
      width: 1100px;

      .like-item {
        width: 25%;
        .like-day {
          font-size: 13px;
        }
        .like-link-wrapper {
          .img-box {
            width: 63%;
          }
          .text {
            width: 63%;
            font-size: 14px;
          }
        }
        .toShopping,
        .deleteButton {
          width: 63%;
        }
      }
    }
  }
  @media (max-width: 1099px) {
    .content {
      width: 100%;
      .content-wrapper {
        margin-left: 5px;
        .like-item {
          width: 33%;
          .like-day {
            font-size: 13px;
          }
          .like-link-wrapper {
            .img-box {
              width: 61%;
            }
            .text {
              width: 61%;
              font-size: 14px;
            }
          }
          .toShopping,
          .deleteButton {
            width: 61%;
          }
        }
      }
    }
  }

  @media (min-width: 770px) and (max-width: 855px) {
    .content {
      width: 100%;
      .content-wrapper {
        margin-left: 5px;
        .like-item {
          width: 33%;
          .like-link-wrapper {
            .img-box {
              width: 63%;
            }
            .text {
              width: 63%;
              font-size: 13px;
            }
          }
          .toShopping,
          .deleteButton {
            width: 63%;
          }
        }
      }
    }
  }

  @media (max-width: 769px) {
    .content {
      width: 100%;
      .content-wrapper {
        margin-left: 5px;
        .like-item {
          width: 33%;
          .like-link-wrapper {
            .img-box {
              width: 69%;
            }
            .text {
              width: 70%;
              font-size: 13px;
            }
          }
          .toShopping,
          .deleteButton {
            width: 70%;
          }
        }
      }
    }
  }
  @media (max-width: 697px) {
    .content {
      width: 100%;
      .content-wrapper {
        margin-left: 8px;
        .like-item {
          width: 49%;
          .like-link-wrapper {
            .img-box {
              width: 69%;
            }
            .text {
              width: 70%;
              font-size: 13px;
            }
          }
          .toShopping,
          .deleteButton {
            width: 70%;
          }
        }
      }
    }
  }

  .content {
    // width: 1100px;
    // height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    padding: 0 5px;
    .like-title {
      margin-top: 23px;
      padding-left: 5px;
      width: 100%;
      font-size: 23px;
      font-weight: bold;
      border-bottom: 2px solid #000;
      padding-bottom: 5px;
    }
    .like-not-login {
      width: 100%;
      .text {
        display: block;
        font-size: 19px;
        color: #dd940b;
        margin-top: 20px;
      }
    }
    .like-login {
      width: 100%;
    }
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
      margin-top: 30px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .like-item {
        padding: 10px 0px;
        // width: 25%;
        /* background: pink; */
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px dotted rgb(163, 163, 163);
        margin-right: -1px;
        margin-bottom: -1px;
        .material-icons {
          margin-left: -2px;
          font-size: 14px;
          line-height: 2;
        }
        .like-day {
          margin-bottom: 2px;
          color: #f7568b;
        }
        .like-link-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
          .img-box {
            // width: 63%;
            height: auto;
            // border: 1px solid black;
            border: 1px solid #c17878b0;
            position: relative;
            &::after {
              content: '';
              width: 100%;
              height: 100%;
              background: rgba(120, 120, 120, 0.25);
              position: absolute;
              left: 0;
              top: 0;
              opacity: 0;
            }
            &:hover::after {
              opacity: 1;
              transition: opacity 0.3 ease;
            }
            .img-con {
              width: 100%;
              height: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
          .text {
            margin-top: 13px;
            // width: 63%;
            // font-size: 14px;
            font-weight: bold;
            .title {
            }
            .price {
              color: red;
              margin-top: 3px;
            }
          }
        }
        .toShopping {
          margin-top: 10px;
          // width: 63%;
          height: 30px;
          line-height: 28px;
          // border: 1px solid #ef7c7c;
          border-radius: 5px;
          text-align: center;
          background: #7893af;
          color: #ffffff;
          &:hover {
            background: #455f7a;
            cursor: pointer;
          }
        }
        .deleteButton {
          margin-top: 8px;
          margin-bottom: 10px;
          // width: 63%;
          height: 30px;
          line-height: 28px;
          border: 1px solid grey;
          border-radius: 5px;
          text-align: center;
          &:hover {
            background: #e1e1e1;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
