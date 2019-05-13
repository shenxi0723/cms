<template>
    <div>
        <!--
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in swip_list" :key="item.url"><img :src="item.url"></van-swipe-item>
        </van-swipe>
        -->
        <home-swip :swip_list="swip_list" :isfull="true"></home-swip>

        <!-- 九宫格区域（六宫格） -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/news">
                            <img src="../../images/icons/news.png" />
                            <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/albums">
                        <img src="../../images/icons/share.png" />
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/home/goodlist">
                        <img src="../../images/icons/shopping.png" />
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../images/icons/lianwang.png" />
                        <div class="mui-media-body">留言反馈</div></a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../images/icons/video.png" />
                        <div class="mui-media-body">视频专区</div></a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../images/icons/contact.png" />
                        <div class="mui-media-body">联系我们</div></a>
                </li>
            </ul> 
        </div>
    </div>
</template>
<script>
import homeSwip from '../sub_comps/swip.vue'
import { Toast } from 'vant'
import axios from 'axios';
export default {
    data(){
        return {
            swip_list: []
        }
    },
    created(){
        this.getSwipdata()
    },
    methods:{
        getSwipdata(){
            axios.get("/it_asset/list_images").then(function(result){
                if (result.status === 200){
                    this.swip_list=result.data;
                } else {
                    Toast('图片加载失败...');
                }    
            }.bind(this)).catch(function(error){Toast('图片加载失败')});
        }
    },
    components:{
        homeSwip
    }
}
</script>
<style lang="less" scoped>
    .mui-content ul {
        background: white !important;
        border: none;
        li {
            border: none !important;
            img {
                width: 40px;
                height: 40px;
            }
        }
    }
    .mui-media-body {
        font-size: 12px !important;
    }
</style>


