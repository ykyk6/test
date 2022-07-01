<template>
  <div class="q-pa-md">
    <q-carousel
      animated
      v-model="slide"
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="slide"
    >
      <q-carousel-slide
        :name="1"
        img-src="@/assets/img/new_arrival_001.jpg"
        class="img"
      />
      <q-carousel-slide
        :name="2"
        img-src="@/assets/img/new_arrival_002.jpg"
        class="img"
      />
      <q-carousel-slide
        :name="3"
        img-src="@/assets/img/new_arrival_003.jpg"
        class="img"
      />
      <q-carousel-slide
        :name="4"
        img-src="@/assets/img/new_arrival_004.jpg"
        class="img"
      />
      <q-carousel-slide
        :name="5"
        img-src="@/assets/img/new_arrival_005.jpg"
        class="img"
      />
    </q-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
export default defineComponent({
  components: {},
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
})
</script>

<style lang="scss" scoped>
@media (min-width: 1046px) {
  .slide {
    width: 315px;
    height: 430px;
  }
}
@media (max-width: 1045px) {
  .slide {
    width: 290px;
    height: 420px;
  }
}
@media (min-width: 960px) {
  .slide {
    width: 280px;
    height: 420px;
  }
}
@media (max-width: 959px) {
  .slide {
    width: 310px;
    height: 410px;
  }
}
.slide {
  margin-top: 18px;
  position: relative;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
