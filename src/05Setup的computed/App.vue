<template>
    <h2>  setup=computed</h2>
    <h2>  MYNAME:{{ fullname }} </h2>
    <h2> 成绩: {{ scoreLevel }}</h2>
    <button @click="setFullName">修改name</button>
</template>


<script>
import { computed, reactive, ref } from 'vue';

export default{
    setup(){
        const name = reactive({
            firstName:"Y",
            lastName:".JH"
        })
        // const fullname = computed(()=>{
        //     return name.firstName + " " + name.lastName
        // })
        //computed 返回的是ref  .value调用
        const fullname = computed({
            set:function(newValue){
                const tempNames = newValue.split(" ")
                name.firstName = tempNames[0]
                name.lastName = tempNames[1]
            },
            get:function(){
                return name.firstName + " " + name.lastName
            }
        })
        const setFullName = () => {
            fullname.value="yjh newname"
        }
        const score = ref(69)
        const scoreLevel = computed(()=>{
            return score.value >= 60 ? "及格" : "不及格"
        })

        return{
            name,
            fullname,
            scoreLevel,
            setFullName
        }

    }



}


</script>

<style scoped>


</style>