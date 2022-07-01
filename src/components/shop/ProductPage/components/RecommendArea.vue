<template>
  <div class="recommend-container">
    <div class="contain">
      <!--  -->
      <swiper
        class="swiper"
        :modules="modules"
        :slides-per-view="5"
        :space-between="0"
        :navigation="true"
      >
        <swiper-slide
          class="slide"
          v-for="item in RandomRecommend"
          :key="item.id"
        >
          <div class="recommend-item">
            <a @click="toProduct(item[0].id)">
              <div class="img-box">
                <div class="img-con">
                  <img :src="item[0].img[0].pic" alt="" />
                </div>
              </div>
              <div class="product_name">
                <p>{{ item[0].name }}</p>
              </div>
              <div class="product_price">
                <p>{{ item[0].price }}税込</p>
              </div>
            </a>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['RandomRecommend'],
  setup() {
    const router = useRouter()
    // 另開新視窗
    const toProduct = (value: string) => {
      let RouterToProduct = router.resolve({
        name: 'Product',
        params: {
          product_id: value
        }
      })
      window.open(RouterToProduct.href, '_blank')
    }
    return {
      modules: [Pagination, Navigation],
      router,
      toProduct
    }
  }
})
</script>

<style lang="scss" scope>
@media (min-width: 1100px) {
  .recommend-container {
    width: 100%;
    // padding-left: 40px;
    .contain {
      // width: 100%;
    }
  }
}
@media (max-width: 1099px) {
  .recommend-container {
    margin-left: 30px;
    width: 1100px;
    padding: 0px;
    .contain {
      width: 96%;
    }
  }
}
.recommend-container {
  .contain {
    // width: 100%;
    display: flex;
    // justify-content: space-around;
    .swiper {
      width: 100%;
      display: flex;
      // justify-content: space-around;
      .slide {
        // border: 1px solid rgb(218, 218, 218);
      }
      .swiper-button-prev,
      .swiper-button-next {
        // border: 1px solid #cdbfbf;
        top: 40%;
      }
      .swiper-button-prev {
        left: 0px;
      }
      .swiper-button-next {
        right: 0px;
      }
    }
    .recommend-item {
      // width: 18%;
      // height: 300px;
      padding-bottom: 15px;
      // padding: 2px 2px 15px 2px
      // background: pink;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 2px;
      &:hover {
        cursor: pointer;
      }
      a {
        color: black;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
        &:hover .img-box::after {
          opacity: 1;
          transition: opacity 0.3s ease;
        }
        .img-box {
          // width: 192px;
          width: 192px;
          height: 216px;
          position: relative;
          &::after {
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: rgba(50, 50, 50, 0.3);
            opacity: 0;
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
        .product_name {
          margin-top: 11px;
          padding-left: 5px;
          width: 100%;
          font-size: 14px;
          font-weight: bold;
          p {
            display: inline;
          }
        }
        .product_price {
          margin-top: 5px;
          padding-left: 5px;
          width: 100%;
          color: red;
          font-weight: bold;
          p {
            display: inline;
          }
        }
      }
    }
  }
}
</style>
