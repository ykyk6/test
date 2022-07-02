<template>
  <div class="homepage-about">
    <div class="container">
      <div class="left" data-aos="fade-right">
        <div class="img-box">
          <div class="img-con">
            <div class="img"></div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title-top" data-aos="fade-left" data-aos-delay="200">
          FASHIONFASHIONについて
        </div>
        <div class="title" data-aos="fade-up" data-aos-delay="500">
          ABOUT FASHIONFASHION
        </div>
        <div class="text" data-aos="fade-up" data-aos-delay="500">
          上下のワンツースタイルがメインの夏は、よりシビアな目線でジャッジしたいパンツ。正統派デザインの好感度、美脚シルエットははそのままに、求めたいのは心地よさや涼しさ。クリーンなイメージに直結しやすいさわやかな白のキレイめパンツは、くすんだ色みを選んで緊張を軽減。
          ドレープができる適度なゆとりはありつつ、目のつまった透けにくい生地で、カジュアルすぎも回避できる。しなやかな生地・まとわりつかないシルエット・なのにもたつかないデザイン性に着目し、色もやわらかさを意識した1本を。
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
// homepage-about
@media (min-width: 807px) {
  .homepage-about {
    margin-top: 90px;
    .container {
      .right {
        .title {
          width: 86%;
          font-size: 58px;
          line-height: 79px;
        }
      }
    }
  }
}
@media (max-width: 806px) {
  .homepage-about {
    margin-top: 70px;
    .container {
      .right {
        .title {
          width: 92%;
          font-size: 48px;
          line-height: 74px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
@media (max-width: 594px) {
  .homepage-about {
    .container {
      .right {
        .title {
          width: 92%;
          font-size: 30px;
          line-height: 47px;
          font-weight: bold;
        }
      }
    }
  }
}
.homepage-about {
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: 896px) {
    .container {
      width: 1200px;
      height: 500px;
      display: flex;
      .left {
        width: 33%;
        display: flex;
        justify-content: flex-end;
        .img-box {
          width: 343px;
          height: 490px;
        }
      }
      .right {
        width: 67%;
        .text {
          margin-top: 20px;
          width: 562px;
          font-size: 17px;
        }
      }
    }
  }
  @media (max-width: 895px) {
    .container {
      width: 95%;
      display: flex;
      flex-direction: column-reverse;
      .left {
        width: 100%;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        .img-box {
          width: 85%;
          height: 540px;
          .img {
            background-size: cover;
          }
        }
      }
      .right {
        width: 100%;
        .text {
          margin-top: 15px;
          width: 82%;
          font-size: 16px;
        }
      }
    }
  }
  .container {
    .left {
      height: 100%;
      .img-box {
        .img-con {
          width: 100%;
          height: 100%;
          .img {
            width: 100%;
            height: 100%;
            background-image: url('@/assets/icon/homepage-about-1.png');
            background-position: 0px 4px;
          }
        }
      }
    }
    .right {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title-top {
        width: 80%;
        text-align: right;
        font-size: 18px;
        color: rgb(172, 130, 52);
        margin-bottom: 25px;
        position: relative;
        padding-right: 110px;
        &::after {
          content: '';
          width: 100px;
          height: 1px;
          background: rgb(172, 130, 52);
          position: absolute;
          right: 0px;
          top: 15px;
        }
      }
      .title {
        text-align: center;
      }
      .text {
        line-height: 33px;
      }
    }
  }
}
</style>
