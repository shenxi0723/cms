<template>
    <!-- 
        小球动画优化思路：
        1) 导致动画不准确的本质原因，是我们把小球最终位移到的位置已经局限在了某一分辨率下的滚动条没有滚动的情况下；
        2) 只要分辨率和测试的不一样，或者滚动条有一定距离的滚动，那么问题就出现了。
        因此，不能把移动动终点的坐标位置固定化，而是应该根据不同情况，动态计算这个坐标值。小球移动的终点位置是购物车的徽标位置，计算徽标位置和小球初始位置之间的横轴和纵轴之差就可以定移动的相对位置。
        如何知道购物车的徽标位置的坐标值？使用domObject.getBoundingClientRect()方法就可以得到某个DOM元素距离页面顶部的距离。
    -->
    <div class="goodsinfo-container">
        <transition @before-enter="beforeEnter"  
                    @enter="enter"
                    @after-enter="afterEnter"    >
            <div class="ball" v-show="ball_flag" ref="ball"></div>
        </transition>
        
        <!-- 商品轮播图区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <goods-swip :swip_list="thumbnail_images_list" :isfull="false"></goods-swip>
                </div>
            </div>
		</div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goods_detail.name}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价：<del>￥{{goods_detail.market_price}}</del>&nbsp;&nbsp;&nbsp;&nbsp;
                        销售价：<span class="now_price">￥{{goods_detail.sell_price}}</span>
                    </p>
                    <p>
                        购买数量：<numbox @func="getNumber" :max_num="goods_detail.sq"></numbox>
                    </p>
                    <p>
                        <van-button type="info" size="small">立即购买</van-button>&nbsp;
                        <van-button type="danger" size="small" @click="joinCart">加入购物车</van-button>
                    </p>
                </div>
            </div>
		</div>
<!-- 商品参数区域 -->
<div class="mui-card">
    <div class="mui-card-header">商品参数</div>
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
            <p>商品货号：SF-1001-{{goods_detail.id}}</p>
            <p>库存情况：{{goods_detail.sq}} 件</p>
            <p>上架时间：{{goods_detail.created_time | dateFormat}}</p>
        </div>
    </div>
    <div class="mui-card-footer">
        <van-button type="info" size="large" plain hairline @click="goIntro(id)">图文介绍</van-button>&nbsp;
        <van-button type="danger" size="large" plain hairline @click="goComment(id)">商品详情</van-button>
    </div>
</div>
   </div>
</template>
<script>
import goodsSwip from '../sub_comps/swip.vue'
import numbox from '../sub_comps/goodsinfo_numbox.vue'
import axios from 'axios';
import { Toast } from 'vant'
import goodsinfo_numboxVue from '../sub_comps/goodsinfo_numbox.vue';
export default {
    data(){
        return{
            id: this.$route.params.id,
            thumbnail_images_list:{},
            goods_detail: {},
            ball_flag: false,
            qty:1 
        }
    },
    created(){
        this.getDetail()
    },
    methods:{ 
        getDetail(){
            axios.get('/goods/list_goods_detail/'+this.id).then(function(result){
                this.goods_detail=result.data;
                this.thumbnail_images_list=result.data.children_images;
            }.bind(this)).catch(function(error){Toast('数据加载失败')});
        },
        goIntro(id){
            this.$router.push({
                name: 'goodsIntro',
                params: {
                    id
                }
            })
        },
        goComment(id){
            this.$router.push({
                name: 'goodsComment',
                params: {
                    id
                }
            })
        },
        joinCart(){
            this.ball_flag = !this.ball_flag
            //创建出一个要保存到stroe中cart数组的对象
            var goodsinfo_store = {
                id: this.id,
                count: this.qty,
                price: this.goods_detail.sell_price,
                checked: true
            }
            this.$store.commit('addItem',goodsinfo_store)
        },
        beforeEnter(el){
            el.style.transform="translate(0,0)";
        },
        enter(el,done){
            //获取小球在页面中的位置
            const ball_pos=this.$refs.ball.getBoundingClientRect()
            //获取徽标在页面中的位置,使用操作DOM元素的方法，为徽标元素添加一个id属性
            const badge_pos= document.getElementById('badge').getBoundingClientRect()
            
            const yDist = badge_pos.top-ball_pos.top
            const xDist = badge_pos.left-ball_pos.left

            el.offsetWidth;
            el.style.transform=`translate(${xDist}px,${yDist}px)`;
            el.style.transition="all 0.6s cubic-bezier(.4,-0.3,1,.68)";
            done();
        },
        afterEnter(el){
            this.ball_flag = !this.ball_flag
        },
        getNumber(value){
            this.qty=value
        }
    },
    components:{
        goodsSwip,
        numbox
    }
}
</script>
<style lang="less" scoped>
.goodsinfo-container{
    background: #eee;
    overflow: hidden;
    p{
        display:flex;
        align-items: center;
        color: black;
        del{
            color:#888;
        }
    }
    .now_price{
        color: firebrick;
        font-size:15px;
        font-weight: 600;
    }
    .mui-card-footer{
        display: block;
    }
    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color:red;
        position: absolute;
        z-index: 80;
        top:373px;
        left:135px;
    }
}
</style>
