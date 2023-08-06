<template>
    <hr>
    <h2>About</h2>
    <h2>Home_计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="popularClick">首页流行</button>
    <button @click="hotClick">首页热门</button>
</template>
<script>
import useCounter from '../hooks/useCounter';
import useTitle from '../hooks/useTitle';
    export default{
        setup(){
            const title = useTitle('about') 

            const popularClick = () => {
                title.value = "首页-流行"
            }

            const hotClick = () => {
                title.value = "首页-热门"
            }

            return {
                ...useCounter(),
                title,
                hotClick,
                popularClick
               
            }
        }
    }
</script>
<style scoped></style>