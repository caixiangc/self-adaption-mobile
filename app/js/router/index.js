import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/money.vue"
import Whitet from "../whitemoney/index.vue"
import Raise from "../raise/index.vue"
import Downloads from "../special/downloads.vue"

import "../../css/reset.scss"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        }, {
            path: "/money",
            name: "money",
            component: Money,
        },
        {
            path: "/whitet",
            name: "whitet",
            component: Whitet,
        },
        {
            path: "/raise",
            name: "raise",
            component: Raise,
        },
        {
            path: "/downloads",
            name: "downloads",
            component: Downloads,
        },
    ],
})
