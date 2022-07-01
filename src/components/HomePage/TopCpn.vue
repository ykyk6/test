<template>
  <div class="homepage-top">
    <div class="container-1">
      <div class="left">
        <div class="top">
          <div class="img-box">
            <div class="img-con">
              <div class="homepage-title">FASHION FASHION</div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="bottom-left">
            <div class="img-box-1">
              <div class="img-con-1">
                <div class="img-1"></div>
              </div>
            </div>
            <div class="img-box-2">
              <div class="img-con-2">
                <div class="img-2"></div>
              </div>
            </div>
          </div>
          <div class="bottom-right">
            <div class="img-box">
              <div class="img-con">
                <div class="img"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-wrapper">
          <div class="img-box">
            <q-carousel
              animated
              v-model="slide"
              navigation
              infinite
              :autoplay="autoplay"
              arrows
              swipeable
              transition-prev="slide-right"
              transition-next="slide-left"
              @mouseenter="autoplay = false"
              @mouseleave="autoplay = true"
              class="img-con"
            >
              <q-carousel-slide :name="1" class="img img-1" />
              <q-carousel-slide :name="2" class="img img-2" />
              <q-carousel-slide :name="3" class="img img-3" />
              <q-carousel-slide :name="4" class="img img-4" />
            </q-carousel>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true)
    }
  }
})
</script>

<style lang="scss" scoped>
// homepage-top
.homepage-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15px;

  // container-1寬
  @media (min-width: 1100px) {
    .container-1 {
      width: 1100px;
    }
  }
  @media (max-width: 1099px) {
    .container-1 {
      width: 100%;
    }
  }
  // 807px以上
  @media (min-width: 807px) {
    .container-1 {
      // width: 1100px;
      height: 590px;
      display: flex;
      .left {
        width: 650px;
        .top {
          height: 400px;
          .img-box {
            .img-con {
              background: url('@/assets/icon/homepage-top-1.jpg');
              background-position: 10px 560px;
              background-size: cover;
            }
          }
        }
        .bottom {
          height: 300px;
          display: flex;
          justify-content: space-between;
          &-left {
            width: 49%;
            height: 100%;
            display: flex;
            justify-content: space-between;
            .img-box-1 {
              width: 49%;
              height: 100%;
            }
            .img-box-2 {
              width: 49%;
              height: 100%;
            }
          }
          &-right {
            width: 49%;
            height: 100%;
          }
        }
      }
      .right {
        width: 450px;
      }
    }
  }
  // 807px以下
  @media (max-width: 806px) {
    .container-1 {
      width: 95%;
      //  height: 590px;
      display: flex;
      flex-direction: column;
      .left {
        width: 100%;
        display: flex;
        flex-direction: column;
        .top {
          width: 100%;
          height: 270px;
          .img-box {
            .img-con {
              background: url('@/assets/icon/homepage-top-1.jpg');
              background-position: 10px 490px;
              background-size: cover;
            }
          }
        }
        .bottom {
          width: 100%;
          // height: 300px;
          display: flex;
          flex-direction: column;
          &-left {
            width: 100%;
            height: 300px;
            display: flex;
            justify-content: space-between;
            .img-box-1 {
              width: 50%;
              height: 100%;
            }
            .img-box-2 {
              width: 49%;
              height: 100%;
            }
          }
          &-right {
            padding-top: 7px;
            width: 100%;
            height: 300px;
          }
        }
      }
      .right {
        width: 100%;
        height: 600px;
      }
    }
  }
  .container-1 {
    .left {
      display: flex;
      flex-direction: column;
      .top {
        width: 100%;
        padding: 8px;
        .img-box {
          width: 100%;
          height: 100%;
          .img-con {
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            .homepage-title {
              width: 90%;
              font-size: 69px;
              color: #e9e9e929;
              -webkit-text-stroke: 1px #bd904c;
              letter-spacing: 4px;
              text-align: center;
            }
          }
        }
      }
      .bottom {
        width: 100%;
        padding: 8px;
        &-left {
          .img-box-1 {
            .img-con-1 {
              width: 100%;
              height: 100%;
              .img-1 {
                width: 100%;
                height: 100%;
                background-image: url('@/assets/icon/homepage-top-2.jpg');
                background-size: cover;
              }
            }
          }
          .img-box-2 {
            .img-con-2 {
              width: 100%;
              height: 100%;
              .img-2 {
                width: 100%;
                height: 100%;
                background: url('@/assets/icon/homepage-top-3.jpg');
                background-size: cover;
              }
            }
          }
        }
        &-right {
          .img-box {
            width: 100%;
            height: 100%;
            .img-con {
              width: 100%;
              height: 100%;
              .img {
                width: 100%;
                height: 100%;
                background: url('@/assets/icon/homepage-top-4.jpg');
                background-size: cover;
              }
            }
          }
        }
      }
    }
    .right {
      padding: 8px;
      .right-wrapper {
        width: 100%;
        height: 100%;
        .img-box {
          width: 100%;
          height: 100%;
          .img-con {
            width: 100%;
            height: 100%;
            .img {
              width: 100%;
              height: 100%;
            }
            .img-1 {
              background: url('@/assets/icon/homepage-top-5.jpg');
              background-size: cover;
            }
            .img-2 {
              background: url('@/assets/icon/homepage-top-6.jpg');
              background-size: cover;
            }
            .img-3 {
              background: url('@/assets/icon/homepage-top-7.jpg');
              background-size: cover;
            }
            .img-4 {
              background: url('@/assets/icon/homepage-top-8.jpg');
              background-size: cover;
            }
          }
        }

        .q-carousel {
          .q-carousel__navigation--bottom {
            bottom: 10px;
          }
          .q-carousel__navigation .q-btn {
            margin: 5px 1px;
          }
        }
        .q-carousel__navigation--bottom {
          .q-btn {
            .q-btn__content {
              .q-icon {
                font-size: 1.285em;
              }
            }
          }
        }
      }
    }
  }
}
</style>
