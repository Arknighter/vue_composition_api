<template>
    <h2>03 setup other</h2>
    <h2>APP :{{  myinfo }}</h2>
    <br>
    <ShowInfo :info="myinfo" @emitShowinfoBtn="emitShowinfoBtn"></ShowInfo>

</template>

<script>
//readonly
import { reactive } from 'vue';
import ShowInfo from './ShowInfo.vue'
export  default{
    components:{
        ShowInfo
    },
    setup(){
        //本地定义多个数据，都需要传递给子组件
        // name,age,height
        const myinfo = reactive({
            name:"yjh",
            age:23,
            height:1.88
        })

        const emitShowinfoBtn = (context) => {
            myinfo.name = context
        }

        return{
            myinfo,
            emitShowinfoBtn
        }
    }

}

</script>

<style scoped>


</style>