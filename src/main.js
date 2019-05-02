import Vue from 'vue'
import app from './App.vue'

import { NavBar } from 'vant';
Vue.use(NavBar);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

new Vue({
    el: '#app',
    render: c=>c(app)
})