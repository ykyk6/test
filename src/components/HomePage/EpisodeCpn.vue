<template>
  <div class="episode">
    <div class="container">
      <div class="left" data-aos="fade-right" data-aos-delay="100">
        <div class="img-box">
          <div class="img-con">
            <div class="img"></div>
          </div>
        </div>
      </div>
      <div class="right" data-aos="fade-left" data-aos-delay="500">
        <div class="img-box">
          <div class="img-con">
            <div class="img"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
// homepage-episode
.episode {
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  .container {
    width: 1100px;
    display: flex;
    @media (min-width: 896px) {
      .left {
        .img-box {
          .img-con {
            &::after {
              width: 180px;
              height: 270px;
              font-size: 65px;
              writing-mode: vertical-rl;
              transform: rotate(-180deg);
              right: calc(100% + 10px);
              top: -100px;
              line-height: 260px;
            }
          }
        }
      }
      .right {
        .img-box {
          .img-con {
            &::after {
              width: 180px;
              height: 270px;
              font-size: 65px;
              writing-mode: vertical-lr;
              left: calc(100% + 10px);
              bottom: -50px;
            }
          }
        }
      }
    }
    @media (max-width: 895px) {
      .left {
        .img-box {
          .img-con {
            &::after {
              font-size: 37px;
              width: 100%;
              text-align: right;
              left: 0%;
              top: -21%;
            }
          }
        }
      }
      .right {
        .img-box {
          .img-con {
            &::after {
              font-size: 37px;
              width: 100%;
              text-align: left;
              left: 3%;
              bottom: -22%;
            }
          }
        }
      }
    }
    .left {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      margin-top: 50px;
      .img-box {
        width: 350px;
        height: 260px;
        padding-right: 5px;
        .img-con {
          width: 100%;
          height: 100%;
          position: relative;
          .img {
            width: 100%;
            height: 100%;
            background-image: url('@/assets/icon/homepage-episode-1.jpg');
            background-size: cover;
            background-position: 0px -1px;
          }
          &::after {
            content: 'ABOUT';
            color: #c3bdaa;
            position: absolute;
          }
        }
      }
    }
    .right {
      width: 50%;
      display: flex;
      .img-box {
        width: 350px;
        height: 260px;
        padding-left: 5px;
        position: relative;
        .img-con {
          width: 100%;
          height: 100%;
          .img {
            width: 100%;
            height: 100%;
            background-image: url('@/assets/icon/homepage-episode-2.jpg');
            background-size: cover;
            background-position: 0px -30px;
          }
          &::after {
            content: 'FASHION';
            color: #c3bdaa;
            position: absolute;
          }
        }
      }
    }
  }
}
</style>
