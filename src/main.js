import Vue from 'vue'
import app from './App.vue'

import { NavBar, Swipe, SwipeItem, Button } from 'vant';
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Button);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import  router from './router.js'

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:5000'

import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})

new Vue({
    el: '#app',
    render: c=>c(app),
    router
})