<template>
    <h2> wacthEffect</h2>
    <h2> {{ counter }}</h2>
    <button @click="counter++">++</button>
</template>
<script>
import { watchEffect, ref } from 'vue';


export default {
    setup() {
        const counter = ref(0)
        //watcjeffect  传入的函数默认会直接执行
        //且会在执行的过程，会"自动"收集依赖（依赖哪些响应式数据），就是依赖发生变化时，watcheffect传入的函数才会执行
        // watcheffect 有个返回值的  可以利用返回值停止监听
        const stopWatch = watchEffect(() => {
            //出发上面的 @click="counter++"  每一次  都会调用下面的
            console.log("-------------" + counter.value)
             //停止watchEffect监听
            if (counter.value >= 10) {
                stopWatch()
            }
        })
        return {
            counter,
            stopWatch
        }
    }
}
</script>
<style scoped></style>