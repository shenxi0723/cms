<template>
    <div class="cart-container">
        <div class="goods-list">
            <!-- 商品列表项区域 -->
            <div class="mui-card" v-for="(item,index) in cart_list" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
                        <cartSwitch :item_status="$store.getters.get_ID_Selected[item.id]" :current_id="item.id" ></cartSwitch>
                        <!-- 
						<van-switch :value="$store.getters.get_ID_Selected[item.id]" size="18px" />
                        -->
                        <img :src="item.thumb_img" >
                        <div class="info">
                            <h3 v-text="item.title"></h3>
                            <p>
                                <span class="price">￥{{item.sell_price}}</span>
                                <cartNumbox :max_num="item.sq" :initcount="$store.getters.get_ID_Count[item.id]" :goodsid="item.id"></cartNumbox>
                                <a href="#" @click.prevent="removeItem(item.id,index)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>
        <!-- 结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner account">
                    <div class="left">
                        <p>总计（不含运费）</p>
                        <p>您已勾选商品：<span class="red">{{$store.getters.get_total_Count_Price.total_count}}</span> 件</p> 
                        <p>总金额：<span class="red">￥{{$store.getters.get_total_Count_Price.total_price}}</span></p>
                    </div>
                    <div class="rigth">
                        <van-button type="danger" >去结算</van-button>
                    </div>
                </div>
            </div>
		</div>
        <p>{{$store.getters.get_ID_Selected}}</p> 
    </div>
</template>
<script>
import cartNumbox from "../sub_comps/cart_numbox.vue"
import cartSwitch from "../sub_comps/cart_switch.vue"

import axios from 'axios';
import { Toast } from 'vant'

export default {
    data(){
        return {
            checked:true,
            switchA:{checked:true,size:'small'},
            cart_list:[]
        }
    },
    created(){
        this.getCartList();
    },
    methods:{
        getCartList(){
            if (this.$store.getters.getIds.length ==0){
                return ;
            }
            axios.post("/goods/cart_info",{
                ids: this.$store.getters.getIds
            }).then(function(result){
                this.cart_list=result.data;
            }.bind(this)).catch(function(error){Toast('数据加载失败')});
        },
        removeItem(id,index){
            this.cart_list.splice(index,1)
            this.$store.commit('removeitem',id)
        }
    },
    components: {
        cartNumbox,
        cartSwitch
    }
}
</script>
<style lang="less" scoped>
.cart-container{
    background-color: #EEE;
    overflow: hidden;
    .goods-list{
        .mui-card-content-inner{
            display: flex;
            justify-content:space-around;
            align-items: center;
            img{
                width: 50px;
                height: 50px;
                margin: 0 3px;
            }
            h3{
                font-size: 12px;
                margin-bottom: 10px;
            }
            .info{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .price{
                    color: crimson;
                    font-weight: 600;
                }
                p{
                    display: flex;
                    div {
                        margin: 0 5px;
                    }    
                }
            }
        }
    }
    .account{
        display: flex;
        justify-content:space-between;
        align-items: center;
        p{
            margin: 0;
            .red{
                color:red;
                font-weight: bold;
                font-size: 14px;
            }
        }
        
    }
}
</style>