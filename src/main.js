import Vue from 'vue'
import app from './App.vue'

import Vuex from 'vuex'
Vue.use(Vuex)

import { NavBar, Swipe, SwipeItem, Button, Tab, Tabs, Lazyload,Stepper,Switch } from 'vant';
Vue.use(NavBar);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Button);
Vue.use(Tab).use(Tabs);
Vue.use(Lazyload);
Vue.use(Stepper);
Vue.use(Switch);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import  router from './router.js'

import axios from 'axios';
axios.defaults.baseURL = 'http://192.168.1.4:5000'

import moment from 'moment'
Vue.filter('dateFormat',function(dateStr,pattern="YYYY-MM-DD HH:mm:ss"){
    return moment(dateStr).format(pattern)
})

//每次刚进入网站，一定先回调用mani.js
//在调用时先调用本地存储，把购物车数据读取出来
var cart = JSON.parse(localStorage.getItem('cart') || '[]')

var store = new Vuex.Store({
    state:{
        //将购物车中的商品用一个数组存储起来
        //在car数组中，存储一些商品的对象
        //{id:商品的id,count: 购买数量,price:单价,selected:购买商品是否选中}
        //cart:[]
        cart
    },
    mutations:{
        addItem(state,obj){
            /*
            点击加入购物车按钮，把商品信息对象保存到state的cart[]
            分析：
            1. 如果购物车中之前就已经有该商品信息，那么只需要更新数量就可以
            2. 如果没有则直接把商品数据push到cart[]中去即可
            */
           var flag = false //假设在购物车中没有对应商品

            state.cart.some(item=>{
                if (item.id==obj.id) {
                    item.count= parseInt(obj.count)
                    flag=true
                    return true
                }   
            })
            //如果最终，循环完毕得到的flag还是flase
            //则把商品数量直接push进cart[]
            if (!flag) {
                state.cart.push(obj)
            }
            //当更新cart之后，把cart数组存储到本地的localStroage中
            localStorage.setItem('cart',JSON.stringify(state.cart))

        },
        updatecount(state,goodsinfo){
            state.cart.forEach(item=>{
                if (item.id == goodsinfo.id) {
                    item.count =parseInt(goodsinfo.count)
                }
                return true;
            })
            //当更新cart之后，把cart数组存储到本地的localStroage中
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        removeitem(state,id){
            state.cart.some((item,i)=>{
                if (item.id==id){
                    state.cart.splice(i,1)
                }
            })
            //当更新cart之后，把cart数组存储到本地的localStroage中
            localStorage.setItem('cart',JSON.stringify(state.cart))
        },
        updateSelect(state,obj){
            state.cart.some(item=>{
                if (item.id==obj.id){
                    item.checked=obj.checked
                }
            })
            //当更新cart之后，把cart数组存储到本地的localStroage中
            localStorage.setItem('cart',JSON.stringify(state.cart))
        }
    },
    getters:{
        getAllCount(state){
            var totalCount=0
            state.cart.forEach(item=>{
                totalCount += item.count
            })
            return totalCount
        },
        getIds(state){
            var ids=[]
            state.cart.forEach(item=>{
                ids.push(item.id)
            })
            return ids
        },
        get_ID_Count(state){
            var idTocount={}
            state.cart.forEach(item=>{
                idTocount[item.id]=item.count
            })
            return idTocount
        },
        get_ID_Selected(state){
            var idToSelected={}
            state.cart.forEach(item=>{
                idToSelected[item.id]=item.checked
            })
            return idToSelected
        },
        get_total_Count_Price(state){
            var obj={
                total_count:0,
                total_price:0
            }
            state.cart.forEach(item=>{
                if(item.checked) {
                    obj.total_count += item.count;
                    obj.total_price += item.count*item.price
                }
            })
            return obj
        }
    }
})

new Vue({
    el: '#app',
    render: c=>c(app),
    router,
    store
})