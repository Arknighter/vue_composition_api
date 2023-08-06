<template>
    <h2>APP</h2>
    <button @click="changeTitle">修改title</button>
    <!-- <Home/>
    <About/> -->
    
    <!-- //home 和 about 组件的切换 -->
    <button @click="currentPage = 'home'">home</button>
    <button @click="currentPage = 'about'">about</button>
    <!-- <keep-alive> -->
        <component :is="currentPage"></component>
    <!-- </keep-alive> -->
    


</template>
<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import useTitle from './hooks/useTitle'
import { ref } from 'vue'

    export default{
        components:{
            Home,
            About
        },
        setup(){
            const currentPage = ref("home")
                //修改title
            document.title="Hooks"
            const changeTitle = () => {
                useTitle("new_Title")
            }
            return{
                changeTitle,
                currentPage
            }
        }
    }
</script>
<style scoped></style>