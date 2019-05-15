<template>
    <van-switch size="small" v-model="checked" @change="switchStatus"></van-switch>
</template>
<script>
export default {
    data(){
        return {
            id: this.current_id,
            checked: this.item_status
        }
    },
    props:["item_status","current_id"],
    methods: {
        switchStatus(){
            this.$store.commit('updateSelect',{id:this.id,checked:this.checked})
        }
    }
}
</script>
<style lang="less" scoped>

</style>
