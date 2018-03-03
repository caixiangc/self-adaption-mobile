<template lang="html">
  <div :class="[btnClass,cname]"> <!--class前面一个: 动态绑定类名  [自定义类名，传递进来一个类名]-->
    <slot/> <!--vue 插槽功能-->
  </div>
</template>

<script>
export default {
  props:{  //属性传递
    cname:{  //当btnClass 满足不了我的要求的时候，会传进来一个cname 样式，来选择 覆盖btnClass属性（用这种方式 实现继承）
      type:String,
      default:""
    },
  },
  data(){ //data 中必须要有个返回值
    return{
      btnClass:"btn", //抽象的按钮组件就是btn这种样式
    }
  }
}
</script>

<style lang="scss">
@import "../../css/element.scss";
  .btn{
    @include btn;  //可以这样 把btn的样式引用进来
  }
</style>
