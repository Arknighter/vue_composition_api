<template>
    <h2>APP toRels</h2>
    <p> info : {{ name }} + {{ age }} +{{ height }}</p>
    <button @click="age++"> 修改age</button>
    <button @click="height--"> 修改height</button>
</template>

<script>
import { reactive , toRefs ,toRef} from 'vue';

// ref    reactive  readonly 
//toRefs 解构全部 变成响应式
//toRef  解构一个 变成响应式
export default{
    setup(){
        const info = reactive({
            name : "yjh",
            age : 18,
            height : 1.99
        })
        const {name , age} = toRefs(info)
        const height = toRef(info,"height")
        return {
            info,
            name,
            age,
            height
        }
    }
}

</script>

<style scoped>

</style>