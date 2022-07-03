/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <div class="ranking-container">
    <div class="title">
      <!-- <div class="border"><img src="@/assets/icon/text_border-6.svg" alt=""></div> -->
      <p>RANKING</p>
    </div>
    <div class="items">
      <!-- swiper -->
      <swiper
        class="swiper"
        :modules="modules"
        :navigation="true"
        :slides-per-view="1"
        :space-between="0"
        :pagination="{ clickable: true }"
        :breakpoints="{
          '599': {
            slidesPerView: 2,
            spaceBetween: 20
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 20
          },
          '1009': {
            slidesPerView: 4,
            spaceBetween: 20
          },
          '1292': {
            slidesPerView: 5,
            spaceBetween: 15
          }
        }"
      >
        <swiper-slide>
          <div class="item">
            <a @click="toProduct_N('001')">
              <div class="img-box img-box_item-1">
                <div class="img-con">
                  <img src="@/assets/img/001-01.jpg" alt="" />
                </div>
              </div>
              <div class="name"><p>カレッジロゴゆるＴシャツ</p></div>
              <div class="type"><p>トップス/カットソー</p></div>
              <div class="price"><p>￥1,280税込</p></div>
            </a>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="item">
            <a @click="toProduct_N('002')"
              ><div class="img-box img-box_item-2">
                <div class="img-con">
                  <img src="@/assets/img/002-01.jpg" alt="" />
                </div>
              </div>

              <div class="name"><p>カレッジロゴゆるＴシャツ</p></div>
              <div class="type"><p>トップス/カットソー</p></div>
              <div class="price"><p>￥1,280税込</p></div></a
            >
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="item">
            <a @click="toProduct_N('003')"
              ><div class="img-box img-box_item-3">
                <div class="img-con">
                  <img src="@/assets/img/003-01.jpg" alt="" />
                </div>
              </div>

              <div class="name"><p>前身レースタンクトップ</p></div>
              <div class="type">
                <p>タンクトップ</p>
              </div>
              <div class="price"><p>￥1,280税込</p></div></a
            >
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="item">
            <a @click="toProduct_N('004')"
              ><div class="img-box img-box_item-4">
                <div class="img-con">
                  <img src="@/assets/img/004-01.jpg" alt="" />
                </div>
              </div>

              <div class="name"><p>カレッジロゴゆるＴシャツ</p></div>
              <div class="type"><p>トップス/カットソー</p></div>
              <div class="price"><p>￥980税込</p></div></a
            >
          </div></swiper-slide
        >
        <swiper-slide>
          <div class="item">
            <a @click="toProduct_N('005')"
              ><div class="img-box img-box_item-5">
                <div class="img-con">
                  <img src="@/assets/img/005-01.jpg" alt="" />
                </div>
              </div>

              <div class="name"><p>フリル袖Ｔシャツ</p></div>
              <div class="type"><p>トップス/カットソー</p></div>
              <div class="price"><p>￥980税込</p></div></a
            >
          </div></swiper-slide
        >
      </swiper>
      <div class="more_items">
        <a @click="toShopping">
          <div class="icon">
            <p>もっと見る</p>
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/scss'
import 'swiper/scss/pagination'
import 'swiper/scss/navigation'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const router = useRouter()
    const toProduct_N = (value: string) => {
      router.push({
        name: 'Product',
        params: {
          product_id: value
        }
      })
    }
    const toShopping = () => {
      let RouterToShopping = router.resolve({
        path: 'shopping'
      })
      window.open(RouterToShopping.href, '_blank')
    }

    return {
      modules: [Pagination, Navigation],
      toProduct_N,
      toShopping
    }
  }
})
</script>

