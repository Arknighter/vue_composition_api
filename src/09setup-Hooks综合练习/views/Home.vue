<template>
    <h2>Home_计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
</template>

<script>
import { onActivated } from 'vue'
import userCounter  from '../hooks/useCounter'
import useTitle from '../hooks/useTitle'
    export default{
        setup(){
            // onActivated:{
            //     useTitle('Home') 
            // }
            useTitle('Home')            
            const { counter,increment,decrement } = userCounter()
            return {
                counter,
                increment,
                decrement
            }

        }
    }
</script>
<style scoped></style>