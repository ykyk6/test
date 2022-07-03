<template>
  <div>
    <!-- 大圖 -->
    <swiper
      class="top-swiper"
      :modules="modules"
      :space-between="0"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <swiper-slide class="item" v-for="img in imgs" :key="img.pic">
        <div class="img-box">
          <div class="img-con">
            <img :src="img.pic" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 小圖 -->
    <swiper
      class="thumbs-swiper"
      :modules="modules"
      :space-between="20"
      :slides-per-view="6"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="setThumbsSwiper"
      :navigation="true"
    >
      <swiper-slide class="item" v-for="img in imgs" :key="img.color">
        <div class="small-img">
          <div class="small-img-box">
            <div class="small-img-con">
              <img :src="img.pic" alt="" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SwiperClass, { Navigation, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['imgs'],
  setup(props) {
    console.log(props)
    const thumbsSwiper = ref<SwiperClass>()
    const setThumbsSwiper = (swiper: SwiperClass) => {
      thumbsSwiper.value = swiper
    }
    return {
      modules: [Navigation, Thumbs],
      setThumbsSwiper,
      thumbsSwiper
    }
  }
})
</script>

<style lang="scss" scoped>
@media (min-width: 595px) {
  .top-swiper {
    width: 490px;
  }
  .img-box {
    width: 488px;
    height: 590px;
  }
  .thumbs-swiper {
    width: 472px;
  }
  .small-img {
    .small-img-box {
      width: 63px;
      height: 76px;
    }
  }
}
@media (max-width: 594px) {
  .top-swiper {
    width: 370px;
  }
  .img-box {
    width: 370px;
    height: 506px;
  }
  .thumbs-swiper {
    width: 370px;
  }
  .small-img {
    padding-left: 7px;
    .small-img-box {
      width: 52px;
      height: 63px;
    }
  }
}
// .top-swiper {
//   width: 490px;
// }
.img-box {
  // width: 488px;
  // height: 590px;
  .img-con {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      max-width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
.thumbs-swiper {
  // width: 472px;
  height: 160px;
  // background: yellow;
}
.small-img {
  margin-top: 20px;
  width: 405px;
  display: flex;
  flex-wrap: wrap;
  .small-img-box {
    margin-top: 20px;
    margin-right: 15px;
    // width: 63px;
    // height: 76px;
    border: 1px solid #cdbfbf;
    .small-img-con {
      width: 100%;
      height: 100%;
      position: relative;
      img {
        max-width: 100%;
        height: 100%;
        // object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
