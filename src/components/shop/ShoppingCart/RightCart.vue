<template>
  <div class="price_check_wrapper">
    <div class="price_check">
      <div class="shipping_alert_text">
        <span>＊送料全国一律350円(税込)です。</span><br />
        <span>＊5000円以上は送料無料です。</span>
      </div>
      <div class="items_caculate_wrapper">
        <div class="items_caculate_text">
          <p>小計<span>(税込)</span></p>
        </div>
        <div class="items_caculate_number">
          <p>¥{{ TotalPrice() }}</p>
        </div>
      </div>
      <div class="shipping_wrapper">
        <div class="shipping_text">
          <p>送料<span>(税込)</span></p>
        </div>
        <div class="shipping_number">
          <p>¥{{ ShippingFee() }}</p>
        </div>
      </div>
      <div class="total_wrapper">
        <div class="total_text">
          <p>合計<span>(税込)</span></p>
        </div>
        <div class="total_number">
          <p>¥{{ TotalPrice() + 350 }}</p>
        </div>
      </div>
      <div class="order-button">
        <q-btn
          unelevated
          color="black"
          label="レジへ進む"
          class="order-button-style"
          @click="toCheckOut"
        />
      </div>
      <div class="shopping_back-button">
        <q-btn
          outline
          color="black"
          label="ショッピングを続ける"
          class="shopping_back-button-style"
          @click="toShopping"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()
    const TotalPrice = () => {
      return store.getters.TotalPrice
    }
    const ShippingFee = () => {
      return store.getters.ShippingFee
    }
    const toCheckOut = () => {
      if (!store.state.LoginModule.userInfo.mail) {
        Swal.fire({
          icon: 'info',
          title: 'ログインしてください'
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/login')
          }
        })
      } else {
        router.push('/checkout')
      }
    }
    const toShopping = () => {
      router.push('/shopping')
    }
    return {
      TotalPrice,
      ShippingFee,
      toCheckOut,
      toShopping
    }
  }
})
</script>

<style lang="scss" scoped>
.price_check_wrapper {
  width: 100%;
  // background: pink;
  .price_check {
    width: 100%;
    // height: 500px;
    // border: 1px solid rgb(141, 141, 141);
    border-radius: 5px;
    padding: 30px 27px;
    background: rgba(233, 233, 233, 0.7);
    .items_caculate_wrapper {
      display: flex;
      // background: grey;
      font-size: 18px;
      line-height: 2;
      .items_caculate_text {
        width: 50%;
        span {
          font-size: 13px;
        }
      }
      .items_caculate_number {
        width: 50%;
        text-align: right;
      }
    }
    .shipping_wrapper {
      display: flex;
      font-size: 18px;
      line-height: 2;
      // background: rgb(207, 176, 89);
      .shipping_text {
        width: 50%;
        // background: rgb(94, 160, 94);
        span {
          font-size: 13px;
        }
      }
      .shipping_number {
        width: 50%;
        // background: rgb(125, 134, 125);
        text-align: right;
      }
    }
    .shipping_alert_text {
      span {
        text-align: left;
        // padding-left: 15px;
      }
      font-size: 13px;
      color: rgb(196, 137, 12);
      border-bottom: 1px dotted grey;
      margin-bottom: 15px;
      padding-bottom: 10px;
    }
    .total_wrapper {
      margin-top: 12px;
      display: flex;
      // line-height: 2;
      // background: rgba(202, 104, 211, 0.13);
      border-top: 1px dotted grey;
      padding-top: 12px;
      .total_text {
        width: 50%;
        p {
          font-size: 20px;
          line-height: 2;
          font-weight: bold;
        }
        span {
          font-size: 14px;
        }
      }
      .total_number {
        width: 50%;
        text-align: right;
        p {
          font-size: 25px;
          display: inline;
          font-weight: bold;
        }
      }
    }
    .order-button {
      width: 100%;
      margin-top: 10px;
      .order-button-style {
        width: 100%;
        height: 50px;
      }
    }
    .shopping_back-button {
      width: 100%;
      margin-top: 15px;
      .shopping_back-button-style {
        width: 100%;
        height: 50px;
      }
    }
  }
}
</style>
