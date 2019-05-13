<template>
    <div class="albums-containers">
        <!-- 顶部滑动导航条 -->
<van-tabs swipeable color="gray" title-active-color="cornflowerblue" @click="findId_GetImages">
    <van-tab :title="item.name" v-for="item in category_list" :key="item.id">
    </van-tab>
    <!-- 图片列表区域 -->
    <div>
        <img v-for="img in image_list" v-lazy="img.img_url" :key="img.id">
    </div>
</van-tabs>
        
    </div>
</template>
<script>
import { Toast } from 'vant'
import axios from 'axios';
export default {
    data(){
        return {
            category_list:[],
            image_list: []
        };
    },
    created(){
        this.getCategory();
        this.getImages(0);
    },
    methods:{
         getCategory(){
            axios.get("/it_asset/list_albums_category").then(function(result){
                this.category_list=result.data;
                this.category_list.unshift({id:0,name:'全部'});
            }.bind(this)).catch(function(error){Toast('数据加载失败')});
        },
        getImages(id){
            axios.get("/it_asset/list_images/"+id).then(function(result){
                this.image_list=result.data;
            }.bind(this)).catch(function(error){Toast('数据加载失败')});
        },
        findId_GetImages(i,title){
            let current_id =''
            this.category_list.forEach((item)=>{
                if (title==item.name) {current_id=item.id} });
            this.getImages(current_id)
        }
    }
}
</script>
<style lang="less">
    .albums-containers{
        img {
            width: 98%;
            box-shadow: 1px 1px 5px #303030;
            margin: 5px 3px;
            border-radius: 8px;
            background: #AAA;
        }
    }
</style>


