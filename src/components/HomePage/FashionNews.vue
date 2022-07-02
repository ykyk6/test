<template>
  <div class="fashion-news">
    <div class="title-wrapper">
      <div class="fashion-news-title-top" data-aos="fade-up">新着記事</div>
      <div class="fashion-news-title" data-aos="fade-up" data-aos-delay="200">
        FASHION NEWS CORNER
      </div>
    </div>
    <div class="top">
      <div class="left" data-aos="zoom-in-up" data-aos-delay="300">
        <div class="img-box">
          <div class="img-con">
            <img src="@/assets/img/fashion-news-01.jpg" alt="" class="img-1" />
          </div>
        </div>
      </div>
      <div class="right">
        <div class="decorate-title" data-aos="fade-up" data-aos-easing="linear">
          FASHION NEWS 01
        </div>
        <div class="right-wrapper">
          <div class="title" data-aos="fade-up" data-aos-delay="100">
            <div class="title-text">
              「着用感のない」<br />軽くて涼しい脱力ジャケット
            </div>
          </div>
          <div class="text" data-aos="fade-up" data-aos-delay="300">
            <p>
              カーディガンのような気楽な着心地に、まじめな形できちんと感も残る、ストレスフリーなジャケットは夏のキレイを支えるために必要不可欠。着るというより肌の上をすべらせるような、軽い質感をまとったジャケットに注目。
            </p>
            <div class="SELECT-title">SELECT TYPE</div>
            <div class="SELECT-middle">☑スクエアフォルムのリネン素材</div>
            <p>
              適度なハリは残しつつ着心地はソフトな、薄手のリネンジャケットで知的な姿をけだるく更新。シルエットは、肩からすそにかけてまっすぐ伸びる、ボックス形のやや余裕を持たせたタイプを選択。
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="middle">
      <div class="left">
        <div class="decorate-title" data-aos="fade-up" data-aos-easing="linear">
          FASHION NEWS 02
        </div>
        <div class="left-wrapper">
          <div class="title" data-aos="fade-up" data-aos-delay="300">
            <div class="title-text">
              【明日なに着る？】<br />
              カジュアルなミニワンピ感覚「ショートパンツのニットアップ」
            </div>
          </div>
          <div class="text" data-aos="fade-up" data-aos-delay="500">
            <p>
              夏の黒は「疲れない・締めつけない・モードすぎない」。そんな今の気分を投影したアイテムで起用したい1つがニット素材のショートパンツ。ゆるすぎないスマートなシルエットに、カジュアルすぎない目の詰まったハイゲージ。単品使用はもちろん、上下セットでミニワンピース感覚でコーディネートを楽しむのもおすすめ。
            </p>
            <div class="POINT-title">POINT</div>
            <p>
              靴とバッグをクラシックにまとめてもなお、今っぽい抜け感が出せるのがショートパンツの強み。キレイめなレザー小物でレディに、キャップやスニーカーのアレンジでボーイッシュに、鮮やかな小物をトッピングしたりと、脚が出るぶん小物のアレンジもバランスよくまとまりやすい。
            </p>
          </div>
        </div>
      </div>
      <div class="right" data-aos="zoom-in-up" data-aos-delay="500">
        <div class="img-box">
          <div class="img-con">
            <img src="@/assets/img/fashion-news-02.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="decorate-title" data-aos="fade-left">FASHION NEWS 03</div>
      <div class="title" data-aos="fade-left" data-aos-delay="300">
        「ブラウンが入ると上手くいく」コーディネートの実例
      </div>
      <div class="item-wrapper">
        <div class="item item-1" data-aos="fade-right">
          <div class="img-box">
            <div class="img-con">
              <img src="@/assets/img/fashion-news-03.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="item item-2" data-aos="fade-right" data-aos-delay="400">
          <div class="img-box">
            <div class="img-con">
              <img src="@/assets/img/fashion-news-04.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="item item-3" data-aos="fade-right" data-aos-delay="600">
          <div class="img-box">
            <div class="img-con">
              <img src="@/assets/img/fashion-news-05.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="item item-4" data-aos="fade-right" data-aos-delay="800">
          <div class="img-box">
            <div class="img-con">
              <img src="@/assets/img/fashion-news-06.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="more-button-wrapper">
      <div class="more-button" data-aos="fade-up" @click="toShopping">
        <span class="top text-common">もっと見る</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup() {
    const router = useRouter()
    const toShopping = () => {
      router.push('/shopping')
    }
    return {
      toShopping
    }
  }
})
</script>

