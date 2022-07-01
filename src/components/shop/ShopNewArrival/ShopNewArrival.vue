<template>
  <div class="container">
    <div class="border"></div>
    <div class="title">
      <p>NEW ARRIVAL</p>
    </div>
    <div class="container-wrapper">
      <div class="arrival_left">
        <div class="left-container">
          <!-- 輪播圖 -->
          <s-n-a-swiper-cpns class=""></s-n-a-swiper-cpns>
          <div class="text-box">
            <div class="text-title">
              <a href="">
                <span class="text-title-content">
                  【Special Price】ウエスト切り替えボリュームワンピース
                </span></a
              >
              <span> <del>￥6,590</del> 税込 </span>
              <span class="sale"> ￥4,612税込 -> 30%OFF </span>
              <span class="period">
                ※【期間限定プライス】2022/06/01 00:00まで
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="arrival_right">
        <swiper
          class="right-swiper"
          :modules="modules"
          :slides-per-view="3"
          :grid="{ rows: 2 }"
          :space-between="0"
          :pagination="{ clickable: true }"
        >
          <!-- 1~6 -->
          <swiper-slide
            class="slide"
            v-for="item in ShowTopItems"
            :key="item.name"
          >
            <a @click="toProduct(item)">
              <div class="img-box">
                <div class="img-con">
                  <img :src="item.img[0].pic" alt="" />
                </div>
              </div>
              <div class="name">
                <p>{{ item.name }}</p>
              </div>
              <div class="type">
                <p>{{ item.type }}</p>
              </div>
              <div class="price">
                <p>{{ item.price }}税込</p>
              </div>
            </a>
          </swiper-slide>
          <swiper-slide class="slide">
            <a @click="toShopping">
              <div class="more_new">
                <span>もっと見る..</span>
              </div>
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="items"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import SNASwiperCpns from '@/components/shop/ShopNewArrival/components/SNASwiperCpns.vue'
import { Pagination, Grid } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { TopsItems } from '@/data/shop/TopsItems'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    SNASwiperCpns
  },
  setup() {
    const router = useRouter()

    const ShowTopItems = TopsItems.filter((item) => {
      return item.id !== '010'
    })

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toProduct = (item: any) => {
      router.push({
        name: 'Product',
        params: {
          product_id: item.id
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
      modules: [Pagination, Grid],
      ShowTopItems,
      toProduct,
      toShopping
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  .title {
    width: 250px;
    text-align: center;
    margin-top: 25px;
    position: relative;
    &::before {
      content: '';
      background-image: url('@/assets/icon/text_border-8.svg');
      width: 295px;
      height: 97px;
      position: absolute;
      left: -28px;
      top: -20px;
      z-index: -1;
    }
    p {
      font-size: 32px;
    }
  }
  @media (min-width: 1295px) {
    .container-wrapper {
      width: 83%;
      display: flex;
      .arrival_left {
        width: 36%;
        height: 645px;
        .left-container {
          .text-box {
            width: 315px;
            .text-title {
              .text-title-content {
                font-size: 17px;
              }
              span {
                font-size: 16px;
              }
            }
          }
        }
      }
      .arrival_right {
        margin-left: 35px;
        width: 61%;
        height: 645px;
        .right-swiper {
          margin-left: 15px;
        }
        .name {
          p {
            font-size: 13px;
          }
        }
      }
    }
  }
  @media (max-width: 1294px) {
    .container-wrapper {
      width: 93%;
      display: flex;
      .arrival_left {
        width: 36%;
        height: 645px;
        .left-container {
          .text-box {
            width: 315px;
            .text-title {
              .text-title-content {
                font-size: 17px;
              }
              span {
                font-size: 16px;
              }
            }
          }
        }
      }
      .arrival_right {
        margin-left: 25px;
        width: 61%;
        height: 645px;
        .right-swiper {
          margin-left: 15px;
        }
        .name {
          p {
            font-size: 13px;
          }
        }
      }
    }
  }

  @media (max-width: 1150px) {
    .container-wrapper {
      width: 99%;
      display: flex;
      .arrival_left {
        .left-container {
          .text-box {
            width: 315px;
            .text-title {
              .text-title-content {
                font-size: 17px;
              }
              span {
                font-size: 16px;
              }
            }
          }
        }
      }
      .arrival_right {
        margin-left: 20px;
        .name {
          p {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media (max-width: 1045px) {
    .container-wrapper {
      width: 99%;
      display: flex;
      .arrival_left {
        .left-container {
          .text-box {
            width: 290px;
            .text-title {
              .text-title-content {
                font-size: 16px;
              }
              span {
                font-size: 15px;
              }
            }
          }
        }
      }
      .arrival_right {
        margin-left: 10px;
        .name {
          p {
            font-size: 11px;
          }
        }
      }
    }
  }
  @media (max-width: 959px) {
    .container-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      .arrival_left {
        padding-bottom: 0px;
        width: 450px;
        height: 625px;
        .left-container {
          .text-box {
            width: 278px;
            .text-title {
              .text-title-content {
                font-size: 15px;
              }
              span {
                font-size: 13px;
              }
            }
          }
        }
      }
      .arrival_right {
        display: none;
      }
    }
  }

  @media (max-width: 689px) {
    .container-wrapper {
      .arrival_left {
        width: 450px;
      }
    }
  }
  @media (max-width: 650px) {
    .container-wrapper {
      .arrival_left {
        width: 420px;
      }
    }
  }

  @media (max-width: 550px) {
    .container-wrapper {
      .arrival_left {
        width: 420px;
      }
    }
  }

  .container-wrapper {
    margin-top: 38px;

    .arrival_left {
      background: rgba(187, 187, 187, 0);
      border: 1px solid rgb(46, 46, 46);
      display: flex;
      .left-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        // &::after {
        //   content: 'NEW';
        //   width: 200px;
        //   height: 100px;
        //   position: absolute;
        //   left: 0;
        //   top: 0;
        // }

        .text-box {
          margin-top: 5px;
          margin-bottom: 10px;
          .text-title {
            text-align: left;
            .text-title-content {
              font-weight: bold;
              color: rgb(0, 0, 0);
              margin-bottom: 8px;
            }
            span {
              display: block;
            }
            .sale {
              color: rgb(218, 150, 6);
            }
            .period {
              font-size: 14px;
              margin-top: 5px;
              background: rgba(151, 151, 151, 0.4);
            }
          }
        }
      }
    }
    .arrival_right {
      .right-swiper {
        width: 99%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        background: rgba(189, 189, 189, 0.3);
        border: 1px solid black;
        padding-right: 7px;
      }
      .slide {
        width: 33%;
        height: 300px;
        border: 1px dotted grey;
        margin-right: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        a {
          display: inline-block;
          text-decoration: underline;
          &:hover {
            cursor: pointer;
          }
          .img-box {
            margin-top: 10px;
            width: 154px;
            height: 182px;
            display: flex;
            justify-content: center;
            margin-left: 14px;

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
            width: 156px;
            height: 25px;
            font-family: 'NotoSansJP-B';
            text-decoration: none;
            margin-top: 10px;
            color: black;
            margin-left: 18px;
            p {
              display: inline;
              line-height: 1.5;
              color: black;
            }
          }
          .type {
            width: 154px;
            margin-left: 18px;
            p {
              display: inline;
              font-size: 13px;
              line-height: 1.5;
              color: black;
            }
          }
          .price {
            width: 154px;
            text-decoration: none;
            font-family: 'NotoSansJP-B';
            margin-left: 18px;

            p {
              display: inline;
              font-size: 13px;
              line-height: 2;
              color: black;
            }
          }
          .more_new {
            span {
              color: black;
            }
          }
          &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            backdrop-filter: contrast(70%);
            opacity: 0;
          }
          &:hover::after {
            opacity: 1;
            transition: opacity 0.1s ease-in;
            z-index: -1;
          }
        }
      }
    }
  }
}
</style>
