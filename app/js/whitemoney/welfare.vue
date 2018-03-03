<template lang="html">
    <Panel title="白条福利" :class="$style.panel">
        <section :class="$style.content">
            <ul>
                <li v-for="item in items" :key="item.title">
                    <img :src="item.src" alt="">
                    <div class="">
                        <h4>{{ item.title }}</h4>
                        <span>{{ item.desc }}</span>
                    </div>
                    <p>
                        <router-link :to="{ name: item.href, params: {} }">
                            {{ item.goto }}
                        </router-link>
                    </p>
                </li>
            </ul>
        </section>
    </panel>
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
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120",
                title: "开通白条",
                desc: "送188元红包",
                goto: "立即开通 >",
                href: "whitet",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120",
                title: "白条闪付",
                desc: "新手享158元礼包",
                goto: "随机立减 >",
                href: "whitet",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120",
                title: "白条提额",
                desc: "金融app专享提额礼包",
                goto: "去提额 >",
                href: "whitet",
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
  .content{
    li{
      @include list(row);
      position: relative;
      padding-bottom: px2rem(12);
      &:before{
        content: ""; //
        border-bottom: 1px solid #DDD;
        position: absolute;
        width: 100%;
        height: 0;
        top: 0;
        right: 0;
      }
      img{
        width: px2rem(44);
        height: px2rem(44);
        margin: px2rem(12) px2rem(16) 0; //参数 上 左右 中
      }
      p{
        a{
          text-decoration: none;
          color: #FF801A;
          text-align: center;
          line-height: px2rem(44);
        }
        font-size: px2rem(14);
        max-width: 39%;
        color: #FF801A;
        margin-top: px2rem(13);
        box-sizing: border-box;
        display: block;
        @include textnowrap;
        position: absolute;
        right: px2rem(16)
      }
      h4{
        font-size: px2rem(16);
        color: #333;
        display: block;
        @include textnowrap;
        line-height: px2rem(28);
        margin: px2rem(13) 0 0;
      }
      span{
        font-size: px2rem(12);
        color:#999999;
        display: block;
        line-height: px2rem(13);
        @include textnowrap;
      }
    }
  }
}
</style>
