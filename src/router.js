import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  home from './components/tabbar/Home.vue'
import  member from './components/tabbar/Member.vue'
import  cart from './components/tabbar/Cart.vue'
import  search from './components/tabbar/Search.vue'

import news_list from './components/news/news_list.vue'
import news_detail from './components/news/news_info.vue'

import albums_list from './components/albums/albums_list.vue'

import good_list from './components/goods/Good_list.vue'
import goods_info from './components/goods/goods_info.vue'
import goods_intro from './components/goods/goods_intro.vue'
import goods_comms from './components/goods/goods_comms.vue'

var router = new VueRouter({
    routes:[
        {path:'/', redirect: '/home'},
        {path:'/home',component: home },
        {path:'/home/news',component: news_list },
        {path:'/home/news_detail/:id',component: news_detail },
        {path:'/home/albums',component: albums_list },
        {path:'/home/goodlist',component: good_list },
        {path:'/home/goodsinfo/:id',component: goods_info, name:'goodsinfo' },
        {path:'/home/goodsintro/:id',component: goods_intro, name:'goodsIntro' },
        {path:'/home/goodscomms/:id',component: goods_comms, name:'goodsComment' },
        {path:'/member',component: member},
        {path:'/cart',component: cart},
        {path:'/search',component: search},
    ],
    linkActiveClass: 'mui-active'
})

export default router