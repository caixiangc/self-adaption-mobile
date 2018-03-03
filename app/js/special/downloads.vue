<template lang="html">
    <Panel title="下载APP" :class="$style.panel">
        <section :class="$style.content"/>
        downloads
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"  // 这里的Slider 我们在页面上 应用 就是以标签形式引用的

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
html,body{
  background: #fff;
}
.panel{
  @include panel;
  margin: 0!important;
  >h4{
    display: none;
  }
  .content{

  }
}
</style>
