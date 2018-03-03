<template lang="html">
    <Panel title="精选推荐" :class="$style.panel">
        <section :class="$style.content">
            <dl :class="$style.item" v-for="item in items" :key="item.src">
                <dt>{{ item.title }}<span>{{ item.sub }}</span></dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </section>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [{
                title: "定期理财",
                sub: "理财首选",
                rate: "5.6%",
                text: "历史年化回报率",
            }, {
                title: "小白理财",
                sub: "理财首选",
                rate: "4.22%",
                text: "7日年化收益率",
            }, {
                title: "月月盈",
                sub: "养老保障",
                rate: "5%",
                text: "七日年化收益率",
            }, {
                title: "小白基金",
                sub: "天天赚钱",
                rate: "4.27%",
                text: "7日年化收益率",
            }],
        }
    },
}
</script>

<style lang="scss" module>
@import "../../css/element.scss";
@import "../../css/commoncss.scss";
@import "../../css/px2rem.scss";
$designWidth: 375; //设计图的宽度，要事先 设定
  .panel{
    @include panel;
    .content{
      &:after{
        content: "";
        width: 100%;
        height: 0px;
        display: block;
        box-sizing: border-box;
        border-bottom: 1px solid #DDD;
        position: relative; //relative还能这么用 在给伪类加一个relative偏移量 他会往上便宜 -120px
        top: px2rem(-120);
      }
      @include list(row);
      .item{
        position: relative; //这里用relative的原因是，下面用的是absolute，实现动态 border 变动
        width: 50%;

        box-sizing: border-box; //padding和border被包含在定义的width和height之内,他不会撑出给定盒模型的宽度，但是它会压缩内部的元素
        &:after{   //这里加在哪里 ，就是加载 item里面的最后一个元素
          content: "";
          width: 1px;
          height: 136px;
          display: block;
          //absolute和relative 配合起来使用，absolute会参照上面一个relative(这里参照点就是item的div的左上角)
          position: absolute; //**绝对定位会以相对定位为 参照物，所以上面那个相对定位很重要
          // 因为after 是放在 这个div 里面最后一个位置，如果想要让他那么必须以下两条代码
          top: 50%; //不能把position: absolute的去掉，否者这两串代码会把这个item盒模型撑开，从而导致下虚线页不准
          margin-top: -68px; //固定到中间的位置，然后再向上移动 height: 136px;的一般，就能起到垂直居中的效果

          right: 0;
          border-right: 1px solid #DDD;
        }
        &:nth-child(2n){ //意思是 它父元素里面的第偶数元素的after 属性是null
          &:after{
            display: none;
          }
        }
        padding: 34px 16px;
        dt{
          font-size: px2rem(15);
          line-height: 42px;
          font-weight: 400;
          color: #333;
          padding-left: 14px;
          font-weight: bold;
          span{
            font-size: px2rem(11);
            font-weight: 400;
            line-height: 34px;
            padding: 0 8px;
            color: #FF5155;
            vertical-align: 1px; //***这个是调 垂直对齐的 因为border 1px,所以这里要向上移动1px
            border: 1px solid #FF5155;
            margin-left: 8px;
          }
        }
        dd{
          padding-left: 14px;
          &:nth-child(2){//原因是多了一个dt  dl下面的第一个子元素不是dd 所以取不到
            font-weight: bolder;
            font-size: px2rem(22);
            height: 58px;
            line-height: 58px;
            color: #FF5155;
            @include textnowrap;
            text-align: left;
          }
          &:nth-child(3){//nth-child(n) 这个代表其父元素，下的第n个元素
            font-size: 20px;
            height: 34px;
            line-height: 34px;
            color: #999;
            @include textnowrap;
            text-align: left;
          }
        }
      }
    }

  }
</style>
