<template lang="html">
    <Panel title="金融头条" :class="$style.panel">
        <section :class="$style.content">
            <img src="https://m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png" alt="">
            <swiper :options="swiperOption" :cname="$style.slider">
                <swiper-slide v-for="item in items" :key="item.text">
                    {{ item.text }}
                    <em>></em>
                </swiper-slide>
                <div class="swiper-pagination"/>
            </swiper>
        </section>
    </Panel>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper" // 把依赖引用进来
import Panel from "../core/panel.vue"

export default {
    components: {
        Panel,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            items: [{
                href: "raise",
                text: "百万白条券免费送，速来领取！！",
            }, {
                href: "raise",
                text: "签到领流量，1元500M！",
            }],
            swiperOption: {
                direction: "vertical",
                autoplay: true,
                loop: true,
            },
        }
    },
}
</script>

<style lang="scss">
@import "../../css/px2rem.scss";
$designWidth: 375;
.swiper-container-vertical{
  height: px2rem(36)!important;
  float: right;
  margin-right: px2rem(1)!important;
  padding-left: px2rem(40)
  ;
  .swiper-slide{
    font-family: PingFangSC-Medium;
    letter-spacing: 0;
    margin-right: px2rem(6);
    color: #333333;
    font-size: px2rem(14)!important;
    font-weight: 400;
    em{
      color: #ddd;
      float: right;
      margin-right: 30px;
    }
  }
}
</style>

<style lang="scss" module>
@import "../../css/element.scss";
@import "../../css/px2rem.scss"; //这里可以不引用 @import "~swiper/dist/css/swiper.css"; 是因为这里用不到样式我们自己定义就行，这里只用到js
$designWidth: 375;
  .panel{
    //@include panel; 可以不用写的
    >h4{ //代表 content下第一个 h4
      display: none;
    }
    margin-top: 120px!important;
    .content{
      height: px2rem(36);
      line-height: px2rem(36);
      overflow: hidden;
      @include list(row);
      img{
        height: px2rem(36);
        display: block;
        float: left;
      }
    }
  }
</style>
