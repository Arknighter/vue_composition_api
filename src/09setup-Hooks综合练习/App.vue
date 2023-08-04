<template>
    <h2>APP</h2>
    <Home/>
    <About/>
</template>
<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
    export default{
        components:{
            Home,
            About
        },
        setup(){

        }
    }
</script>
<style scoped></style>