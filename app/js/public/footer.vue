<template lang="html">
    <Panel :class="$style.panel" title="公司信息">
        <ul :class="$style.content">
            <li v-if="bools == 'true'">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252" alt="">
            </li>
            <li>
                <div :class="$style.innercom">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" alt="">
                    <p>客户端</p>
                </div>
                <div :class="$style.innercom">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" alt="">
                    <p>触屏版</p>
                </div>
                <div :class="$style.innercom">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" alt="">
                    <p>电脑版</p>
                </div>
            </li>
            <li>
                <span>Copyright © 2004-2018 京东JD.com 版权所有</span>
            </li>
            <li>
                <span>投资有风险，购买需谨慎</span>
            </li>
            <li>
                <span>京东金融平台服务协议</span>
            </li>
            <li>
                <span>京东金融隐私政策</span>
            </li>
        </ul>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    props: {
        bools: {
            type: String,
            default: "true",
        },
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
  &>h4{
    display: none;
  }
  .content{
    @include list;
    li{
      position: relative;
      width: 100%;
      background: #f5f5f5;
      padding: px2rem(5) 0;
      img{
        width: 100%;
        height: px2rem(84);
      }
      justify-content: space-around;
      @include list(row);
      .innercom{
        img{
          width: px2rem(45);
          height: px2rem(45);
          margin: 0 auto;
        }
        p{
          font-size: px2rem(13);
          text-align: center;
          display: block;
          color: #999999;
          margin-top: px2rem(6);
          @include textnowrap;
        }
      }
      span{
        font-size: px2rem(12);
        padding: px2rem(12) px2rem(16);
        text-align: center;
        color: #999;
        position: relative;
        box-sizing: border-box;
      }
      &:nth-child(3){ //选择从第2个开始 后面跟上 before
        padding-bottom: px2rem(20);
      }

      &:nth-child(n+4){ //选择从第2个开始 后面跟上 before
        &:before{
          content: "";
          width: 100%;
          height: 0;
          border-top: 1px solid #DDD;
          position: absolute;
          top: 0;
          right: 0;
        }
      }
      &:last-child
      {
        margin-bottom: px2rem(40);
      }
    }
  }
}
</style>