<style lang="scss" scoped>
// fashion-news
@media (min-width: 807px) {
  .fashion-news {
    margin-top: 100px;
  }
}
@media (max-width: 806px) {
  .fashion-news {
    margin-top: 60px;
  }
}
.fashion-news {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1001px) {
    .title-wrapper {
      width: 1100px;
      margin-bottom: 85px;
      .fashion-news-title {
        font-size: 58px;
        line-height: 80px;
      }
    }
    .top {
      width: 1200px;
      display: flex;
      justify-content: center;
      .left {
        width: 540px;
        .img-box {
          padding: 23px 23px;
          &::after {
            right: -65px;
            bottom: 41px;
            width: 233px;
            height: 260px;
          }
          .img-con {
            width: 465px;
            height: 640px;
            &::after {
              font-size: 16px;
              left: 20px;
            }
            &::before {
              font-size: 16px;
              height: 480px;
              left: 57px;
            }
          }
        }
      }
      .right {
        width: 560px;
        align-items: flex-end;
        .decorate-title {
          width: 80%;
          font-size: 62px;
          line-height: 79px;
          &::after {
            font-size: 62px;
          }
        }
        .right-wrapper {
          .title {
            .title-text {
              font-size: 30px;
              font-weight: bold;
              text-align: center;
              line-height: 51px;
              margin: 15px;
            }
          }
        }
      }
    }
    .middle {
      width: 1200px;
      margin-top: 140px;
      display: flex;
      justify-content: center;
      .left {
        width: 620px;
        .decorate-title {
          width: 80%;
          font-size: 62px;
          line-height: 79px;
          &::after {
            font-size: 62px;
          }
        }
        .left-wrapper {
          .title {
            .title-text {
              font-size: 30px;
              font-weight: bold;
              text-align: center;
              line-height: 51px;
              margin: 15px;
            }
          }
        }
      }
      .right {
        width: 580px;
        .img-box {
          padding: 23px 23px;
          .img-con {
            width: 455px;
            height: 620px;
            &::after {
              left: 76px;
              top: -168px;
              width: 304px;
              height: 117px;
            }
          }
          &::after {
            right: -72px;
            bottom: 32px;
            width: 231px;
            height: 297px;
          }
        }
      }
    }
    .bottom {
      margin-top: 130px;
      width: 1200px;
      .decorate-title {
        width: 100%;
        line-height: 101px;
        font-size: 70px;
        &::after {
          content: 'FASHION NEWS 03';
          font-size: 70px;
          transform: scaleX(-1) rotate(180deg);
        }
      }
      .title {
        width: 100%;
      }
      .item-wrapper {
        margin-top: 140px;
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    .more-button-wrapper {
      margin-top: 85px;
      width: 1200px;
      justify-content: flex-end;
    }
  }
  @media (max-width: 1000px) {
    .title-wrapper {
      width: 95%;
      margin-bottom: 35px;
    }
    .top {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      .left {
        width: 85%;
        .img-box {
          padding: 19px 19px;
          &::after {
            right: -9px;
            bottom: 41px;
            width: 201px;
            height: 221px;
          }
          .img-con {
            width: 397px;
            height: 550px;
            &::after {
              font-size: 14px;
              left: 12px;
            }
            &::before {
              font-size: 14px;
              height: 388px;
              left: 44px;
            }
          }
        }
      }
      .right {
        margin-top: 90px;
        width: 100%;
        align-items: center;
        .decorate-title {
          width: 80%;
          font-size: 59px;
          line-height: 79px;
          &::after {
            font-size: 59px;
          }
        }
        .right-wrapper {
          .title {
            .title-text {
              font-size: 30px;
              font-weight: bold;
              text-align: center;
              line-height: 51px;
              margin: 15px;
            }
          }
        }
      }
    }
    .middle {
      width: 100%;
      // margin-top: 50px;
      display: flex;
      flex-direction: column-reverse;
      .left {
        margin-top: 90px;
        width: 100;
        .decorate-title {
          width: 80%;
          font-size: 59px;
          line-height: 79px;
          &::after {
            font-size: 59px;
          }
        }
        .left-wrapper {
          .title {
            .title-text {
              font-size: 30px;
              font-weight: bold;
              text-align: center;
              line-height: 51px;
              margin: 15px;
            }
          }
        }
      }
      .right {
        margin-top: 50px;
        width: 100%;
        .img-box {
          padding: 19px 19px;
          .img-con {
            width: 397px;
            height: 550px;
            &::after {
              right: 10%;
              bottom: 108%;
              width: 308px;
              height: 120px;
            }
          }
          &::after {
            right: -28px;
            bottom: 54px;
            width: 195px;
            height: 241px;
          }
        }
      }
      &::after {
        opacity: 0;
      }
    }
    .bottom {
      margin-top: 50px;
      width: 100%;
      &::after {
        opacity: 0;
      }
      &::before {
        opacity: 0;
      }
      .decorate-title {
        font-size: 70px;
        line-height: 90px;
        width: 100%;
        &::after {
          content: 'FASHION NEWS 03';
          font-size: 70px;
          transform: scaleY(-1) rotateY(0deg);
        }
      }
      .title {
        width: 66%;
      }
      .item-wrapper {
        margin-top: 90px;
        .item {
          margin-bottom: 95px;
        }
      }
    }
    .more-button-wrapper {
      width: 100%;
      justify-content: center;
      padding-left: 10px;
      &:after {
        opacity: 0;
      }
      &:before {
        opacity: 0;
      }
    }
  }
  @media (max-width: 611px) {
    .bottom {
      .decorate-title {
        width: 70%;
        &::after {
          content: 'NEWS 03 FASHION';
          transform: scaleY(-1) rotateY(0deg);
        }
      }
      .item-wrapper {
        .item {
          &-1,
          &-3 {
            margin-bottom: 120px;
          }
          &-2 {
            margin-bottom: 50px;
          }
        }
      }
    }
  }

  @media (max-width: 594px) {
    .top {
      .left {
        .img-box {
          padding: 15px 15px;
          &::after {
            right: -3px;
            bottom: 71px;
            width: 147px;
            height: 160px;
          }
          .img-con {
            width: 288px;
            height: 413px;
            &::after {
              font-size: 9px;
              left: 8px;
            }
            &::before {
              font-size: 9px;
              height: 347px;
              left: 37px;
            }
          }
        }
      }
      .right {
        margin-top: 72px;
        width: 100%;
        align-items: center;
        .decorate-title {
          font-size: 30px;
          line-height: 60px;
          width: 80%;
          &::after {
            font-size: 30px;
          }
        }
        .right-wrapper {
          .title {
            .title-text {
              font-size: 26px;
              font-weight: bold;
              text-align: center;
              line-height: 43px;
              margin: 15px;
            }
          }
        }
      }
    }
    .middle {
      .left {
        margin-top: 72px;
        width: 100%;
        .decorate-title {
          width: 80%;
          font-size: 30px;
          line-height: 60px;
          &::after {
            font-size: 30px;
          }
        }
        .left-wrapper {
          .title {
            .title-text {
              font-size: 26px;
              font-weight: bold;
              text-align: center;
              line-height: 43px;
              margin: 15px;
            }
          }
        }
      }
      .right {
        margin-top: 50px;
        width: 100%;
        .img-box {
          padding: 15px 15px;
          .img-con {
            width: 288px;
            height: 413px;
            &::after {
              right: 10%;
              bottom: 108%;
              width: 239px;
              height: 93px;
            }
          }
          &::after {
            right: -28px;
            bottom: 41px;
            width: 160px;
            height: 196px;
          }
        }
      }
      &::after {
        opacity: 0;
      }
    }
    .bottom {
      margin-top: 16px;
      .decorate-title {
        line-height: 65px;
        font-size: 53px;
        &::after {
          opacity: 0;
        }
      }
      .title {
        margin-top: 15px;
      }
    }
  }
  // fashion-news-title
  @media (min-width: 807px) {
    .title-wrapper {
      .fashion-news-title {
        font-size: 58px;
      }
    }
  }
  @media (max-width: 806px) {
    .title-wrapper {
      .fashion-news-title {
        font-size: 48px;
      }
    }
  }
  @media (max-width: 594px) {
    .title-wrapper {
      .fashion-news-title {
        font-size: 30px;
        font-weight: bold;
        line-height: 50px;
      }
    }
  }
  // item-wrapper寬
  @media (min-width: 888px) and (max-width: 1000px) {
    .bottom {
      .item-wrapper {
        width: 80%;
      }
    }
  }
  @media (max-width: 887px) {
    .bottom {
      .item-wrapper {
        width: 100%;
      }
    }
  }

  .title-wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .fashion-news-title-top {
      width: 100%;
      font-size: 20px;
      color: #ac8234;
      letter-spacing: 13px;
      text-align: center;
    }
    .fashion-news-title {
      text-align: center;
      letter-spacing: 2px;
      position: relative;
    }
  }
  .top {
    .left {
      display: flex;
      justify-content: center;
      .img-box {
        border: 1px solid black;
        background: white;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          background-image: url('@/assets/icon/others-1(rotate&shadow).png');
          background-size: cover;
        }
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          // border: 1px solid rgba(206, 206, 206, 0.5);
          background: rgba(206, 206, 206, 0.3);
          position: absolute;
          right: -30px;
          top: 30px;
          z-index: -1;
        }
        .img-con {
          // width: 465px;
          // height: 640px;
          position: relative;
          &::after {
            content: '「ノーカラー＋落ち感でワンピースの縦のラインを強調」';
            position: absolute;
            // left: 20px;
            top: 25px;
            // font-size: 16px;
            writing-mode: vertical-lr;
            text-orientation: upright;
            background: white;
            border: 1px solid grey;
          }
          &::before {
            content: '首まわりがすっきりするノーカラーは、肩がけしてももたつきにくいため、インナーを選ばず整いやすい。';
            position: absolute;
            top: 48px;
            writing-mode: vertical-lr;
            text-orientation: upright;
            background: white;
            border: 1px solid grey;
            padding: 5px 0;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      .decorate-title {
        // font-size: 66px;
        -webkit-text-stroke: 1px #aa7229;
        color: white;
        border: 2px dotted #8a5a1c;
        text-align: center;
        // line-height: 93px;
        position: relative;
        &::after {
          content: 'FASHION NEWS 01';
          width: 100%;
          // font-size: 66px;
          -webkit-text-stroke: 1px transparent;
          color: rgba(228, 228, 228, 0.5);
          position: absolute;
          left: 8px;
          top: 0px;
          z-index: -1;
        }
      }
      .right-wrapper {
        width: 88%;
        padding: 7px 25px;
        .title {
          h4 {
            margin-top: 25px;
            margin-bottom: 20px;
            text-align: center;
            font-weight: bold;
            line-height: 50px;
          }
        }
        .text {
          p {
            font-size: 16px;
            line-height: 30px;
          }
          .SELECT-title {
            margin-top: -5px;
            margin-bottom: 6px;
            font-size: 16px;
            line-height: 30px;
            border-bottom: 1px dotted rgba(223, 164, 38, 0.986);
            color: rgba(180, 131, 25, 0.986);
          }
          .SELECT-middle {
            margin-bottom: 3px;
            font-size: 16px;
            line-height: 30px;
          }
        }
      }
    }
  }
  .middle {
    position: relative;
    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      .decorate-title {
        margin-left: 15px;
        -webkit-text-stroke: 1px #00659f;
        color: white;
        border: 2px dotted #136ca0;
        margin-right: 15px;
        position: relative;
        text-align: center;
        &::after {
          content: 'FASHION NEWS 02';
          width: 100%;
          -webkit-text-stroke: 1px transparent;
          color: rgba(228, 228, 228, 0.5);
          position: absolute;
          left: 7px;
          top: 3px;
          z-index: -1;
        }
      }
      .left-wrapper {
        width: 91%;
        padding: 5px 25px;
        .text {
          p {
            font-size: 16px;
            line-height: 30px;
          }
          .POINT-title {
            margin-top: -5px;
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 30px;
            border-bottom: 1px dotted rgb(0 101 159);
            color: rgb(8, 74, 112);
          }
        }
      }
    }
    .right {
      padding-top: 100px;
      display: flex;
      justify-content: center;
      .img-box {
        border: 1px solid black;
        background: white;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          background-image: url('@/assets/icon/others-21(rotate&shadow).png');
          background-size: cover;
        }
        &::before {
          content: '';
          width: 100%;
          height: 100%;
          background: rgb(0 101 159);
          position: absolute;
          right: 30px;
          top: 30px;
          z-index: -1;
        }
        .img-con {
          position: relative;
          &::after {
            content: '';
            position: absolute;
            background-image: url('@/assets/icon/others-3.png');
            background-size: cover;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    &::after {
      content: 'scroll';
      font-size: 20px;
      position: absolute;
      left: calc(8% + -5px);
      bottom: calc(-12% + -14px);
      color: #b5b5b5;
      width: 27px;
      height: 27px;
      line-height: 21px;
      padding-left: -11px;
      transform: rotate(-90deg);
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .decorate-title {
      // font-size: 70px;
      -webkit-text-stroke: 1px #000000;
      color: white;
      position: relative;
      text-align: center;
      &::after {
        // content: 'FASHION NEWS 03';
        width: 100%;
        // font-size: 70px;
        -webkit-text-stroke: 1px transparent;
        color: rgba(228, 228, 228, 0.5);
        position: absolute;
        left: 0px;
        top: 61px;
        z-index: -1;
      }
    }
    .title {
      text-align: center;
      font-size: 20px;
      font-weight: bold;
    }
    .item-wrapper {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      .item {
        width: 280px;
        height: 450px;
        margin-right: 10px;
        &-2,
        &-4 {
          margin-top: 70px;
        }
        &-3 {
          margin-top: 5px;
        }
        .img-box {
          width: 100%;
          height: 100%;
          .img-con {
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        &-1 {
          .img-box {
            position: relative;
            &::after {
              content: 'LOOSE & LOOSE ——';
              font-weight: bold;
              position: absolute;
              width: 100%;
              text-align: center;
              left: 0;
              top: -30px;
            }
            &::before {
              content: 'ブラウン＆ベージュの好配色を服でなく小物で';
              position: absolute;
              width: 74%;
              left: 13%;
              bottom: -38px;
              color: #9f8474;
            }
            .img-con {
              position: relative;
              &::after {
                content: '';
                position: absolute;
                left: 12px;
                bottom: -13px;
                width: 52px;
                height: 50px;
                transform: rotate(20deg);
                background-image: url('@/assets/icon/others-5-1.png');
                background-size: cover;
              }
              // price
              &::before {
                content: '';
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 99%;
                background: rgba(204, 204, 204, 0.8);
                background-image: url('@/assets/icon/others-8.png');
                background-size: cover;
                background-position: -15px -20px;
                opacity: 0;
                transition: opacity 0.3s ease-in;
              }
              &:hover::before {
                transition: opacity 0.5s ease-in;
                opacity: 1;
              }
            }
          }
        }
        &-2 {
          .img-box {
            position: relative;
            &::after {
              content: '—— BIG T-SHIRT ';
              font-weight: bold;
              position: absolute;
              width: 100%;
              text-align: center;
              left: 0;
              top: -30px;
            }
            &::before {
              content: 'ブラウンには「高発色」が似合う';
              position: absolute;
              width: 42%;
              left: 28%;
              top: -89px;
              color: #b51e65;
            }
            .img-con {
              position: relative;
              &::after {
                content: '';
                position: absolute;
                right: 22%;
                top: -86px;
                width: 172px;
                height: 35px;
                background-image: url('@/assets/icon/others-5-2-1.png');
                background-size: cover;
              }
              // price
              &::before {
                content: '';
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 99%;
                background: rgba(204, 204, 204, 0.8);
                background-image: url('@/assets/icon/others-8.png');
                background-size: cover;
                background-position: -15px -20px;
                opacity: 0;
                transition: opacity 0.3s ease-in;
              }
              &:hover::before {
                transition: opacity 0.5s ease-in;
                opacity: 1;
              }
            }
          }
        }
        &-3 {
          .img-box {
            position: relative;
            &::after {
              content: 'LEOPARD PATTERN ——';
              font-weight: bold;
              position: absolute;
              width: 100%;
              text-align: center;
              left: 0;
              top: -30px;
            }
            &::before {
              content: 'ブラウンと一緒なら浮かない同系色のレオパード';
              position: absolute;
              width: 74%;
              left: 12%;
              bottom: -33px;
              color: #184e74;
            }
            .img-con {
              position: relative;
              &::after {
                content: '';
                position: absolute;
                right: 8%;
                bottom: -10px;
                width: 49px;
                height: 48px;
                transform: scaleX(-1) rotate(16deg);
                background-image: url('@/assets/icon/others-5-3.png');
                background-size: cover;
              }
              // price
              &::before {
                content: '';
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 99%;
                background: rgba(204, 204, 204, 0.8);
                background-image: url('@/assets/icon/others-8.png');
                background-size: cover;
                background-position: -15px -20px;
                opacity: 0;
                transition: opacity 0.3s ease-in;
              }
              &:hover::before {
                transition: opacity 0.5s ease-in;
                opacity: 1;
              }
            }
          }
        }
        &-4 {
          .img-box {
            position: relative;
            &::after {
              content: '—— GRADATION';
              font-weight: bold;
              position: absolute;
              width: 100%;
              text-align: center;
              left: 0;
              top: -30px;
            }
            &::before {
              content: 'ブラウンとゴールドは「ある意味グラデーション」';
              position: absolute;
              width: 56%;
              left: 45%;
              top: -129px;
              color: #b68773;
            }
            .img-con {
              position: relative;
              &::after {
                content: '';
                position: absolute;
                left: 75%;
                top: -74px;
                width: 49px;
                height: 47px;
                transform: rotate(-93deg);
                background-image: url('@/assets/icon/others-5-4.png');
                background-size: cover;
              }
              // price
              &::before {
                content: '';
                position: absolute;
                left: 0px;
                top: 0px;
                width: 100%;
                height: 99%;
                background: rgba(204, 204, 204, 0.8);
                background-image: url('@/assets/icon/others-8.png');
                background-size: cover;
                background-position: -15px -20px;
                opacity: 0;
                transition: opacity 0.3s ease-in;
              }
              &:hover::before {
                transition: opacity 0.5s ease-in;
                opacity: 1;
              }
            }
          }
        }
      }
    }
    &::after {
      content: '';
      width: 2px;
      height: 200px;
      background: #000000;
      position: absolute;
      left: calc(11% + -13px);
      top: calc(-11% + 9px);
    }
    &::before {
      content: '';
      width: 2px;
      height: 21px;
      background: #000000;
      position: absolute;
      left: calc(9% + 5px);
      top: calc(12% + 8px);
      transform: rotate(-35deg);
    }
  }
  .more-button-wrapper {
    display: flex;
    padding-right: 40px;
    position: relative;
    .more-button {
      position: relative;
      width: 230px;
      height: 75px;
      background: black;
      line-height: 75px;
      overflow: hidden;
      .text-common {
        position: absolute;
        width: 100%;
        height: 100%;
        color: white;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        transition: top 0.5s ease;
        top: 0px;
      }
      &:hover .text-common {
        transition: top 0.5s ease-out;
        top: -75px;
      }
      &::after {
        content: 'もっと見る';
        width: 100%;
        height: 100%;
        color: white;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        position: absolute;
        top: 75px;
        background: #d5a1a1;
        transition: top 0.3s ease-out;
      }
      &:hover::after {
        transition: top 0.5s ease-in;
        top: 0px;
      }
      &:hover {
        cursor: pointer;
      }
    }
    &:after {
      content: '';
      position: absolute;
      left: 5%;
      top: 39px;
      width: 69%;
      height: 2px;
      background: black;
    }
    &:before {
      content: '';
      position: absolute;
      right: 26%;
      top: 29px;
      width: 40px;
      height: 2px;
      background: black;
      transform: rotate(28deg);
    }
  }
}
</style>
