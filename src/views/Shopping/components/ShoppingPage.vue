<template>
  <div>
    <div class="shop">
      <div class="shop-wrapper">
        <div class="top">
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay="autoplay"
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            class="img-box"
          >
            <q-carousel-slide
              :name="1"
              img-src="@/assets/icon/shopping-page-1.jpg"
              class="img-con"
            />
            <q-carousel-slide
              :name="2"
              img-src="@/assets/icon/shopping-page-2.jpg"
              class="img-con"
            />
            <q-carousel-slide
              :name="3"
              img-src="@/assets/icon/shopping-page-3.jpg"
              class="img-con"
            />
            <q-carousel-slide
              :name="4"
              img-src="@/assets/icon/shopping-page-4.jpg"
              class="img-con"
            />
          </q-carousel>
        </div>
        <!-- shop-ranking -->
        <shop-ranking-swiper></shop-ranking-swiper>
        <!-- shop-new-arrival -->
        <shop-new-arrival></shop-new-arrival>
        <!-- shop-recommend -->
        <shop-recommend-wrapper class="shop-recommend"></shop-recommend-wrapper>
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ShopRankingSwiper from '@/components/shop/ShopRankingSwiper.vue'
import ShopNewArrival from '@/components/shop/ShopNewArrival/ShopNewArrival.vue'
import ShopRecommendWrapper from '@/components/shop/ShopRecommend/ShopRecommendWrapper.vue'

export default defineComponent({
  components: {
    ShopRankingSwiper,
    ShopRecommendWrapper,
    ShopNewArrival
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
})
</script>

<style lang="scss" scope>
@import '@/styles/common.css';
.shop {
  display: flex;
  justify-content: center;
  font-family: 'NotoSansJP-R';
  @media (min-width: 1830px) {
    .shop-wrapper {
      width: 73%;
      .top {
        display: flex;
      }
    }
  }

  @media (max-width: 1829px) {
    .shop-wrapper {
      width: 80%;
      .top {
        display: flex;
      }
    }
  }

  @media (max-width: 1585px) {
    .shop-wrapper {
      width: 85%;
      .top {
        display: flex;
      }
    }
  }

  @media (max-width: 1475px) {
    .shop-wrapper {
      width: 90%;
      .top {
        display: flex;
      }
    }
  }

  @media (max-width: 1370px) {
    .shop-wrapper {
      width: 95%;
      .top {
        display: flex;
      }
    }
  }

  @media (max-width: 850px) {
    .shop-wrapper {
      .top {
        display: none;
      }
    }
  }

  .shop-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .top {
      margin-top: 20px;
      width: 100%;
      height: 430px;
      border: 1px solid black;
      // display: flex;
      justify-content: center;
      align-items: center;
      .img-box {
        width: 100%;
        height: 100%;
        padding: 18px 18px;
        .img-con {
          width: 100%;
          height: 100%;
        }
      }
      .q-btn--dense.q-btn--round {
        padding: 0;
        min-height: 2.4em;
        min-width: 2.4em;
        background: black;
      }
      .q-carousel__arrow .q-icon {
        font-size: 45px;
      }
      .q-carousel__prev-arrow--horizontal {
        left: 5px;
      }
      .q-carousel__next-arrow--horizontal {
        right: 5px;
      }
      .q-carousel__navigation-inner {
        .q-btn {
          background: transparent;
        }
        .q-btn__content {
          font-size: 8px;
        }
      }
      .q-carousel__navigation--bottom {
        bottom: 12px;
      }
    }
    .shop-recommend {
      margin-top: 70px;
    }
  }
}
</style>
