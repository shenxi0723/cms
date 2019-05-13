<template>
    <div class="comment-container">
        <hr>
        <textarea placeholder="请输入要评论的内容（最多120个字）" maxlength="120" v-model="comments_body">
        </textarea>
        <van-button type="info" size="large" @click="postComment">发表评论</van-button>
        <div class="comment-list">
            <div class="comment-item" v-for="(item, index) in comments_info" :key="item.id">
                <div class="comment-title">
                    {{index+1}}楼&nbsp;&nbsp;
                    用户：{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;
                    发表时间：{{item.post_time|dateFormat('YYYY-MM-D HH:mm')}}
                </div>
                <div class="comment-body">
                    {{item.body === 'undefined' ? '此用户很懒，什么也没写' : item.body}}
                </div>
            </div>   
        </div>
        <van-button type="warning" plain hairline size="large" @click="getMore">加载更多</van-button>
    </div>
</template>
<script>
import { Toast } from 'vant'
import axios from 'axios';
export default {
    data(){
        return {
            pageIndex: 1,
            comments_info: [],
            comments_body:'',
        }
    },
    props:["news_id"],
    created(){
        this.getCommentsInfo();
    },
    methods:{
        getCommentsInfo(){
            axios.get('/it_asset/comment_list/'+this.news_id+"/"+this.pageIndex).then(function(result){
                if (result.status === 200){
                    this.comments_info = this.comments_info.concat(result.data)
                } else {
                    Toast('评论内容加载失败');
                }    
            }.bind(this)).catch(function(error){Toast('评论内容加载失败')});
        },
        getMore(){
            this.pageIndex++;
            this.getCommentsInfo();
        },
        postComment(){
            if (this.comments_body.trim() === '') {
                return Toast('不能发表空评论')
            } 

            axios.post('/it_asset/post_comment',{
                id: this.news_id,
                name: '匿名用户',
                body: this.comments_body
                }).then(result=>{this.comments_info = result.data})
    
            this.comments_body=''
        }
    }
}
</script>
<style lang="less">
.comment-container{
    h3{
        font-size: 16px;
        text-align: center;
    }
    textarea{
        font-size: 12px;
        height: 85px;
        margin: 0;
    }
    .comment-list{
        margin: 5px 0;
        .comment-item{
            font-size: 13px;
            .comment-title{
                line-height: 20px;
                background-color: #ccc;
            }
            .comment-body{
                line-height: 23px;
                text-indent: 2em;
            }
        }
    }
}
</style>

