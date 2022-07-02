<template>
  <div>
    <div class="homepage-container">
      <!-- Top -->
      <top-cpn></top-cpn>
      <!-- About -->
      <about-cpn></about-cpn>
      <!-- episode -->
      <episode-cpn></episode-cpn>
      <!-- swipper corner -->
      <div class="swipper-corner">
        <div class="title-wrapper">
          <div class="title" data-aos="fade-right">NEW ARRIVALS</div>
        </div>
        <swiper-cpns></swiper-cpns>
      </div>
      <!-- fashion-news -->
      <fashion-news></fashion-news>
      <!-- footer -->
      <footer-cpn></footer-cpn>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import TopCpn from '@/components/HomePage/TopCpn.vue'
import AboutCpn from '@/components/HomePage/AboutCpn.vue'
import EpisodeCpn from '@/components/HomePage/EpisodeCpn.vue'
import SwiperCpns from '../components/SwiperCpns.vue'
import FashionNews from '@/components/HomePage/FashionNews.vue'
import FooterCpn from '@/components/HomePage/FooterCpn.vue'
import AOS from 'aos'

export default defineComponent({
  components: {
    TopCpn,
    AboutCpn,
    EpisodeCpn,
    SwiperCpns,
    FashionNews,
    FooterCpn
  },
  setup() {
    onMounted(() => {
      AOS.init({
        duration: 1500,
        delay: 100,
        once: true
      })
    })
    return {}
  }
})
</script>

<style lang="scss" scope>
@import '../styles/common.css';
// @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');
.homepage-container {
  font-family: 'NotoSansJP-R';
  display: flex;
  flex-direction: column;
  background-image: url('@/assets/icon/bg-w-2.png');
  background-size: cover;
  background-attachment: fixed;
}
// swipper-corner
.swipper-corner {
  margin-top: 100px;
  width: 100%;
  padding-top: 100px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: rgba(204, 204, 204, 0.5);
  padding-bottom: 90px;
  @media (min-width: 1140px) {
    .title-wrapper {
      width: 1100px;
      .title {
        font-size: 58px;
        &::after {
          left: 0%;
        }
      }
      &::after {
        width: 210px;
        right: 0;
        top: 26px;
      }
      &::before {
        right: 0;
        top: 42px;
      }
    }
  }
  @media (max-width: 1139px) {
    .title-wrapper {
      width: 100%;
      justify-content: center;
      .title {
        font-size: 58px;
        &::after {
          left: -5%;
        }
      }
      &::after {
        width: 165px;
        right: 22px;
        top: 114%;
      }
      &::before {
        right: 20px;
        top: 134%;
      }
    }
  }
  @media (max-width: 806px) {
    .title-wrapper {
      .title {
        font-size: 48px;
      }
    }
  }

  @media (max-width: 499px) {
    .title-wrapper {
      .title {
        font-size: 38px;
        margin-bottom: -20px;
      }
      &::after {
        opacity: 0;
      }
      &::before {
        opacity: 0;
      }
    }
  }
  .title-wrapper {
    margin-bottom: 70px;
    display: flex;
    position: relative;
    .title {
      line-height: 80px;
      letter-spacing: 2px;
      padding-left: 30px;
      position: relative;
      &::after {
        content: '——— 新作の注目アイテム';
        position: absolute;
        // left: 0%;
        top: -82%;
        font-size: 18px;
        color: #ac8234;
      }
    }

    &::after {
      content: 'scroll';
      position: absolute;
      letter-spacing: 2px;
      color: grey;
      font-size: 15px;
      border-bottom: 2px solid black;
      padding-left: 5px;
    }
    &::before {
      content: '';
      width: 25px;
      height: 2px;
      background: #000000;
      position: absolute;
      transform: rotate(30deg);
    }
  }

  @media (min-width: 500px) and (max-width: 700px) {
    padding-left: 0px;
  }
}
</style>
