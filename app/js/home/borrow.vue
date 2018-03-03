<template lang="html">
    <Panel :class="$style.panel" title="急速借贷">
        <section :class="$style.content">
            <router-link :to="{ name: 'home'}">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280" alt="">
            </router-link>
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
  @include panel;
  .content{
    img{
      width: 100%;
      display: block;//此元素将显示为块级元素，此元素前后会带有换行符。
    }
  }
}
</style>
