<template>
    <div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swip_list" :key="item.url"><img :src="item.url"></van-swipe-item>
      </van-swipe>

        <!-- 九宫格区域（六宫格） -->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/icons/news.png" />
                    <div class="mui-media-body">新闻资讯</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">

                    <img src="../../images/icons/share.png" />
                    <div class="mui-media-body">图片分享</div></a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/icons/shopping.png" />
                    <div class="mui-media-body">商品购买</div></a>
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
import axios from 'axios';
import { Toast } from 'vant'
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
            axios.get("http://127.0.0.1:5000/it_asset/list_images").then(function(result){
                if (result.status === 200){
                    this.swip_list=result.data;
                } else {
                    Toast('图片加载失败...');
                }    
            }.bind(this)).catch(function(error){Toast('图片加载失败')});
        }
    }
}
</script>
<style lang="less" scoped>
    .van-swipe {
        height: 180px;

        .van-swipe-item {
            &:nth-child(1){
                background: burlywood
            }
            &:nth-child(2){
                background: yellowgreen
            }
            &:nth-child(3){
                background: palevioletred
            }
            &:nth-child(4){
                background: chocolate
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
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


