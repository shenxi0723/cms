<template>
    <div class="app-container">
        <!-- Header 区域 -->
        <van-nav-bar  title="固定在顶部"  fixed class='header' left-text="返回"  @click-left="onClickLeft" v-if="flag"/>
        <van-nav-bar  title="固定在顶部"  fixed class='header'  @click-left="onClickLeft" v-else/>

        <!-- 中间 router-view 区域 -->
        <transition>
            <router-view></router-view>
        </transition>
        

        <!-- Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/cart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
        
    </div>
</template>
<script>
 export default {
    data(){
        return {
            flag: false
        }
    },
    created(){
        this.flag = this.$route.path === '/home' ? false : true
    },
    methods: {
        onClickLeft(){
            this.$router.go(-1);
        }
    },
    watch:{
        "$route.path": function(newVal){
            if(newVal === '/home') {
                this.flag=false
            } else{
                this.flag=true
            }
        }
    }
}  
</script>
<style lang="less" scoped>
.app-container{
    padding-top: 46px;
    padding-bottom: 50px;  
    overflow-x: hidden;  
}
.header {
    z-index: 99;
    background: #CCC;
}
.v-enter {
    opacity: 0;
    transform: translateX(100%);
}
.v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
    .v-enter-active, .v-leave-active{
        transition: all 0.5s ease;
    }
</style>

