<template lang="html">
    <Panel title="每日签到" :class="$style.panel">
        <p>不抢白不抢</p>
        <section :class="$style.content">
            <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160" alt="">
            </div>
            <div :class="$style.item">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160" alt="">
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
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
@import "../../css/px2rem.scss";
$designWidth: 375;
.panel{
  position: relative;
  p{
    float: right;
    font-size: px2rem(14);
    color: #999;
    line-height: px2rem(56);
    position: absolute;
    top: px2rem(5);
    right: px2rem(16);
  }
  .content{
    @include list(row);
    justify-content: space-around;
    .item{
      width: 48%;
      img{
        width: 100%;
        display: block;

      }
    }
  }
}
</style>
