<template>
  <div class="cart-container">
    <div class="content">
      <div class="breadcrumbs">
        <q-breadcrumbs class="text-black">
          <template v-slot:separator>
            <q-icon size="1.5em" name="chevron_right" color="grey" />
          </template>
          <q-breadcrumbs-el label="ホーム" to="/" class="breadcrumbs-el" />
          <q-breadcrumbs-el
            label="ショッピング"
            to="/shopping"
            class="breadcrumbs-el"
          />
          <q-breadcrumbs-el label="カート" class="" />
        </q-breadcrumbs>
      </div>
      <div class="cart_title"><p>ショッピングカート</p></div>
      <div class="shopping_cart_wrapper">
        <div class="left">
          <div class="CartNoShow" v-show="CartNoShow()">
            <p>
              <span class="material-icons"> search_off </span>
              商品が入っていません。
            </p>
          </div>
          <left-cart></left-cart>
        </div>
        <div class="right">
          <right-cart v-show="CartShow()"></right-cart>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import LeftCart from '@/components/shop/ShoppingCart/LeftCart.vue'
import RightCart from '@/components/shop/ShoppingCart/RightCart.vue'

export default defineComponent({
  components: {
    LeftCart,
    RightCart
  },
  setup() {
    const store = useStore()
    const cartItems = ref(store.state.cartItem1)
    const CartNoShow = () => {
      if (cartItems.value.length === 0) {
        return true
      } else {
        return false
      }
    }
    const CartShow = () => {
      if (cartItems.value.length !== 0) {
        return true
      } else {
        return false
      }
    }
    return {
      CartNoShow,
      CartShow
    }
  }
})
</script>

<style lang="scss" scope>
@import '@/styles/common.css';
.cart-container {
  // width: 100%;
  font-family: 'NotoSansJP-R';
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    width: 1100px;
    // background: rgb(80, 80, 102);
    display: flex;
    flex-direction: column;
    align-items: center;
    .breadcrumbs {
      margin-top: 30px;

      .breadcrumbs-el {
        &:hover {
          color: grey;
          text-decoration: underline;
        }
      }
    }
    @media (min-width: 1027px) {
      .breadcrumbs {
        width: 95%;
        background: #e3e3e3;
      }
      .cart_title {
        width: 95%;
        padding-bottom: 5px;
        border-bottom: 2px solid rgb(5, 5, 5);
      }
    }
    @media (max-width: 1026px) {
      .breadcrumbs {
        text-align: center;
      }
      .cart_title {
        width: 100%;
        text-align: center;
        background: #dddddd;
        // border-bottom: 1px solid black;
      }
    }
    .cart_title {
      margin-top: 23px;
      margin-bottom: 20px;
      p {
        display: inline;
        font-size: 22px;
        font-weight: bold;
      }
    }
    @media (min-width: 1027px) {
      .shopping_cart_wrapper {
        width: 93%;
        display: flex;
        flex-direction: row;
        min-height: 500px;
        .left {
          width: 67%;
        }
        .right {
          width: 33%;
          height: 340px;
        }
      }
    }
    @media (max-width: 1026px) {
      .shopping_cart_wrapper {
        width: 85%;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 690px;
        .left {
          width: 90%;
          align-items: center;

          .CartNoShow {
            text-align: center;
          }
        }
        .right {
          width: 90%;
          // margin-bottom: 20px;
        }
      }
    }
    @media (max-width: 838px) {
      .shopping_cart_wrapper {
        width: 76%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // min-height: 500px;
        .left {
          width: 90%;
          align-items: center;
        }
        .right {
          width: 90%;
          // margin-bottom: 20px;
        }
      }
    }
    @media (max-width: 729px) {
      .shopping_cart_wrapper {
        width: 69%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // min-height: 500px;
        .left {
          width: 90%;
          align-items: center;
        }
        .right {
          width: 90%;
        }
      }
    }
    @media (max-width: 650px) {
      .shopping_cart_wrapper {
        width: 65%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // background: pink;
        .left {
          width: 90%;
          align-items: center;
        }
        .right {
          width: 90%;
        }
      }
    }
    @media (max-width: 609px) {
      .shopping_cart_wrapper {
        width: 55%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // background: pink;
        .left {
          width: 90%;
          align-items: center;
        }
        .right {
          width: 90%;
        }
      }
    }
    @media (max-width: 557px) {
      .shopping_cart_wrapper {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        // background: pink;
        .left {
          width: 90%;
          align-items: center;
        }
        .right {
          width: 90%;
        }
      }
    }

    .shopping_cart_wrapper {
      .left {
        // padding-right: 15px;
        padding-bottom: 20px;
        // background: rgba(214, 214, 214, 0.3);
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        // padding-left: 10px;
        .CartNoShow {
          width: 100%;
          font-size: 20px;
          color: grey;
          .material-icons {
            font-size: 25px;
          }
        }
      }
      .right {
        padding: 10px;
        display: flex;
        justify-content: center;
        // background: rgba(189, 189, 189, 0.6);
      }
    }
  }
}
.q-field--auto-height .q-field__control,
.q-field--auto-height .q-field__native {
  min-height: 0px;
}
.q-field--auto-height.q-field--labeled .q-field__control-container {
  padding-top: 5px;
}
// .col,
// .col-xs {
//   flex: 0%;
// }
.quantity {
  .q-field--filled .q-field__control {
    width: 80px;
    height: 28px;
    background: white;
    // border: 1px solid rgb(92, 92, 92);
    // background: rgba(202, 202, 202, 0.3);
    border-radius: 3px;
  }
  .q-field__marginal {
    height: 28px;
    color: rgba(0, 0, 0, 0.54);
  }
  .q-item {
    min-height: 35px;
    padding: 3px 14px;
    color: inherit;
    transition: color 0.3s, background-color 0.3s;
  }
  .q-menu {
    position: fixed !important;
    display: inline-block;
    max-width: 95vw;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 2px;
    overflow-y: auto;
    overflow-x: hidden;
    outline: 0;
    max-height: 65vh;
    z-index: 6000;
    border: 1px solid #adadad;
  }
  .q-field--filled .q-field__control:after {
    background: transparent;
  }
}
</style>
