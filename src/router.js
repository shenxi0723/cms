import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  home from './components/tabbar/Home.vue'
import  member from './components/tabbar/Member.vue'
import  cart from './components/tabbar/Cart.vue'
import  search from './components/tabbar/Search.vue'

var router = new VueRouter({
    routes:[
        {path:'/home',component: home},
        {path:'/member',component: member},
        {path:'/cart',component: cart},
        {path:'/search',component: search},
    ],
    linkActiveClass: 'mui-active'
})

export default router