<template lang="html">
    <article class=""> <!--先生成最外层的容器-->
        <Slider :items="items" :cname="$style.slider"/> <!--通过:items="items" 把下面 items数据传到<Slider>组件里面去,,,通过:cname="slider"自定义名称(写的是css样式) -->
        <section :class="$style.list"><!--:items="items" v-for="item in enters" 可以直接把下面数据拿过来-->
            <div :class="$style.item" v-for="item in enters" :key="item.img"> <!--用图片地址表示 key-->
                <router-link :to="{ name: item.href}">   <!--这里href 表示要跳转的地址-->
                    <img :src="item.img" :alt="item.title"> <!--图片是内联样式，文本是 text，图片要居中的话，就要 display:inline-block,,:src="item.img"这里src 要引用-->
                    <h4>{{ item.title }}</h4> <!--内联样式就是直接加在某个元素属性中的样式。方法为<p style="color:white;"></p>-->
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
import Slider from "../core/slider.vue"  // 这里的Slider 我们在页面上 应用 就是以标签形式引用的

export default {
    components: {
        Slider,
    },
    data() {
        return {
            items: [{
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15799/217/2165610331/48188/290049ec/5a92cdc1N47990710.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t13249/201/1527043708/44220/e90023b7/5a92cd8fNaa4bd7c9.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t14665/5/2293191133/49339/a3f59b31/5a92cd50N5d971de1.jpg?width=750&height=320",
            }, {
                href: "home",
                src: "//img12.360buyimg.com/jrpmobile/jfs/t15799/217/2165610331/48188/290049ec/5a92cdc1N47990710.jpg?width=750&height=320",
            }],
            enters: [{
                href: "home", // 因为是单页面路由所以首页路由 home就行
                title: "优惠券",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
            },
            {
                href: "home", // 因为是单页面路由所以首页路由 home就行
                title: "领红包",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
            },
            {
                href: "home", // 因为是单页面路由所以首页路由 home就行
                title: "抢钢镚",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
            },
            {
                href: "home", // 因为是单页面路由所以首页路由 home就行
                title: "白天提额",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
            },
            {
                href: "home", // 因为是单页面路由所以首页路由 home就行
                title: "领京豆",
                img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
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
      width: 100%;  //中间轮播图，当放大后图片随着尺寸变大（要写在业务层，不能写在逻辑层）
    }
  }
  .list{
    @include list(row);
    background: #fff;
    padding-top: 40px; //具体怎么量 就是找到最外层的那个div 然后看属性
    padding-bottom: 20px;
    //因为用的是 flux 布局，怎么让那五个div 平分空间 要用到下面那个属性
    justify-content: space-around; //两端对齐
    a{
      text-decoration: none;
    }
    .item{
      text-align: center;
      img{
        display: inline-block;
        width: px2rem(45);  //实际是45
        height: px2rem(45)
      }
      h4{
        font-size: px2rem(13);
        margin-top: px2rem(6);
        color: #666
      }
    }
  }
</style>
