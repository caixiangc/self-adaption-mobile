<template lang="html">
    <div>
        <Heador/>
        <Slidor/>
        <Signs/>
        <In/>
        <Inone/>
        <Intwo/>
        <Morewealfare/>
        
        <Footer bools="false"/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue" // 因为禁止使用Header默认的，所以我们用Heador 代替 Header
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"
import Slidor from "./rslider.vue"
import Signs from "./signs.vue"
import In from "./in.vue"
import Inone from "./inone.vue"
import Intwo from "./intwo.vue"
import Morewealfare from "./morewealfare.vue"

export default {
    components: {
        Heador,
        Slidor,
        Footer,
        Navbar,
        Signs,
        In,
        Inone,
        Intwo,
        Morewealfare,
    },
}
</script>
