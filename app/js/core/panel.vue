<template lang="html">
    <section :class="[panelClass,cname]"> <!--***panelClass是指默认公共的class所有组件拥有的共同点，cname是各个组件自定义的样式-->
        <h4>-{{ title }}-</h4>
        <slot/>  <!--就是插槽，在其他地方引用这个组件的方法，会默认把下面内容放进去-->
    </section>
</template>

<script>
export default {
    props: {   // 下面这些属性是传递过来的（叫做属性传递）
        cname: {   // 传过来的自定义类名
            type: String, // 这里传进来的cname class那个类
            default: "",
        },
        title: {  // title传过来的就是标题
            type: String,
            default: "",
        },
    },
    data() {
        return {
            panelClass: "panel",
        }
    },
}
</script>

<style lang="scss">
@import "../../css/element.scss";
@import "../../css/px2rem.scss";
$designWidth: 375;
.panel{
  @include panel;
}
</style>
