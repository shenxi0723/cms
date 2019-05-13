import Vue from 'vue'
import app from './App.vue'

import { NavBar, Swipe, SwipeItem, Button, Tab, Tabs, Lazyload,Stepper } from 'vant';
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Button);
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
Vue.use(Stepper);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import  router from './router.js'

import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.1.4:5000'

import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})

new Vue({
    el: '#app',
    render: c=>c(app),
    router
})