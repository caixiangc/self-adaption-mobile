<template lang="html">
    <div>
        <Heador/>
        <Slidor/>
        <Welfare/>
        <Moreservice/>


        <Footer/>
        <Navbar/>

    </div>
</template>

<script>
import Heador from "../public/header.vue" // 因为禁止使用Header默认的，所以我们用Heador 代替 Header
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"

import Slidor from "./wslider.vue"
import Welfare from "./welfare.vue"
import Moreservice from "./moreservice.vue"


export default {
    components: {
        Heador,
        Slidor,
        Footer,
        Navbar,
        Welfare,
        Moreservice,
    },
}
</script>
