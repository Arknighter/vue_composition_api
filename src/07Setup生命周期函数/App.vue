<template>
    <h2>setup生命周期</h2>
</template>
<script>
// 对比optionsAPI  setup中只有before/create没有
import {onMounted} from 'vue'
export default{
    // created(){

    // },
    // beforeMount(){

    // },
    // beforeUpdate(){

    // },
    // updated(){

    // }

    setup(){
        //执行setup函数的过程，需要注册别的生命周期函数
        onMounted(()=> {
            console.log("onMounted");
        })
    }

}
</script>
<style scoped>

</style>