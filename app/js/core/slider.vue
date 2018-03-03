<template lang="html">
    <section :class="cname">  <!--这里设置cname是相当于一个 css的参数，是从外边传数据过来的-->
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <!--考虑到遍历的性能，所以要指定一个key 值-->
            <swiper-slide v-for="item in items" :key="item.href"><!--swiper-slide也算是个容器，图片信息通过数组形式传进来，传到这里items ，让v-for自己去遍历-->
                <router-link :to="{ name: item.href }"> <!--这里路由不需要额外额传递参数,如果需要单独参数传进来那也是可以的param{}-->
                    <img :src="item.src" alt=""> <!--不能直接写 src=“”，要 :src=""-->
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"/> <!--需要判断是否有指示器，因为我们这是一个高复用的组件,有些场景是没有指示器的-->
            <!--如果不加slot="pagination" 那么没有下面轮播图指针，就是下面的点点点-->
        </swiper>
    </section>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper" // 把依赖引用进来
export default {
    components: { // 通过这种组件去注册一下，然后就能在模板中使用了
        swiper,
        swiperSlide,
    },
    props: {
        cname: { // 上面用到的 cname 就是要在这里定义的
            type: String,
            default: "",
        },
        options: { // 因为options 是从外部传进来的，所以这里要写在props里面
            type: Object,
            default() { // 任意这种写法都不是一个对象，**而是返回一个对象
                return {
                    autoplay: true,
                    loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                    },
                    notNextTick: false, // 不点击
                }
            },
        },
        items: {
            type: Array,
            default() {
                return []  // 将来引用这种格式就行了[{href:'',src:''}]，href 是点击图片链接的地址， src 是轮播图图片地址
            },
        },
    },
}
</script>

<style lang="css">
@import "~swiper/dist/css/swiper.css";
</style>
