import Vue from 'vue'
import app from './App.vue'

import { NavBar, Swipe, SwipeItem } from 'vant';
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import  router from './router.js'



new Vue({
    el: '#app',
    render: c=>c(app),
    router
})