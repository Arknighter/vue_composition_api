<template>
    <h2>Home_计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
</template>

<script>
import userCounter  from '../hooks/useCounter'
    export default{
        setup(){            
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