<template>
  <div class="global">
    <q-layout view="hHh lpR fFf" class="normal-show">
      <!-- normal navbar -->
      <q-header class="header-style" height-hint="98">
        <!-- tab-bar-top -->
        <div>
          <!-- tab bar top -->
          <div
            class="tab-bar-top"
            :class="{
              TabBarTopShow: TabBarTopShow,
              TabBarTopNotShow: TabBarTopNotShow
            }"
          >
            <div class="img-con">
              <img src="@/assets/icon/logo.png" alt="" />
            </div>
          </div>
        </div>
        <!-- tab-bar-bottom -->
        <q-tabs class="tab-bar-bottom-wrapper">
          <!-- <div class="tab-bar-bottom-left">
            <div class="img-con">
              <img src="@/assets/icon/logo.png" alt="" />
            </div>
          </div> -->
          <div class="tab-bar-bottom-right">
            <q-route-tab to="/" label="home" class="" />
            <q-route-tab to="/shopping" label="store" class="" />
            <q-route-tab
              v-if="user().length === 0"
              to="/login"
              label="login"
              class=""
            />
            <q-route-tab
              v-if="user().length !== 0"
              label="logout"
              class=""
              @click="logout"
            />
            <q-route-tab to="/cart" label="cart" class="" />
            <q-route-tab to="/member" label="member" class="right-border" />
            <q-route-tab to="/likeProducts" label="Like" class="right-border" />
            <q-route-tab
              to="/orderHistory"
              label="Order"
              class="right-border"
            />
          </div>
        </q-tabs>
      </q-header>
      <!-- content -->
      <q-page-container>
        <!-- marquee -->
        <marquee-text
          class="marquee"
          :repeat="10"
          :paused="isPaused"
          height="600px"
          @mouseenter="isPaused = !isPaused"
          @mouseleave="isPaused = false"
        >
          <div class="marquee-text">
            <span class="marquee-1"
              ><a href=""
                ><span class="material-icons-outlined icon-1">
                  label_important
                </span>
                ワーナー・ブラザースコレクションが4/29（金）より限定店舗にて発売決定！</a
              ></span
            >
            <span
              ><a href=""
                ><span class="material-icons-outlined icon-2">
                  label_important </span
                >プチプラ最強ショート丈TOPS！</a
              ></span
            >
            <span
              ><a href=""
                ><span class="material-icons-outlined icon-3">
                  label_important
                </span>
                MLB公式ライセンスアイテムの発売が決定！</a
              ></span
            >
          </div>
        </marquee-text>
        <!-- page container -->
        <!-- **佔位 -->
        <router-view />
        <!-- <product-page></product-page> -->
      </q-page-container>
      <!-- small navbar -->
    </q-layout>
    <q-layout
      view="hHh lpR fFf"
      class="small-show"
      :class="{ BarOpenHeight: BarOpen() }"
    >
      <div v-show="!menuOpened" class="small-navbar-space"></div>
      <div
        class="small-navbar"
        :class="{ bg_bk: menuOpened, bg_wt: !menuOpened }"
      >
        <div class="small-img-con">
          <img src="@/assets/icon/logo.png" alt="" />
        </div>
        <div
          class="menu-button"
          :class="{ opened: menuOpened }"
          @click="toggleMenu"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
      <!-- small_navbar -->
      <div v-if="menuOpened" class="menu">
        <div class="menu-bar-01 menu-bar-common" @click="toPage('Home')">
          <p>Home<span class="material-icons icon-show"> home </span></p>
        </div>
        <div class="menu-bar-02 menu-bar-common" @click="toPage('Shopping')">
          <p>Shopping<span class="material-icons icon-show"> store </span></p>
        </div>
        <div class="menu-bar-03 menu-bar-common" @click="toPage('Cart')">
          <p>
            Cart<span class="material-icons icon-show"> shopping_cart </span>
          </p>
        </div>
        <div
          class="menu-bar-04 menu-bar-common"
          @click="toPage('LikeProducts')"
        >
          <p>
            LikeProducts<span class="material-icons icon-show"> favorite </span>
          </p>
        </div>
        <div
          class="menu-bar-05 menu-bar-common"
          @click="toPage('OrderHistory')"
        >
          <p>
            OrderHistory<span class="material-icons icon-show">
              summarize
            </span>
          </p>
        </div>
        <div class="menu-bar-06 menu-bar-common" @click="toPage('Member')">
          <p>
            Profile<span class="material-icons icon-show">
              manage_accounts
            </span>
          </p>
        </div>
        <div
          v-if="user().length === 0"
          class="menu-bar-07 menu-bar-common"
          @click="toPage('Login')"
        >
          <p>Login<span class="material-icons icon-show"> login </span></p>
        </div>
        <div
          v-if="user().length !== 0"
          class="menu-bar-07 menu-bar-common"
          @click="logout"
        >
          <p>Logout<span class="material-icons icon-show"> login </span></p>
        </div>
      </div>
      <!-- content -->
      <q-page-container>
        <!-- marquee -->
        <!-- <marquee-text
          class="marquee"
          :repeat="10"
          :paused="isPaused"
          height="600px"
          @mouseenter="isPaused = !isPaused"
          @mouseleave="isPaused = false"
        >
          <div class="marquee-text">
            <span class="marquee-1"
              ><a href=""
                ><span class="material-icons-outlined icon-1">
                  label_important
                </span>
                ワーナー・ブラザースコレクションが4/29（金）より限定店舗にて発売決定！</a
              ></span
            >
            <span
              ><a href=""
                ><span class="material-icons-outlined icon-2">
                  label_important </span
                >プチプラ最強ショート丈TOPS！</a
              ></span
            >
            <span
              ><a href=""
                ><span class="material-icons-outlined icon-3">
                  label_important
                </span>
                MLB公式ライセンスアイテムの発売が決定！</a
              ></span
            >
          </div>
        </marquee-text> -->
        <!-- page container -->
        <!-- **佔位 -->
        <router-view />
        <!-- <product-page></product-page> -->
      </q-page-container>
    </q-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import MarqueeText from 'vue-marquee-text-component'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'swiper/css'

