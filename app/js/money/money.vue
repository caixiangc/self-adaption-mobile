<template lang="html">
    <div>
        <Heador/>
        <Slidor/>
        <Onlyimg/>
        <Financial/>
        <Onlyimgtwo/>
        <Selected/>

        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue" // 因为禁止使用Header默认的，所以我们用Heador 代替 Header
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"

import Slidor from "./mslider.vue"
import Onlyimg from "./onlyimg.vue"
import Onlyimgtwo from "./onlyimgtwo.vue"
import Selected from "./selected.vue"

import Financial from "./financial.vue"


export default {
    components: {
        Heador,
        Slidor,
        Onlyimg,
        Footer,
        Navbar,
        Financial,
        Onlyimgtwo,
        Selected,
    },
}
</script>
