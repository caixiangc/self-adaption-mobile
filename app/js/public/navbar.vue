<template lang="html">
    <Panel title="导航条" :class="$style.panel">
        <ul :class="$style.content">
            <li v-for="item in items" :key="item.src">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                    <p>{{ item.title }}</p>
                </router-link>
            </li>
        </ul>
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
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66",
                title: "首页",
            },
            {
                href: "money",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66",
                title: "理财",
            },
            {
                href: "whitet",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66",
                title: "白条",
            },
            {
                href: "raise",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66",
                title: "众筹",
            },
            {
                href: "downloads",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66",
                title: "我的",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
@import "../../css/commoncss.scss";
@import "../../css/px2rem.scss";
$designWidth: 375; //设计图的宽度，要事先 设定
.panel{
  @include panel;
  h4{
    display: none;
  }
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  .content{
    width: 100%;
    height: px2rem(50);
    box-shadow: 0 -3px 4px rgba(0,0,0,.03);
    background: #fff;
    @include list(row);
    justify-content: space-around;

    li{
      a{
        text-decoration: none;
      }
      img{
        width: px2rem(22);
        margin: px2rem(6) auto px2rem(3);
      }
      p{
        min-width: px2rem(8);
        font-size: px2rem(12);
        font-weight: bold;
        color:#656565;
        @include textnowrap;
      }
      .red{
        color: #ff0000;
      }
    }
  }
}
</style>
