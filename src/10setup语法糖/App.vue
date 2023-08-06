<template>
    <h2>语法糖</h2>
    <h3> {{ name }}</h3>
    <button @click="changeMsg"> test1 </button>
    <showinfo name="yjh" 
              age="18"
              @emitsClickbtn="emitsBTn"
              ref="showinfoRef"/>
    <showinfo/>
</template>
<script setup>
import showinfo from './showInfo'
import { ref ,onMounted } from 'vue'
    const name = ref("helo")
    console.log(name.value)
    const changeMsg = () => {
        name.value = "hello"
        console.log(name.value)
    }
    const emitsBTn = (load) => {
        console.log("1111111111",load);
    }
    //获取主键实例  获取子组件的函数
    // ref="showinfoRef"
    const showinfoRef = ref()
    onMounted(() => {
        showinfoRef.value.foo()
    })
</script>
<style scoped></style>