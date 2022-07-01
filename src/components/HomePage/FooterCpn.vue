<template>
  <div class="footer">
    <div class="container">
      <div class="footer-wrapper">
        <div class="left">
          <div class="logo">
            <div class="img-box">
              <img src="@/assets/icon/logo-w.png" alt="" class="logo-pic" />
            </div>
          </div>
          <div class="logo-text">FASHIONFASHION株式会社</div>
          <div class="sns">
            <div class="twi">
              <i class="fab fa-twitter-square"></i>
              <div class="text">TWITTER</div>
            </div>
            <div class="fb">
              <i class="fab fa-facebook-square"></i>
              <div class="text">FACEBOOK</div>
            </div>
            <div class="ig">
              <i class="fab fa-instagram-square"></i>
              <div class="text">IG</div>
            </div>
          </div>
        </div>
        <div class="middle">
          <div class="title">CONTACT US</div>
          <div class="text">
            <p style="color: #ffd54f">FASHIONFASHION株式会社</p>
            <p>東京本社所在地 ➯</p>
            <p>〒101-0047</p>
            <p>東京都千代田区神田2丁目12-5</p>
          </div>
        </div>
        <div class="right">
          <div class="link-title"><p>LINK</p></div>
          <div class="link-wrapper">
            <div class="top button-common"><p>TOP</p></div>
            <div class="onlineshop button-common">
              <p>ONLINESHOP</p>
            </div>
            <div class="login button-common">
              <p>LOGIN</p>
            </div>
          </div>
        </div>
      </div>
      <div class="fotter-bottom-wrapper">
        <div class="left">
          <div class="common">特定商取引法に基づく表記</div>
          <div class="common">利用規約</div>
          <div class="common">お知らせ</div>
          <div class="common">プライバシーポリシー</div>
          <div class="copyright">/ Copyright © WASA All Rights Reserved</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    // const router = useRouter()
    // const toShopping = router.push('/shopping')
    return {}
  }
})
</script>

<style lang="scss" scope>
// footer
.footer {
  margin-top: 130px;
  width: 100vw;
  background-image: url('@/assets/icon/bg-b.png');
  background-attachment: fixed;
  background-size: cover;
  .container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 1410px) {
      .footer-wrapper {
        width: 80%;
        display: flex;
        justify-content: center;
        .left,
        .middle,
        .right {
          width: 33%;
        }
        .left {
          .logo {
            width: 320px;
            height: 59px;
          }
        }
        .right {
          display: flex;
        }
      }
    }
    @media (min-width: 1200px) and(max-width: 1409px) {
      .footer-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        .left,
        .middle,
        .right {
          width: 33%;
        }
        .left {
          .logo {
            width: 320px;
            height: 59px;
          }
        }
        .right {
          display: flex;
        }
      }
    }
    @media (max-width: 1199px) {
      .footer-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        .left,
        .middle,
        .right {
          width: 33%;
        }
        .left {
          .logo {
            width: 280px;
            height: 48px;
          }
        }
        .right {
          display: flex;
        }
      }
    }
    @media (max-width: 987px) {
      .footer-wrapper {
        .left,
        .middle {
          width: 50%;
        }
        .right {
          display: none;
        }
      }
    }
    @media (max-width: 721px) {
      .footer-wrapper {
        display: flex;
        flex-direction: column;
        .left,
        .middle {
          width: 100%;
        }
      }
    }

    .footer-wrapper {
      padding-top: 30px;
      .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .logo {
          margin-top: 40px;
          .img-box {
            width: 100%;
            height: 100%;
            .logo-pic {
              width: 100%;
              height: 100%;
              object-position: 10px 10px;
              object-fit: cover;
            }
          }
        }
        .logo-text {
          margin-top: 6px;
          font-size: 16px;
          letter-spacing: 2px;
          color: white;
        }
        .sns {
          margin-top: 30px;
          display: flex;
          flex-direction: row;
          width: 80%;
          justify-content: center;
          .twi,
          .fb,
          .ig {
            width: 90px;
            height: 90px;
            border: 1px solid #b38e6e;
            margin-left: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            z-index: 20;
            .text {
              margin-top: 9px;
              font-size: 14px;
              color: rgb(221, 221, 221);
            }
            &::after {
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              background: rgba(0, 0, 0, 0.3);
              opacity: 0;
            }
            &:hover::after {
              opacity: 1;
            }
          }
          .fab {
            font-size: 25px;
            color: white;
          }
          &:hover {
            cursor: pointer;
          }
        }
        &::after {
          content: '';
          width: 100%;
          height: 70%;
          border-right: 2px dotted rgba(255, 255, 255, 0.5);
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(0, -30%);
        }
      }
      .middle {
        padding-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: white;
        position: relative;
        .title {
          font-size: 25px;
        }
        .text {
          width: 300px;
          margin-top: 20px;
          font-size: 15px;
          border-top: 2px dotted #b38e6e;
          border-bottom: 2px dotted #b38e6e;
          padding-top: 23px;
          padding-bottom: 18px;
          text-align: center;
          p {
            line-height: 13px;
          }
        }
        &::after {
          content: '';
          width: 100%;
          height: 70%;
          border-right: 2px dotted rgba(255, 255, 255, 0.5);
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(0, -30%);
        }
      }
      .right {
        padding-top: 40px;
        flex-direction: column;
        align-items: center;
        color: white;
        .link-title {
          font-size: 25px;
        }
        .link-wrapper {
          display: flex;
          flex-direction: column;
          .button-common {
            width: 250px;
            height: 50px;
            border: 1px solid #b38e6e;
            padding: 10px 10px;
            margin-top: 8px;
            text-align: center;
            line-height: 30px;
            position: relative;
            overflow: hidden;
            &::after {
              content: '';
              width: 100%;
              height: 100%;
              background: #b38e6e;
              position: absolute;
              top: 0;
              right: 100%;
              transition: right 0.5s ease;
            }
            &:hover::after {
              right: 0%;
              transition: right 0.5s ease-in;
            }
            &:hover {
              cursor: pointer;
            }
          }
          %after_common {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            text-align: center;
            opacity: 0;
            transition: opacity 0.7s ease;
          }
          %hover_after_common {
            opacity: 1;
            transition: opacity 0.7s ease-in;
            z-index: 30;
          }
          .top {
            p {
              position: relative;
              &::after {
                content: 'TOP';
                @extend %after_common;
              }
            }
            &:hover p::after {
              @extend %hover_after_common;
            }
          }
          .onlineshop {
            p {
              position: relative;
              &::after {
                content: 'ONLINESHOP';
                @extend %after_common;
              }
            }
            &:hover p::after {
              @extend %hover_after_common;
            }
          }
          .login {
            p {
              position: relative;
              &::after {
                content: 'LOGIN';
                @extend %after_common;
              }
            }
            &:hover p::after {
              @extend %hover_after_common;
            }
          }
        }
      }
    }
    .fotter-bottom-wrapper {
      margin-top: 50px;
      margin-bottom: 40px;
      width: 93%;
      display: flex;
      .left {
        width: 100%;
        display: flex;
        justify-content: center;
        .common {
          // width: 20%;
          text-align: center;
          margin-right: 20px;
          color: rgb(167, 167, 167);
          &:hover {
            cursor: pointer;
            color: #ecb246;
          }
        }
        .copyright {
          color: rgb(167, 167, 167);
        }
      }
    }
  }
}
</style>
