<template>
    <van-stepper v-model="value"  class="numbox"  @change="onChange" :max="max_num"/>
</template>
<script>
export default {
    data() {
        return {
            value: 1
            }
        },
    props:['max_num'],
    methods:{
        onChange(value) {
            this.$emit('func',value)
    }
  }
}
</script>
<style lang="less">
.numbox{
    .van-stepper__input{
    width: 30px;
    height: 26px;
    padding: 1px;
    border: 0;
    margin: 1px;
    background-color: #f2f3f5;
    border-width: 1px 0;
    border-radius: 0;
    box-sizing: content-box;
    color: #323233;
    font-size: 14px;
    font-weight: 600;
    vertical-align: middle;
    text-align: center;
    }
}
</style>
