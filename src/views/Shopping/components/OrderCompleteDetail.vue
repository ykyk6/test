<template>
  <div>
    <div class="OCD-container">
      <div class="contain">
        <div><span class="material-icons"> check_circle </span></div>
        <div class="title">注文完了</div>
        <div class="content-wrapper">
          <p>ご注文ありがとうございました。</p>
          <span>この度は当店でのご注文をありがとうございます。</span>
          <span>お客様のご注文は以下になります。</span>
          <div class="ordernumber">
            <table>
              <tbody>
                <tr>
                  <th>ご注文番号</th>
                  <td>{{ orderdetail._id }}</td>
                </tr>
                <tr>
                  <th>ご注文日時</th>
                  <td>{{ orderdetail.date }}</td>
                </tr>
                <tr>
                  <th>ご注文内容</th>
                  <td>
                    <div @click="toOrderHistory" class="toOrderHistory">
                      注文履歴へ
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="toTop" @click="toShopping"><p>トップページへ戻る</p></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import Swal from 'sweetalert2'
export default defineComponent({
  setup() {
    const router = useRouter()
    const store = useStore()
    const orderdetail = store.state.OrderDetail
    const toShopping = () => {
      router.push('/shopping')
    }
    const toOrderHistory = () => {
      router.push('/orderHistory')
    }

    return {
      orderdetail,
      toShopping,
      toOrderHistory
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/styles/common.css';
.OCD-container {
  font-family: 'NotoSansJP-R';
  display: flex;
  flex-direction: column;
  align-items: center;
  .contain {
    width: 1100px;
    // height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    // background: pink;
    .material-icons {
      margin-top: 18px;
      font-size: 88px;
      color: #ffb61b;
    }
    .title {
      // font-weight: bold;
      margin-top: 18px;
      font-size: 36px;
      width: 100%;
      text-align: center;
      border-bottom: 2px dotted rgb(0, 0, 0);
      margin-bottom: 35px;
      padding-bottom: 15px;
    }
    .content-wrapper {
      width: 100%;
      // height: 500px;
      display: flex;
      flex-direction: column;
      align-items: center;
      // background: rgb(187, 187, 187);
      p {
        display: inline;
        font-size: 23px;
        font-weight: bold;
      }
      .ordernumber {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 50px;
        border-bottom: 2px dotted #000;
        table {
          width: 65%;
          max-width: 450px;
          margin-top: 25px;
          // border-collapse: collapse;

          th,
          td {
            // border: 1px solid rgba(71, 71, 71, 0.8);
            padding: 14px 15px;
            min-width: 60px;
            height: 40px;
          }
          th {
            width: 38%;
            background: rgba(215, 215, 215, 0.5);
          }
          td {
            background: rgba(240, 240, 240, 0.8);
          }
        }

        span {
          font-size: 20px;
        }

        .toOrderHistory {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
            color: grey;
          }
        }
      }
    }
    .toTop {
      margin-top: 50px;
      width: 80%;
      max-width: 247px;
      height: 60px;
      background: rgb(26, 24, 24);
      color: white;
      border-radius: 34px;
      display: flex;
      line-height: 60px;
      position: relative;
      p {
        display: inline-block;
        font-size: 16px;
        width: 100%;
        text-align: center;
        // background: grey;
      }
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 34px;
        position: absolute;
        left: 0;
        top: 0;
        background: rgba(255, 255, 255, 0.4);
        opacity: 0;
      }
      &:hover::after {
        opacity: 1;
        transition: opacity 0.3s ease;
        // color: black;
        cursor: pointer;
      }
    }
  }
}
</style>
