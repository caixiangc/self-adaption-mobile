<template lang="html">
    <div>
        <Heador/>
        <Slidor/>
        <Novice/>
        <Borrows/>
        <Moneys/>
        <Product/>
        <Life/>
        <Footer/>
        <Navbar/>
    </div>
</template>

<script>
import Heador from "../public/header.vue" // 因为禁止使用Header默认的，所以我们用Heador 代替 Header
import Footer from "../public/footer.vue"
import Navbar from "../public/navbar.vue"

import Slidor from "./hslider.vue"
import Novice from "./novice.vue"
import Borrows from "./borrow.vue"
import Moneys from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"

export default {
    components: {
        Heador,
        Slidor,
        Novice,
        Borrows,
        Moneys,
        Product,
        Life,
        Footer,
        Navbar,
    },
}
</script>
