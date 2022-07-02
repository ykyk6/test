<template>
  <div class="item_wrapper" v-for="item in cartItems" :key="item._id">
    <div class="img" @click="toProduct(item)">
      <div class="img-box">
        <div class="img-con">
          <img :src="item.pic" alt="" />
        </div>
      </div>
    </div>
    <div class="info">
      <div class="info-wrapper">
        <div class="name">{{ item.name }}</div>
        <div class="detail">
          <div class="info-left">
            <div class="color detail-left-common">カラー</div>
            <div class="quantity detail-left-common">数量</div>
          </div>
          <div class="info-right">
            <div class="color detail-right-common">{{ item.color }}</div>
            <div class="quantity detail-right-common">
              <q-select
                filled
                v-model="item.quantity"
                :options="options"
                label=""
                square
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="check_out">
      <div class="chech_out-wrapper">
        <div class="delete">
          <q-btn
            outline
            style="color: black"
            label="削除 "
            class="del_btn"
            @click="deleteCart(item)"
          />
        </div>
        <div class="calculate">
          <div class="calculate_title">小計</div>
          <div class="calculate_price">{{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const model = ref('1')
    const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const store = useStore()
    const cartItems = ref(store.state.cartItem1)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const deleteCart = (item: any) => {
      store.commit('deleteCart', item)
    }

    const router = useRouter()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const toProduct = (value: any) => {
      let RouterToProduct = router.resolve({
        name: 'Product',
        params: {
          product_id: value._id
        }
      })
      window.open(RouterToProduct.href, '_blank')
    }
    return {
      model,
      options,
      cartItems,
      toProduct,
      deleteCart
    }
  }
})
</script>

<style lang="scss" scoped>
.cart_wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
}
.item_wrapper {
  width: 95%;
  margin-top: 10px;
  padding: 14px 5px;
  border: 1px solid rgba(141, 141, 141, 0.5);
  border-radius: 5px;
  display: flex;
  background: rgba(255, 255, 255, 0.9);
  @media (min-width: 595px) {
    .img {
      display: flex;
      width: 20%;
    }
    .info {
      width: 52%;
    }
  }
  @media (max-width: 594px) {
    .img {
      display: none;
      width: 0%;
    }
    .info {
      width: 72%;
    }
  }
  .img {
    // width: 20%;
    // display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .img-box {
      width: 94px;
      height: 114px;
      margin-left: 12px;
      position: relative;
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(240, 240, 240, 0.2);
        opacity: 0;
      }
      &:hover {
        cursor: pointer;
      }
      &:hover::after {
        opacity: 1;
        // transition: opacity 0.2s ease-in;
      }
      .img-con {
        width: 100%;
        height: 100%;
        position: relative;
        img {
          max-width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
  .info {
    height: 150px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    @media (min-width: 630px) {
      .info-wrapper {
        font-size: 16px;
      }
    }
    @media (max-width: 629px) {
      .info-wrapper {
        font-size: 13px;
      }
    }
    .info-wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      .name {
        width: 90%;
        border-bottom: 1px dotted black;
        padding-bottom: 4px;
        margin-bottom: 9px;
      }
      .detail {
        width: 100%;
        display: flex;
        margin-top: 8px;
        .info-left {
          display: flex;
          flex-direction: column;
          width: 20%;
          padding-top: 0px;
          .detail-left-common {
            background: rgba(219, 219, 219, 0.6);
          }
          .color {
            line-height: 2;
          }
          .quantity {
            margin-top: 9px;
            line-height: 2;
          }
        }
        .info-right {
          display: flex;
          flex-direction: column;
          width: 70%;
          .detail-right-common {
            margin-left: 10px;
          }
          .color {
            line-height: 2;
          }
          .quantity {
            margin-top: 9px;
          }
        }
      }
    }
  }
  .check_out {
    width: 28%;
    display: flex;
    align-items: center;
    .chech_out-wrapper {
      width: 100%;
      height: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .delete {
        width: 100%;
        text-align: center;
        margin-bottom: 13px;
        .del_btn {
          width: 80%;
        }
      }
      .calculate {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // margin-top: 5px;
        .calculate_title {
          background: rgba(238, 238, 238, 0.5);
          width: 80%;
          text-align: center;
          padding: 3px 0;
        }
        .calculate_price {
          background: rgb(233, 233, 233);
          width: 80%;
          text-align: center;
          padding: 8px 0;
          font-size: 16px;
        }
      }
    }
  }
}
//
</style>
