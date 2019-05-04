<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in news_list" :key="item.id">
                <router-link :to="'/home/news_detail/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="https://source.unsplash.com/300x300/?book">
                    <div class="mui-media-body">
                        <h1>{{item.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{item.create_time | dateFormat('YYYY-MM-DD')}}</span>
                            <span>点击:{{item.access_times}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { Toast } from 'vant'
import axios from 'axios';
export default {
    data(){
        return {
            news_list:[]
        }
    },
    created(){
        this.getNewsList()
    },
    methods: {
        getNewsList(){
            axios.get("/it_asset/news_list").then(function(result){
                if (result.status === 200){
                    this.news_list=result.data;
                } else {
                    Toast('新闻列表加载失败');
                }    
            }.bind(this)).catch(function(error){Toast('新闻列表加载失败')});
        }
    }
}
</script>
<style lang="less" scoped>
.mui-table-view {
    li {
        h1 {
            font-size: 14px;
        }
        .mui-ellipsis {
            font-size: 11px;
            color:#226def;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>
