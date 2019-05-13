<template>
    <div class="good-list">
        <!-- 
        <router-link class="good-item" v-for="item in goods_list" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
            <img :src="item.thumbnail_img" alt="">
            <h1 class="title" v-text="item.name"></h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.sq}}件</span>
                </p>
            </div>
        </router-link>
        -->
        <div class="good-item" v-for="item in goods_list" :key="item.id" @click="goGoodsDetail(item.id)">
            <img :src="item.thumbnail_img" alt="">
            <h1 class="title" v-text="item.name"></h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{item.sell_price}}</span>
                    <span class="old">￥{{item.market_price}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{item.sq}}件</span>
                </p>
            </div>
        </div> 
    </div>
</template>
<script>
import axios from 'axios';
import { Toast } from 'vant'
export default {
    data(){
        return{
            goods_list:[]
        }
    },
    created(){
        this.getGoods();
    },
    methods:{
        getGoods(){
            axios.get("/goods/list_goods/0").then(function(result){
                this.goods_list=result.data;
            }.bind(this)).catch(function(error){Toast('数据加载失败')});
        },
        goGoodsDetail(id){
            //使用js的形式进行导航
            //1 最简单的
            //this.$router.push('/home/goodsinfo/'+id)
            //2 传递对象
            //this.$router.push({path: '/home/goodsinfo/'+id})
            //3 传递命名的路由
            this.$router.push({
                name: 'goodsinfo',
                params: {
                    id
                }
            })
        }   
    }
}
</script>
<style lang="less" scoped>
.good-list {
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between; 

    .good-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #aaa;
        margin: 4px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 226px;
        img{
            width: 100%;
        }
        .title{
            padding: 2px;
            font-size: 12px;
        }
        .info{
             background-color: #eee;
            p {
                margin-bottom: 0px;
                padding: 5px;
            }
            .now{
                color: firebrick;
                font-weight: 800;
                font-size: 13px;
            }
            .old{
                text-decoration: line-through;
                font-size: 12px;
            }
        }
        .sell{
            display: flex;
            justify-content: space-between;
            color: #333;
            font-size: 11px;
        }
    }
}
</style>
