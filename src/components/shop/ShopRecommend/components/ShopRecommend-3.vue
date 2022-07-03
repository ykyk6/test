<template>
  <div>
    <div class="container">
      <div class="items">
        <div class="item" v-for="item in ShowBottomsItems" :key="item.name">
          <a @click="toProduct(item)"
            ><div class="img-box">
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
            </div></a
          >
        </div>
        <div class="item" v-show="recommend_show_4">
          <a @click="toProduct_N('019')"
            ><div class="img-box">
              <div class="img-con">
                <img src="@/assets/img/019-01.jpg" alt="" />
              </div>
            </div>

            <div class="name"><p>マーメイドスカート</p></div>
            <div class="type"><p>ボトムス/スカート</p></div>
            <div class="price"><p>￥2,680税込</p></div></a
          >
        </div>
        <div class="item" v-show="recommend_show_3">
          <a @click="toProduct_N('020')"
            ><div class="img-box">
              <div class="img-con">
                <img src="@/assets/img/020-01.jpg" alt="" />
              </div>
            </div>

            <div class="name"><p>ナロースカート</p></div>
            <div class="type"><p>ボトムス/スカート</p></div>
            <div class="price"><p>￥1,980税込</p></div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { BottomsItems } from '@/data/shop/BottomsItems'
export default defineComponent({
  setup() {
    // 商品數量
    let recommend_show_4 = ref(true)
    let recommend_show_3 = ref(true)
    onMounted(() => {
      let offsetWidth = document.documentElement.offsetWidth
      if (offsetWidth > 1030 - 17 && offsetWidth < 1298 - 17) {
        recommend_show_3.value = false
        recommend_show_4.value = false
      } else if (offsetWidth > 807 - 17 && offsetWidth < 1029 - 17) {
        recommend_show_3.value = false
        recommend_show_4.value = true
      } else {
        recommend_show_4.value = true
        recommend_show_3.value = true
      }
    })
    watchEffect(() => {
      window.onresize = () => {
        let offsetWidth = document.documentElement.offsetWidth
        if (offsetWidth >= 1030 - 17 && offsetWidth < 1298 - 17) {
          recommend_show_3.value = false
          recommend_show_4.value = false
        } else if (offsetWidth > 807 - 17 && offsetWidth <= 1029 - 17) {
          recommend_show_3.value = false
          recommend_show_4.value = true
        } else {
          recommend_show_4.value = true
          recommend_show_3.value = true
        }
      }
    })
    const router = useRouter()

    const ShowBottomsItems = BottomsItems.filter((item) => {
      return item.id !== '019' && item.id !== '020'
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
    const toProduct_N = (value: string) => {
      router.push({
        name: 'Product',
        params: {
          product_id: value
        }
      })
    }

    return {
      recommend_show_4,
      recommend_show_3,
      ShowBottomsItems,
      toProduct,
      toProduct_N
    }
  }
})
</script>
<style lang="scss" scoped>
.container {
  margin-top: 18px;
  margin-bottom: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .items {
    width: 98%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    // border: 1px solid black;
    @media (min-width: 1299px) {
      .item {
        width: 17%;
        height: 330px;
        .img-box {
          width: 190px;
          height: 220px;
          margin-left: 7px;
        }
        .name,
        .type,
        .price {
          width: 190px;
        }
        .name {
          height: 25px;
        }
      }
    }
    @media (max-width: 1298px) {
      .item {
        width: 22%;
        height: 330px;
        .img-box {
          width: 190px;
          height: 220px;
          margin-left: 7px;
        }
        .name,
        .type,
        .price {
          width: 190px;
        }
        .name {
          height: 25px;
        }
      }
    }
    @media (max-width: 1029px) {
      .item {
        width: 28%;
      }
    }
    @media (max-width: 807px) {
      .item {
        width: 40%;
      }
    }
    @media (max-width: 605px) {
      .item {
        width: 45%;
      }
    }
    @media (max-width: 594px) {
      .item {
        width: 37%;
        height: 315px;
        a {
          .img-box {
            width: 160px;
            height: 189px;
            margin-left: 5px;
          }
          .name,
          .type,
          .price {
            width: 160px;
          }
          .name {
            height: auto;
          }
        }
      }
    }
    .item {
      // height: 330px;
      border: 1px dotted rgba(128, 125, 125, 0.3);
      display: flex;
      justify-content: center;
      padding: 4px 0;
      position: relative;
      &:hover {
        background: rgba(184, 184, 184, 0.4);
        transition: background 0.1s ease-in;
      }
      a {
        display: block;
        text-decoration: underline;
        &:hover {
          cursor: pointer;
        }
        .img-box {
          // width: 190px;
          // height: 220px;
          margin-top: 8px;
          // margin-left: 7px;
          padding: 8px;
          .img-con {
            width: 100%;
            height: 100%;
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
          // width: 190px;
          // height: 25px;
          font-family: 'NotoSansJP-B';
          text-decoration: none;
          margin-top: 10px;
          margin-left: 10px;
          padding-left: 8px;
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
          // width: 190px;
          margin-left: 10px;
          padding-left: 8px;
          p {
            display: inline;
            font-size: 13px;
            line-height: 1.5;
            color: black;
          }
        }
        .price {
          // width: 190px;
          text-decoration: none;
          font-family: 'NotoSansJP-B';
          margin-left: 10px;
          padding-left: 8px;
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
}
</style>
