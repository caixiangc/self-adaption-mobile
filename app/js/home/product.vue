<template lang="html">
    <Panel :class="$style.panel" title="新品推荐">
        <router-link :to="{ name: 'home', params: {} }">
            <h5>更多尖货></h5>
        </router-link>
        <section :class="$style.content">
            <Slider :options="options" :items="items" cname="product-slider"/>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Slider from "../core/slider.vue"
export default {
    components: {
        Panel,
        Slider,
    },
    data() {
        return {
            items: [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16591/349/2066779042/42386/92c7a2f6/5a7d5b56N263586c8.jpg",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t16858/332/448124625/49189/717a1c58/5a7d5b8cNa734cd9f.jpg?width=335&height=421",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t19438/256/457591773/38627/1f0fb065/5a7d5bd0N656c015c.jpg?width=335&height=421",
            }],
            options: {  // 这个配置是对slider 的一个初始化
                slidesPerView: 2.3, // 就是一页几个
                spaceBetween: 70,
                freeMode: true,
                // pagination: { 不需要指示器 直接 注释掉就行
                //    el: ".swiper-pagination",
                //    clickable: true,
                // },
            },
        }
    },
}
</script>
<style lang="scss"> //第三方的的样式无法用module 获取，所以我们只能重新定义一个scss来实现第三方的样式
.product-slider{
  .swiper-container{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 24px;
    .swiper-slider{
      width: 100%;
      a{
        display: inline-block;
        width: 100%;
        img{
          //height: px2rem(100); //宽度一个100% 一个固定，那么他就会随着浏览器缩放而缩放
          display: block;

        }
      }
    }
  }
}
</style>

<style lang="scss" module>
  @import "../../css/element.scss";
  @import "../../css/commoncss.scss";
  @import "../../css/px2rem.scss";
  $designWidth: 375;
  .panel{
    @include panel;
    h5{
      max-width: 40%;
      font-size: px2rem(14);
      color: #999;
      height: px2rem(56);
      margin-right: px2rem(16);
      margin-top: px2rem(-40);
      float: right;
    }
    .content{
      padding-bottom: 40px;
    }
  }
</style>
