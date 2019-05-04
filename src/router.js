import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  home from './components/tabbar/Home.vue'
import  member from './components/tabbar/Member.vue'
import  cart from './components/tabbar/Cart.vue'
import  search from './components/tabbar/Search.vue'

import news_list from './components/news/news_list.vue'
import news_detail from './components/news/news_info.vue'

var router = new VueRouter({
    routes:[
        {path:'/', redirect: '/home'},
        {path:'/home',component: home },
        {path:'/home/news',component: news_list },
        {path:'/home/news_detail/:id',component: news_detail },
        {path:'/member',component: member},
        {path:'/cart',component: cart},
        {path:'/search',component: search},
    ],
    linkActiveClass: 'mui-active'
})

export default router