export default defineComponent({
  components: {
    MarqueeText
  },

  setup() {
    // 跑馬燈控制
    let isPaused = ref(false)
    const store = useStore()
    const loginshow = ref(true)
    const logoutshow = ref(false)
    const router = useRouter()
    const user = () => {
      return store.state.LoginModule.userInfo.mail
    }
    const logout = () => {
      Swal.fire({
        icon: 'info',
        title: 'ログアウトしますか？',
        showCancelButton: true,
        confirmButtonColor: '#000',
        cancelButtonColor: '#d33',
        confirmButtonText: 'はい',
        cancelButtonText: 'キャンセル'
      }).then((result) => {
        const stateLogoutSituation =
          store.state.LoginModule.userInfo.length !== 0
        const sessionLogoutSituation = sessionStorage.getItem('userinfo')
        if (result.isConfirmed) {
          if (stateLogoutSituation && sessionLogoutSituation) {
            {
              axios
                .delete(process.env.VUE_APP_API + '/users/logout')
                .then((res) => {
                  if (res.data.success) {
                    Swal.fire({
                      icon: 'success',
                      title: 'ログアウトしました',
                      text: 'ご利用ありがとうございました。'
                    })
                    store.commit('LoginModule/logoutData')
                    sessionStorage.removeItem('userinfo')
                  }
                })
            }
          } else {
            alert('エラー')
          }
        }
      })
    }

    // small navbar
    const menuOpened = ref(false)
    const toggleMenu = () => {
      menuOpened.value = !menuOpened.value
    }
    const BarOpen = () => {
      if (menuOpened.value) {
        return true
      } else {
        return false
      }
    }
    // small navbar link
    const toPage = (pagename: string) => {
      router.push({
        name: pagename
      })
      menuOpened.value = false
    }

    const TabBarTopShow = ref(true)
    const TabBarTopNotShow = ref(false)
    let offsetHeight = ref(0)
    onMounted(() => {
      // 視窗h值
      window.addEventListener('scroll', () => {
        // console.log(window.pageYOffset)
        if (window.pageYOffset < 400) {
          TabBarTopShow.value = true
          TabBarTopNotShow.value = false
        } else {
          TabBarTopShow.value = false
          TabBarTopNotShow.value = true
        }
      })
    })

    return {
      isPaused,
      slide: ref(1),
      autoplay: ref(true),
      // LoginSituation,
      logout,
      loginshow,
      logoutshow,
      user,
      menuOpened,
      toggleMenu,
      BarOpen,
      toPage,
      TabBarTopShow,
      TabBarTopNotShow
    }
  }
})
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
.global {
  overflow: hidden;
}
.header-style {
  // background: white;
  color: black;
}
.q-layout__section--marginal {
  background-color: transparent;
  // color: #fff;
}
.q-toolbar {
  padding: 0px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.TabBarTophow {
  position: relative;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    visibility: hidden;
  }
}
.TabBarTopNotShow {
  // animation: fadeOut 2s linear 0s infinite;
  opacity: 0;
  position: absolute;
}

