<template>
  <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="4"
    :space-between="22"
    :centered-slides="false"
    :grab-cursor="true"
  >
    <swiper-slide class="slide">
      <div class="slide-1">
        <a>
          <div class="img_box">
            <div class="img_con">
              <img src="@/assets/img/TNA_01.webp" alt="" />
              <div class="toShopping" @click="toShopping">
                <p>商品ページはこちらへ</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </swiper-slide>
    <swiper-slide class="slide"
      ><div class="slide-2">
        <a>
          <div class="img_box">
            <div class="img_con">
              <img src="@/assets/img/TNA_02.webp" alt="" />
              <div class="toShopping" @click="toShopping">
                <p>商品ページはこちらへ</p>
              </div>
            </div>
          </div>
          <div class="text_wrappe"></div>
        </a></div
    ></swiper-slide>
    <swiper-slide class="slide"
      ><div class="slide-3">
        <a>
          <div class="img_box">
            <div class="img_con">
              <img src="@/assets/img/TNA_03.webp" alt="" />
              <div class="toShopping" @click="toShopping">
                <p>商品ページはこちらへ</p>
              </div>
            </div>
          </div>
          <div class="text_wrappe"></div>
        </a></div
    ></swiper-slide>
    <swiper-slide class="slide"
      ><div class="slide-4">
        <a>
          <div class="img_box">
            <div class="img_con">
              <img src="@/assets/img/TNA_04.webp" alt="" />
              <div class="toShopping" @click="toShopping">
                <p>商品ページはこちらへ</p>
              </div>
            </div>
          </div>
          <div class="text_wrapper"></div>
        </a></div
    ></swiper-slide>
    <swiper-slide class="slide"
      ><div class="slide-5">
        <a>
          <div class="img_box">
            <div class="img_con">
              <img src="@/assets/img/TNA_05.webp" alt="" />
              <div class="toShopping" @click="toShopping">
                <p>商品ページはこちらへ</p>
              </div>
            </div>
          </div>
          <div class="text_wrapper"></div>
        </a></div
    ></swiper-slide>
    <swiper-slide class="slide">
      <div class="slide-6">
        <a>
          <div class="img_box">
            <div class="img_con">
              <img src="@/assets/img/TNA_06.webp" alt="" />
              <div class="toShopping" @click="toShopping">
                <p>商品ページはこちらへ</p>
              </div>
            </div>
          </div>
          <div class="text_wrapper"></div>
        </a>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useRouter } from 'vue-router'
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
    const toShopping = () => {
      router.push('/shopping')
    }
    return {
      modules: [Pagination, Navigation],
      toShopping
    }
  }
})
</script>

<style lang="scss" scoped>
.swiper {
  width: 1100px;
}
@media (min-width: 595px) {
  .slide {
    max-width: 255px;
  }
}
@media (max-width: 594px) {
  .slide {
    max-width: 210px;
  }
}
.slide {
  width: 100%;
  // max-width: 255px;
  display: inline-block;
  border: 1px solid #9c893b;
  .slide-1,
  .slide-2,
  .slide-3,
  .slide-4,
  .slide-5,
  .slide-6 {
    a {
      position: relative;
      border-radius: 5px;
      z-index: 30;
      .img_box {
        position: relative;

        .img_con {
          width: 100%;
          display: block;
          position: relative;
          clear: both;
          margin: 0 auto;
          height: 0;
          padding-top: 100%;
          img {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            object-fit: cover;
            object-position: 0px -27px;
            transition-duration: 0.3s;
          }
          @media (min-width: 595px) {
            .toShopping {
              line-height: 250px;
            }
          }
          @media (max-width: 594px) {
            .toShopping {
              line-height: 210px;
            }
          }
          .toShopping {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 30;
            font-size: 17px;
            // line-height: 250px;
            text-align: center;
            color: black;
            transition: opacity 0.2s ease;
            p {
              opacity: 0;
              transition: opacity 0.3s ease;
              &:hover {
                text-decoration: underline;
                z-index: 10;
                cursor: pointer;
              }
            }
          }
          &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(255, 255, 255, 0.4);
            backdrop-filter: blur(2px);
            transition: opacity 0.3s ease;
            transform-origin: 0 100%;
            opacity: 0;
          }
          &:hover::after {
            opacity: 1;
            transition: opacity 0.2s ease;
          }
          &:hover .toShopping p {
            opacity: 1;
            transition: opacity 0.6s ease;
          }
        }
      }
    }
  }
}
@media (min-width: 500px) and (max-width: 550px) {
  .swiper {
    min-width: 400vw;
  }
}
@media (min-width: 551px) and (max-width: 689px) {
  .swiper {
    min-width: 350vw;
  }
}
@media (min-width: 690px) and (max-width: 835px) {
  .swiper {
    min-width: 300vw;
  }
}
@media (min-width: 836px) and (max-width: 1042px) {
  .swiper {
    min-width: 180vw;
  }
}
@media (min-width: 1043px) and (max-width: 1168px) {
  .swiper {
    min-width: 160vw;
  }
}
@media (min-width: 1169px) and (max-width: 1300px) {
  .swiper {
    min-width: 100vw;
  }
}
</style>
