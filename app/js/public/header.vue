<template lang="html">
    <div :class="$style.header">   <!--$style.header是变量，$style是命名空间，在项目初始化的时候，会把header放到style那个命名空间里面-->
        <span :class="$style.left">
            <em>注册</em>&nbsp;|&nbsp; <!--要写router-link写路由的 然后调用后台接口-->
            <em>空格</em>
        </span>
        <btn :class="$style.btnDonwload">APP下载</btn> <!--这个标签是被btn.vue解析的-->
    </div>
</template>

<script>
import btn from "../core/btn.vue"
export default {
    components: {
        btn,   // 光是 import 进来还不够，要注册进组件才能用
    },
}
</script>

<style lang="scss" module> //使 css 模块化：1.在style 里面加module，2.在div写成这样 :class="$style.header
  .header{
    color: #666;
    font-size: 100px; //****量出来是50 ，因为"设备像素比" 是2 ，所以这里真实的理想视口尺寸是100
    line-height: 100px;
    position: fixed;
    top: 0;
    left: 0; //left: 0 & right: 0 代表宽度100%
    right: 0;
    font-size: 32px;
    background: #fff url(//m.jr.jd.com/spe/qyy/main/images/jr-logo.png) center center no-repeat;
    background-size: auto 50%;
    z-index: 100;  //层级最高当往下滑动时候，要盖住下面
    .left{
      font-size: 28px ;  //这里量出是14 所以也要乘2
      height: 30px;
      line-height: 30px;
      margin: 17px 0 0 18px;

    }
    .btnDonwload{
      float: right;
      font-size: 24px; //凡是设计像素的 都要 乘以 设备像素比(像 宽，高，fontsize都是)
      border-width: 0;
      min-width: 120px;
      height: 56px;
      line-height: 56px;
      padding: 0;  //padding 0 就是代表要 里面内边距都是 0
      border-radius: 4px;
      margin: 28px 24px 0 0;
    }
  }
</style>