.tab-bar-top {
  padding: 3px 0px 0px 0px;
  background: rgb(231, 231, 231);
  width: 100%;
  transition: display 0.3s ease-in;
  height: 55px;
  // display: none;
  .img-con {
    position: absolute;
    left: 50%;
    top: 0;
    width: 320px;
    height: 55px;
    transform: translate(-50%, 0);
    img {
      width: 100%;
      height: 100%;
    }
  }
  // .q-toolbar {
  //   padding: 0px;
  // }
}

.q-tab {
  min-height: 60px;
  width: 120px;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 70%;
    position: absolute;
    left: 0;
    top: 9px;
    border-right: 2px dotted #787878;
  }
  &:nth-child(1) {
    position: relative;
    &::after {
      content: '';
      width: 100%;
      height: 70%;
      position: absolute;
      left: 0;
      top: 9px;
      border-left: 2px dotted #787878;
    }
  }
}

.tab-bar-bottom-wrapper {
  display: flex;
  // background: rgb(255, 255, 255);
  width: 100%;
  .tab-bar-bottom-right {
    display: flex;
    justify-content: center;
    // background: pink;
    width: 100%;
    border: 1px dotted #787878;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(5px);
  }
}

// container
// home-style

.marquee {
  width: 100vw;
  // height: 40px;
  line-height: 40px;
  background: black;
  .marquee-text {
    a {
      margin-right: 6px;
      text-decoration: none;
      color: rgb(255, 255, 255);
      &:hover {
        color: rgb(209, 209, 209);
        transition: color 0.2s ease;
      }
    }
  }

  .material-icons-outlined {
    font-size: 28px;
  }
  .icon-1 {
    color: rgb(233, 207, 90);
  }
  .icon-2 {
    color: rgba(253, 170, 249, 0.719);
  }
  .icon-3 {
    color: rgba(154, 231, 119, 0.842);
  }
}
// small-size-bar
@media (min-width: 700px) {
  .normal-show {
  }
  .small-show {
    display: none;
  }
}
@media (max-width: 699px) {
  .normal-show {
    display: none;
  }
  .small-show {
  }
}

// small show

