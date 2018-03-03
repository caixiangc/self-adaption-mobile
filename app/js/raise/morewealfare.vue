<template lang="html">
    <Panel title="更多福利" :class="$style.panel">
        <section :class="$style.content">
            <ul>
              <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330" alt="">
              </li>
              <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330" alt="">
              </li>
              <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330" alt="">
              </li>
            </ul>
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
  .content{
    ul{
      width: 100%;
      @include list(row);
      justify-content: space-around;
      margin-bottom: px2rem(40);
      li{
        img{
          width: px2rem(125);
          height: px2rem(165);
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
