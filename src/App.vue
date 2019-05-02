<template>
    <div class="app-container">
        <!-- Header 区域 -->
        <van-nav-bar  title="固定在顶部"  fixed="true" class='header' />


        <!-- 中间 router-view 区域 -->
        <h1>Test 文本</h1>

        <!-- Tabbar 区域 -->
        <nav class="mui-bar mui-bar-tab">
            <a class="mui-tab-item" href="#tabbar">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </a>
            <a class="mui-tab-item mui-active" href="#tabbar-with-chat">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-contact">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
                <span class="mui-tab-label">购物车</span>
            </a>
            <a class="mui-tab-item" href="#tabbar-with-map">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </a>
        </nav>
        
    </div>
</template>
<script>

</script>
<style lang="less" scoped>
    .app-container{
        padding-top: 40px;

         
    }
    .header {
        background: #CCC;
    }  
</style>

