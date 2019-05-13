<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in swip_list" :key="item.url"><img :src="item.url" :class="{full:isfull}"></van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>
export default {
    props:['swip_list','isfull']
}
</script>
<style lang="less" scoped>
.van-swipe {
    height: 180px;
    .van-swipe-item{
        text-align: center;
        img {
            height: 100%;
            }
    }  
}
.full{
    width: 100%
}
</style>
 