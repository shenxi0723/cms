<template>
    <van-stepper v-model="value" integer class="cart-numbox" :max="max_num" disable-input @change="onchange"/>
</template>
<script>
export default {
    data() {
        return {
            value: this.initcount
        }
    },
    props: ["max_num","initcount","goodsid"],
    methods:{
       onchange(){
           this.$store.commit("updatecount",{id:this.goodsid,count:this.value})
       }
    }
}
</script>
<style lang="less">
.cart-numbox{
    .van-stepper__minus, .van-stepper__plus{
        width: 20px;
        height: 20px;
        border: 1px solid #cccccc;
    }
    .van-stepper__input{
    width: 22px;
    height: 18px;
    padding: 0px;
    border: 0;
    margin: 0px;
    background-color: #f2f3f5;
    border-width: 1px 0;
    border-radius: 0;
    box-sizing: content-box;
    color: #323233;
    border: 1px solid #cccccc;
    font-size: 10px;
    font-weight: 600;
    vertical-align: middle;
    text-align: center;
    }
}
</style>
