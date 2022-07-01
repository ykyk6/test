<template>
  <swiper
    class="swiper"
    slides-per-view="auto"
    :initial-slide="1"
    :resistance-ratio="0"
    @swiper="setSwiperRef"
    @slide-change="handleSlideChange"
  >
    <swiper-slide class="menu">
      <div class="menu-bar-01 menu-bar-common">
        <p>Home<span class="material-icons icon-show"> home </span></p>
      </div>
      <div class="menu-bar-02 menu-bar-common">
        <p>Shopping<span class="material-icons icon-show"> store </span></p>
      </div>
      <div class="menu-bar-03 menu-bar-common">
        <p>Cart<span class="material-icons icon-show"> shopping_cart </span></p>
      </div>
      <div class="menu-bar-04 menu-bar-common">
        <p>
          LikeProducts<span class="material-icons icon-show"> favorite </span>
        </p>
      </div>
      <div class="menu-bar-05 menu-bar-common">
        <p>
          OrderHistory<span class="material-icons icon-show"> summarize </span>
        </p>
      </div>
      <div class="menu-bar-06 menu-bar-common">
        <p>
          Profile<span class="material-icons icon-show"> manage_accounts </span>
        </p>
      </div>
      <div class="menu-bar-07 menu-bar-common">
        <p>Login<span class="material-icons icon-show"> login </span></p>
      </div>
    </swiper-slide>
    <!-- content -->
    <swiper-slide class="content" style="background: grey">
      <div
        class="menu-button"
        :class="{ opened: menuOpened }"
        @click="toggleMenu"
      >
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <!-- content start-->
      <div>Content slide</div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SwiperClass from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    let swiperRef: SwiperClass | null = null
    const setSwiperRef = (swiper: SwiperClass) => {
      swiperRef = swiper
    }

    const menuOpened = ref(false)
    const toggleMenu = () => {
      menuOpened.value ? swiperRef?.slideNext() : swiperRef?.slidePrev()
    }

    const handleSlideChange = () => {
      menuOpened.value = swiperRef?.activeIndex === 0
    }

    return {
      menuOpened,
      toggleMenu,
      setSwiperRef,
      handleSlideChange
    }
  }
})
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
@media (min-width: 600px) {
  .swiper {
    display: none;
  }
}
@media (max-width: 599px) {
  .swiper {
    // display: none;
  }
}

.menu {
  width: 410px;
  height: 927px;
  background-color: rgba(0, 0, 0, 1);
  color: #fff;
  .menu-bar-common {
    font-family: 'Nunito Sans';
    // margin-top: 10px;
    height: 92px;
    font-size: 35px;
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
      left: 22px;
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
    margin-top: 65px;
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

.menu-button {
  position: absolute;
  top: 0px;
  left: 0px;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  background-color: rgba(0, 0, 0, 1);

  .bar {
    position: relative;
    display: block;
    width: 50px;
    height: 5px;
    margin: 10px auto;
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
      transform: translateY(15px) rotate(-45deg);
    }
    .bar:nth-of-type(2) {
      opacity: 0;
    }
    .bar:nth-of-type(3) {
      transform: translateY(-15px) rotate(45deg);
    }

    &:hover {
      .bar:nth-of-type(1) {
        transform: translateY(13.5px) rotate(-40.5deg);
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
</style>
