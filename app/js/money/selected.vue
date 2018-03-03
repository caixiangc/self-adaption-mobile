<template lang="html">
    <Panel title="理财精选" :class="$style.panel">
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
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76",
                title: "月度理财",
                desc: "预期年化收益率4.50%",
                goto: "去赚钱 >",
                href: "money",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76",
                title: "季度理财",
                desc: "历史年化回报率5.50%",
                goto: "去赚钱 >",
                href: "money",
            }, {
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76",
                title: "一年理财",
                desc: "历史年化回报率5.80%",
                goto: "去赚钱 >",
                href: "money",
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
        color: #ff3232;
        display: block;
        line-height: px2rem(13);
        @include textnowrap;
      }
    }
  }
}
</style>