.small-navbar-space {
  width: 100%;
  height: 78px;
}
.bg_bk {
  background: black;
}
.bg_wt {
  background: white;
}
.small-navbar {
  width: 100%;
  height: 73px;
  position: fixed;
  margin-bottom: 10px;
  top: 0;
  z-index: 20;
  // border-bottom: 1px dotted black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu-button {
  position: absolute;
  top: 12px;
  left: 15px;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  background-color: transparent;
  z-index: 30;
  background: black;
  border-radius: 50%;

  .bar {
    position: relative;
    display: block;
    width: 21px;
    height: 3px;
    margin: 5px auto;
    background-color: #fff;
    border-radius: 10px;
    transition: 0.3s;

    &:nth-of-type(1) {
      margin-top: 0px;
    }
    &:nth-of-type(3) {
      margin-bottom: 0px;
    }
  }

  &:hover {
    .bar:nth-of-type(1) {
      transform: translateY(1.5px) rotate(-4.5deg);
    }
    .bar:nth-of-type(2) {
      opacity: 0.9;
    }
    .bar:nth-of-type(3) {
      transform: translateY(-1.5px) rotate(4.5deg);
    }
  }

  &.opened {
    .bar:nth-of-type(1) {
      transform: translateY(6px) rotate(-45deg);
    }
    .bar:nth-of-type(2) {
      opacity: 0;
    }
    .bar:nth-of-type(3) {
      transform: translateY(-15px) rotate(45deg);
    }

    &:hover {
      .bar:nth-of-type(1) {
        transform: translateY(8.5px) rotate(-40.5deg);
      }
      .bar:nth-of-type(2) {
        opacity: 0.1;
      }
      .bar:nth-of-type(3) {
        transform: translateY(-13.5px) rotate(40.5deg);
      }
    }
  }
}
.small-img-con {
  width: 319px;
  height: 56px;
  margin-bottom: -8px;
  margin-left: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}

.small-show {
  // background: pink;
}
.BarOpenHeight {
  height: 895px;
}
.menu {
  padding-top: 80px;
  height: 900px;
  background-color: rgba(0, 0, 0, 1);
  color: #fff;
  text-align: center;
  .menu-bar-common {
    font-family: 'Nunito Sans';
    height: 105px;
    font-size: 32px;
    color: white;
    line-height: 72px;
    padding: 5px 0 6px 20px;
    position: relative;
    letter-spacing: 3px;
  }
  // menu-bar-common-setting
  %menu-bar-common-setting {
    p {
      color: white;
      .icon-show {
        font-size: 28px;
        margin-left: 2px;
        margin-top: -5px;
        opacity: 0;
      }
    }
    &::after {
      width: 100%;
      height: 100%;
      position: absolute;
      // left: 22px;
      left: -9px;
      top: 36px;
      font-size: 16px;
      font-weight: bold;
      color: #f3c620;
    }
    &::before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(151, 151, 151, 0.5);
      opacity: 0;
      z-index: 1;
    }
    &:hover::before {
      opacity: 1;
      transition: opacity 0.3s ease;
      z-index: 1;
    }
    &:hover::after {
      color: #ffffff;
      z-index: 10;
    }
    &:hover p {
      color: #f3c620;
      z-index: 10;
    }
    &:hover .icon-show {
      transition: opacity 0.5s ease;
      opacity: 1;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .menu-bar-01,
  .menu-bar-02,
  .menu-bar-03,
  .menu-bar-04,
  .menu-bar-05,
  .menu-bar-06,
  .menu-bar-07 {
    @extend %menu-bar-common-setting;
  }
  .menu-bar-01 {
    // background: rgb(134, 71, 82);
    &::after {
      content: 'ホーム';
    }
  }
  .menu-bar-02 {
    &::after {
      content: 'ショッピング';
    }
  }
  .menu-bar-03 {
    &::after {
      content: 'カート';
    }
  }
  .menu-bar-04 {
    &::after {
      content: 'お気に入り';
    }
  }
  .menu-bar-05 {
    &::after {
      content: '注文履歴';
    }
  }
  .menu-bar-06 {
    &::after {
      content: 'プロフィール';
    }
  }
  .menu-bar-07 {
    &::after {
      content: 'ログイン';
    }
  }
}
</style>