<style lang="scss" scope>
.ranking-container {
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(236, 236, 236, 0.8);
  padding-bottom: 25px;
  padding-top: 40px;
  .title {
    width: 250px;
    text-align: center;
    margin-bottom: -30px;
    position: relative;
    font-weight: bold;
    letter-spacing: 1px;
    &::before {
      content: '— ランキング — ';
      width: 100%;
      font-size: 16px;
      letter-spacing: 2px;
      color: grey;
      position: absolute;
      left: 50%;
      top: 75%;
      transform: translate(-52%, 0);
    }
    p {
      font-size: 34px;
      line-height: 55px;
    }
  }

  .items {
    width: 88%;
    // background: rgb(133, 133, 133);
    position: relative;
    &::before {
      // content: '';
      width: 60px;
      height: 50px;
      position: absolute;
      right: 0px;
      top: -54px;
      background-image: url('@/assets/icon/decorate-1.svg');
    }
    .swiper {
      width: 100%;
      // height: 400px;
      // // background: pink;
      padding-top: 80px;
      padding-bottom: 20px;
      padding-left: 10px;
    }
    .item {
      // width: 17%;
      height: 340px;
      // background: rgba(236, 207, 207, 0.3);
      display: flex;
      justify-content: center;
      %item-box_N_rk-shared {
        content: '';
        position: absolute;
        width: 57px;
        height: 58px;
        left: -15px;
        top: -28px;
      }

      a {
        text-decoration: underline;
        :hover {
          cursor: pointer;
        }
        .img-box {
          width: 194px;
          height: 233px;
          margin-top: 8px;
          position: relative;
          &_item-1 {
            &::after {
              @extend %item-box_N_rk-shared;
              background-image: url('@/assets/icon/rk-1.svg');
            }
          }
          &_item-2 {
            &::after {
              @extend %item-box_N_rk-shared;
              background-image: url('@/assets/icon/rk-2.svg');
            }
          }
          &_item-3 {
            &::after {
              @extend %item-box_N_rk-shared;
              background-image: url('@/assets/icon/rk-3.svg');
            }
          }
          &_item-4 {
            &::after {
              @extend %item-box_N_rk-shared;
              background-image: url('@/assets/icon/rk-4.svg');
            }
          }
          &_item-5 {
            &::after {
              @extend %item-box_N_rk-shared;
              background-image: url('@/assets/icon/rk-5.svg');
            }
          }

          .img-con {
            width: 100%;
            height: 100%;
            border: 1px solid rgb(0, 0, 0);
            position: relative;
            display: block;
            border-radius: 2px;
            img {
              max-width: 100%;
              height: auto;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              object-fit: cover;
              border-radius: 1px;
            }
          }
        }
        .name {
          width: 180px;
          height: 22.5px;
          font-family: 'NotoSansJP-B';
          // background: orange;
          text-decoration: none;
          margin-top: 10px;
          color: black;

          p {
            display: inline;
            font-size: 13px;
            // background: white;
            line-height: 1.5;
            color: black;
          }
        }
        .type {
          width: 200px;
          // height: 9%;
          p {
            display: inline;
            font-size: 13px;
            // background: rgb(255, 175, 175);
            line-height: 1.5;
            color: black;
          }
        }
        .price {
          width: 200px;
          // height: 9%;
          // background: rgb(83, 106, 212);
          text-decoration: none;
          font-family: 'NotoSansJP-B';
          p {
            display: inline;
            font-size: 13px;
            line-height: 2;
            color: black;
          }
        }
      }
    }
  }
  @media (max-width: 1293px) {
    .more_items {
      margin-top: 20px;
    }
  }
  .more_items {
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    &:hover {
      cursor: pointer;
    }
    a {
      .icon {
        width: 150px;
        height: 40px;
        border: 1px solid rgb(0, 0, 0);
        position: relative;
        padding: 10px 20px;
        box-sizing: border-box;
        &::after,
        &::before {
          content: '';
          box-sizing: inherit;
          position: absolute;
          border: 1px solid transparent;
          width: 0;
          height: 0;
        }
        &::after {
          bottom: 0;
          right: 0;
        }
        &::before {
          top: 0;
          left: 0;
        }
        &:hover {
          border: 0;
        }
        &:hover::after,
        &:hover::before {
          width: 100%;
          height: 100%;
        }
        &:hover::after {
          border-bottom-color: #000000;
          border-left-color: #000000;
          transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
        }
        &:hover::before {
          border-top-color: #000000;
          border-right-color: #000000;
          transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
        }
        p {
          font-family: 'NotoSansJP-B';
          display: inline;
          font-size: 15px;
          position: absolute;
          left: calc(50% - 39px);
          top: calc(50% - 13px);
          color: black;
        }
      }
    }
  }
}
</style>
