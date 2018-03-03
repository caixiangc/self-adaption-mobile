<template lang="html">
  <Panel :class="$style.panel">
    <section :class="$style.content">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270" alt="">
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
  h4{
    display: none;
  }
  .content{

    img{
      width: 100%;
    }
  }
}
</style>
