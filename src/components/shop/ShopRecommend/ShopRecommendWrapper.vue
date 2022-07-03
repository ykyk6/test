<template>
  <div class="container">
    <div class="title">
      <p>RECOMMEND</p>
    </div>
    <q-card class="card">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey tabs"
        active-color="black"
        indicator-color="black"
        align="justify"
        narrow-indicator
      >
        <q-tab name="all" label="全てのアイテム" class="tab" />
        <q-tab name="clothes" label="トップス" class="tab" />
        <q-tab name="skirts" label="ワンピース" class="tab" />
        <q-tab name="bottoms" label="ボトムス" class="tab" />
        <q-tab name="outers" label="アウター" class="tab" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="all">
          <component :is="view"></component>
          <div class="recommend-control">
            <div
              @click.prevent="changeView('ShopRecommend')"
              class="page"
              :class="{ active: isActive_1 }"
            >
              1
            </div>
            <div
              @click.prevent="changeView('ShopRecommend_2')"
              class="page"
              :class="{ active: isActive_2 }"
            >
              2
            </div>
            <div
              @click.prevent="changeView('ShopRecommend_3')"
              class="page"
              :class="{ active: isActive_3 }"
            >
              3
            </div>
            <div
              @click.prevent="changeView('ShopRecommend_4')"
              class="page"
              :class="{ active: isActive_4 }"
            >
              4
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="clothes">
          <ShopRecommend></ShopRecommend>
        </q-tab-panel>

        <q-tab-panel name="skirts">
          <ShopRecommend_2></ShopRecommend_2>
        </q-tab-panel>

        <q-tab-panel name="bottoms">
          <ShopRecommend_3></ShopRecommend_3>
        </q-tab-panel>

        <q-tab-panel name="outers">
          <ShopRecommend_4></ShopRecommend_4>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ShopRecommend from '@/components/shop/ShopRecommend/components/ShopRecommend.vue'
import ShopRecommend_2 from '@/components/shop/ShopRecommend/components/ShopRecommend-2.vue'
import ShopRecommend_3 from '@/components/shop/ShopRecommend/components/ShopRecommend-3.vue'
import ShopRecommend_4 from '@/components/shop/ShopRecommend/components/ShopRecommend-4.vue'

export default defineComponent({
  components: {
    ShopRecommend,
    ShopRecommend_2,
    ShopRecommend_3,
    ShopRecommend_4
  },
  setup() {
    let view = ref('ShopRecommend')
    let isActive_1 = ref(true)
    let isActive_2 = ref(false)
    let isActive_3 = ref(false)
    let isActive_4 = ref(false)
    const changeView = (viewName: string) => {
      view.value = viewName
      // console.log(viewName, typeof viewName)
      if (view.value === 'ShopRecommend') {
        isActive_1.value = true
        isActive_2.value = false
        isActive_3.value = false
        isActive_4.value = false
      }
      if (view.value === 'ShopRecommend_2') {
        isActive_1.value = false
        isActive_2.value = true
        isActive_3.value = false
        isActive_4.value = false
      }
      if (view.value === 'ShopRecommend_3') {
        isActive_1.value = false
        isActive_2.value = false
        isActive_3.value = true
        isActive_4.value = false
      }
      if (view.value === 'ShopRecommend_4') {
        isActive_1.value = false
        isActive_2.value = false
        isActive_3.value = false
        isActive_4.value = true
      }
    }
    return {
      tab: ref('all'),
      view,
      changeView,
      isActive_1,
      isActive_2,
      isActive_3,
      isActive_4
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  .title {
    margin-top: 18px;
    font-weight: bold;
    letter-spacing: 1px;
    width: 270px;
    text-align: center;
    margin-bottom: 40px;
    position: relative;
    &::before {
      content: '— おすすめ品 — ';
      width: 100%;
      font-size: 16px;
      letter-spacing: 2px;
      color: grey;
      position: absolute;
      left: 50%;
      top: 75%;
      transform: translate(-55%, 0);
    }
    p {
      font-size: 34px;
      line-height: 55px;
    }
  }
  .q-card {
    box-shadow: none;
    border-radius: 0px;
    vertical-align: top;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 595px) {
    .q-tabs {
      width: 81%;
    }
  }
  @media (max-width: 594px) {
    .q-tabs {
      width: 67%;
    }
  }
  .q-tabs {
    // width: 81%;
    min-height: 45px;
    min-width: none;
  }
  .q-tab {
    color: black;
    background: rgba(184, 184, 184, 0.3);
    border-radius: 5px 5px 0 0;
    margin-right: 4px;
    &--active {
      background: rgba(141, 141, 141, 0.4);
    }
  }

  .recommend-control {
    width: 100%;
    height: 60px;
    margin-top: 15px;
    text-align: center;
    .page {
      display: inline-block;
      width: 23px;
      height: 23px;
      font-size: 15px;
      margin-right: 5px;
      border-radius: 3px;
      &:hover {
        cursor: pointer;
      }
    }
  }
}
.active {
  background: rgba(0, 0, 0, 0.9);
  color: white;
}
</style>
