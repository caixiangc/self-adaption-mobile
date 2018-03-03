<template lang="html">
    <article class="">
        <Slider :items="items" :cname="$style.slider"/>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"

export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "money",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400",
            }, {
                href: "money",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t18724/53/552742550/28349/141d0cb1/5a976ab5N1f131e9c.jpg?width=750&height=400",
            }, {
                href: "money",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15097/249/2268830415/20640/397e0ddf/5a976c28Nc5f227d1.jpg?width=750&height=400",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
@import "../../css/px2rem.scss";
$designWidth: 375;
  .slider{
    margin-top: 120px;
    img{
      width: 100%
    }
  }
</style>
