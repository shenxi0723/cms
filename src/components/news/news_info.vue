<template>
    <div class="news_detail_container">
        <h3 class="title">{{news_info.title}}</h3>
        <p class="subtitle">
            <span>发表时间：{{news_info.create_time | dateFormat() }} </span>
            <span>点击：{{ news_info.access_times }}次</span>
        </p>
        <hr>
        <div class="content" v-html="news_info.content"></div>
        <!-- 评论区域 -->
        <comment-box :news_id="id"></comment-box> 
    </div>
</template>
<script>
import { Toast } from 'vant'
import axios from 'axios';

import comment from '../sub_comps/comments.vue'

export default {
    data(){
        return {
            id: this.$route.params.id,
            news_info: {},
        }
    },
    created(){
        this.getNewsInfo();
    },
    methods:{
        getNewsInfo(){
            axios.get('/it_asset/news_list/'+this.id).then(function(result){
                if (result.status === 200){
                    this.news_info=result.data;
                } else {
                    Toast('新闻内容加载失败');
                }    
            }.bind(this)).catch(function(error){Toast('新闻内容加载失败')});
        }
    },
    components:{
        'comment-box': comment
    }
}
</script>
<style lang="less" scoped>
.news_detail_container{
    padding: 0 5px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 12px 0;
        color: #222;
    }
    .subtitle{
        font-size: 12px;
        color: #123056;
        display: flex;
        justify-content: space-between;
    }
    .content{
        font-size: 14px;
    }
}
</style>
