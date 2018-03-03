<template lang="html">
    <Panel :class="$style.panel" title="生活服务">
        <ul :class="$style.content">
            <li v-for="item in items" :key="item.src" :class="$style.item">
                <router-link :to="{ name: item.href}">
                    <img :src="item.src" alt="">
                    <p>{{ item.title }}</p>
                    <h4>{{item.anotherpoint}}</h4>
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
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4375/104/1184122472/3976/89741da4/58be8a6eNf10193d0.png?width=135&height=135",
                title: "惠加油",
                anotherpoint: "",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t4747/185/1901740991/5892/1383fb93/58f57851N17ee6993.jpg?width=132&height=132",
                title: "小白信用",
                anotherpoint: "全新升级",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3241/234/8044685271/3713/7b29f77f/58be89c8Nb9d41295.png?width=135&height=135",
                title: "信用还款",
                anotherpoint: "",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3172/259/7993557249/4351/fd082707/58be8a81Nd7716a06.png?width=135&height=135",
                title: "卡转让",
                anotherpoint: "",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t3085/320/8107659086/4344/cdbba2dd/58be8acfNdadcaf00.png?width=135&height=135",
                title: "定期还款",
                anotherpoint: "",
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
  .content{
    @include list(row); //display:block 不能和 display:flex并存
    box-sizing: border-box;
    width: 100%;
    ;
    .item{
      box-sizing: border-box;
      width: 20%;
      a{ //router-link 就是a 标签这里要去除 这里需要修改继承，类似java的overwrite
        text-decoration: none;
      }
      img{
        width: px2rem(45);
        height: px2rem(45);
        display: block; //内联元素 必须使其成为块状元素 才能 加margin
        margin: 0 auto;
      }
      h4{
        font-size: px2rem(11);
        text-align: center;
        display: block;
        color: #FF801A;
        margin-top: px2rem(4);
        font-weight: 400;
        line-height: px2rem(17);
        @include textnowrap;
      }
      p{
        font-size: px2rem(13);
        text-align: center;
        display: block;
        color: #666;
        font-weight: 400;
        margin-top: px2rem(6);
        line-height: px2rem(18);
        ;
        @include textnowrap;
      }
    }
  }
}
</style>
