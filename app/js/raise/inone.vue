<template lang="html">
    <Panel title="In货推荐" :class="$style.panel">
        <section :class="$style.content">
            <div :class="$style.item">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200" alt="">
                <section :class="$style.list">
                    <div :class="$style.product" v-for="item in items" :key="item.item">
                        <label>精选</label>
                        <img :src="item.src" alt="">
                        <p>{{ item.title }}</p>
                        <h4><em>￥</em><span>{{ item.price }}</span>起</h4>
                        <section :class="$style.tiao">
                            <div :class="$style.wapper">
                                <div :class="$style.inner" :style="'width:'+ item.percent +'%;'"/>
                            </div>
                            <p>{{ item.percent }}%</p>
                        </section>
                    </div>

                </section>
            </div>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"

export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                title: "智能后视镜",
                src: "//img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg",
                price: "99.00",
                percent: "66",
            }, {
                title: "GPD口袋电脑",
                src: "//img30.360buyimg.com/cf/s250x250_jfs/t5827/255/6140287884/111611/498f9693/59683808N9253369f.jpg",
                price: "75",
                percent: "0",
            }],
        }
    },

}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
@import "../../css/commoncss.scss";
@import "../../css/px2rem.scss";
$designWidth: 375;
.panel{
  @include panel;
  background: white;
  padding-bottom: px2rem(20);
  >h4{
    display: none;
  }
  .content{
    .item{
      img{
        width: 100%;
        display: block;
      }
      .list{
        @include list(row);
        background: white;
        .product{
          width: 46%;
          margin-left: 2%;
          margin-right: 2%;
          background: rgba(0,0,0,.02);
          overflow: hidden;
          position: relative;
          label{
            font-family: PingFangSC-Medium;
            font-size: px2rem(10);
            width: px2rem(24);
            height: px2rem(17);
            line-height: px2rem(17);
            color:#ff0000;
            text-align: center;
            padding: px2rem(2) px2rem(4);
            background-image: linear-gradient(-35deg,#C1C1C1 0,#ACACAC 100%);
            position: absolute;
            top: 0;
            left: 0;
          }
          img{
            width: px2rem(90);
            height: px2rem(90);
            margin: px2rem(18) auto;
          }
          p{
            font-family: PingFangSC-Medium;
            font-size: px2rem(14);
            font-weight: 700;
            height: px2rem(20);
            line-height: px2rem(20);
            margin: 0 px2rem(12);
            color: #444;
            text-align: center;
            @include textnowrap;
          }

          h4{
              font-family: PingFangSC-Semibold;
              @include list(row);
              font-size: px2rem(10);
              color: #999;
              margin-left: px2rem(4);
              position: relative;
              line-height: px2rem(24);
              top: px2rem(-1);
              em{
                font-size: px2rem(14);
                line-height: px2rem(24);
                color: #FF3232;
                margin-left: 28%;
              }
              span{
                font-weight: 700;
                font-size: px2rem(18);
                line-height: px2rem(24);
                color: #FF3232;
                margin-right: px2rem(4);
              }
          }
          .tiao{
            width: 100%;
            padding: px2rem(10) 3%;
            @include list(row);
            .wapper{
              width: 66%;
              margin: px2rem(6) auto;
              height: px2rem(5);
              background: #F6E6E6;
              border-radius: 11px;

              .inner{
                width: 0%;
                height: px2rem(5);
                border-radius: 11px;
                background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
              }
            }
            p{
              font-weight: 700;
              font-size: px2rem(12);
              color: #999;
              float: right;
              position: relative;

              top: px2rem(-1);
            }
          }

        }
      }
    }
  }
}
</style>
