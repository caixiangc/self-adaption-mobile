<template lang="html">
    <Panel title="新手特权" :class="$style.panel"> <!--以 :class 都是 css module的类名,对应下面那个css panel 类-->
      <!--:class="$style.panel" 如果写在子组件，而子组件class中刚好有[cname],那么它也会自动被导入到子组件中去-->
      <!--下面的这些代码 会全部插入 Panel这组件的 的插槽<slot/>里面去-->
        <section :class="$style.content">
            <div :class="$style.item">
                <h4>下载APP <span :class="$style.red">送888元礼包</span></h4>
                <p :class="$style.gray">新手专享</p>  <!--p标签是块状标签，span是内联标签-->
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100" alt="">
            </div>
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200" alt="">
                        <h4 :class="$style.red">领128元新手礼包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>  <!--块状元素带有换行的性质（脱离文档流）-->
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100" alt="">
                        <h4>打白条<span :class="$style.red">享免息</span></h4>
                        <p :class="$style.gray">立即开通享好礼</p>
                    </li>
                </ul>
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

<style lang="scss" module> //module使 我们下面css 模块化
  @import "../../css/element.scss";   //哇，好坑这里少些一个 ；  就好导致下面的 .panel 无法编译
  @import "../../css/commoncss.scss";
  @import "../../css/px2rem.scss";
  $designWidth: 375;
  .panel{
    @include panel;
    >h4{
      border-bottom: 1px solid #ddd;
    }
    .content{
      @include list(row);
      .item{
        width: 50%;
        box-sizing: border-box;//box-sizing是盒模型的规范，如果是border-box 那么在计算width 的时候也会把paddng给计算进来

        &:first-child{  //**这个选择器意思就是，如果有多个item ，那么只有第一个item生效
          padding: 32px 20px;
          text-align: center;
          border-right: 1px solid #ddd;
        }
        img{
          width: 132px;
          height: 132px;
          margin: 20px auto 28px;
        }
        h4{
          font-size: 24.36px;
          line-height: 32px;
          font-weight: 400;
          @include textnowrap;
        }
        .red{
          color: #ff0000;
          font-weight: bold;
        }
        .gray{
          color: #999;
          font-size: 22px;
          font-weight: 400;
          padding-top: 10px
        }
        ul{
          width: 100%;
          li{
            height: 144px;
            width: 100%;
            padding: 32px 20px; //前面之所以不行，是因为把这个padding 放到可外面item，压缩了li的宽度，所以虚线不能占到所有
            box-sizing: border-box;
            &:first-child{  //**这个选择器意思就是，如果有多个item ，那么只有第一个item生效
              border-bottom: 1px solid #ddd;
            }
            h4{
              //这里不用写 fontsize line-height 哪些，因为他会继承父级的 css
              text-align: left;
              padding-left: 16px
            }
            p{
              text-align: left;
              padding-left: 16px;
            }

            img{
              width: 80px;
              height: 80px;
              margin-top: 0;   //因为写在外面 有个img 属性如果这里不加 margin-top 那么会继承父级 的margin-top
              float: right;   // 这里之所以价格浮动，就能把 img 弄到右边去是因为 加了浮动后，脱离了文档流
            }
          }
        }
      }
    }
  }
</style>
