<template lang="html">
    <Panel title="更多服务" :class="$style.panel">
        <section :class="$style.list"><!--:items="items" v-for="item in enters" 可以直接把下面数据拿过来-->
            <div :class="$style.item" v-for="item in enters" :key="item.img"> <!--用图片地址表示 key-->
                <router-link :to="{ name: item.href}">   <!--这里href 表示要跳转的地址-->
                    <img :src="item.img" :alt="item.title"> <!--图片是内联样式，文本是 text，图片要居中的话，就要 display:inline-block,,:src="item.img"这里src 要引用-->
                    <h4>{{ item.title }}</h4> <!--内联样式就是直接加在某个元素属性中的样式。方法为<p style="color:white;"></p>-->
                </router-link>
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
            enters: [{
                href: "whitet",
                title: "小白卡",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4609/245/3975151339/11019/766e751d/590aca78Nf15a7947.png?width=135&height=135",
            },
            {
                href: "whitet",
                title: "白条商城",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5269/224/1031852465/12646/40e0f799/590aca55N22a6f274.png?width=135&height=135",
            },
            {
                href: "whitet",
                title: "消费分期",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5095/216/1045040184/12370/564ae632/590ac7deN9a0eac2a.png?width=135&height=135",
            },
            {
                href: "whitet",
                title: "借钱",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t8311/300/1385281399/9501/130a0046/59b8da06N14f62cf3.png?width=120&height=120",
            },
            {
                href: "whitet",
                title: "白条提额",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
            },
            {
                href: "whitet",
                title: "白条闪付",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4417/98/4154366136/13785/5433ca92/590ac8afN5dd91d6e.png?width=135&height=135",
            },
            {
                href: "whitet",
                title: "小白会玩",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4453/75/4132459214/14188/939b7f34/590ac860N752d5738.png?width=135&height=135",
            },
            {
                href: "whitet",
                title: "钢镚",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5371/323/1038197138/12031/3ec72f6c/590aca20N089fd34a.png?width=135&height=135",
            }],
        }
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  @import "../../css/px2rem.scss";
  $designWidth: 375;
  .panel{
    @include panel;
    .list{
      @include list(row);
      background: #fff;
      //padding-top: 40px; //具体怎么量 就是找到最外层的那个div 然后看属性
      padding-bottom: 20px;
      //因为用的是 flux 布局，怎么让那五个div 平分空间 要用到下面那个属性
      justify-content: space-around; //两端对齐
      a{
        text-decoration: none;
      }
      .item{
        width: 25%;
        margin-bottom: px2rem(12);
        text-align: center;
        img{
          display: inline-block;
          width: px2rem(45);  //实际是45
          height: px2rem(45)
        }
        h4{
          font-size: px2rem(13);
          margin-top: px2rem(6);
          color: #666
        }
      }
    }
  }

</style>
