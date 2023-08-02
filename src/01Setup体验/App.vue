<template>
  <div class="app">
    <h2>CompositionAPI</h2>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
// import { ref } from 'vue'
import userCounter from "./hooks/userCounter";
export default {
  setup() {
    //定义counter  默认定义的数据不是响应式数据
    // let counter = ref(100)
    // const increment = () => {
    //   counter.value++
    // }
    // const decrement = () => {
    //   counter.value--
    // }

    // ---------------------
    // const { counter, increment, decrement } = userCounter()
    // return {
    //   counter,
    //   increment,
    //   decrement
    // }
    //--------------------------------
    //展开运算符  es6 拷贝
    
    return {
      ...userCounter()
    }

  }
}
</script>

<style></style>
