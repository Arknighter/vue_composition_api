<template>
    <h2>02 </h2>
    <p>msgtime:{{ msg }}</p>
    <!-- <button @click="msgBtn">修改msg</button> -->

    <hr>
    <h2>name：{{ fullName.name }}</h2>
    <h2>age: {{ fullName.age }}</h2>
    <button @click="fullNameBtn"> 修改fullName</button>

    <br>

    <h2>当前计数：{{ number }}</h2>
    <button @click="AddNumberBtn">+1</button>
</template>

<script>
import { reactive , ref } from 'vue'

// import { ref } from 'vue'

export default {
    setup() {
        let msg = "msg111"
        const number = ref(1)
        //定义响应式数据   用reactive   reactive定义复杂数据
        //简单数据用ref   也可以定义复杂类型数据
        let fullName = reactive({
            name: "yjh",
            age: 18

        })
        // const msgBtn = () => {
        //     msg.value = "newnewnewnewe"
        // }
        const fullNameBtn = () => {
                fullName.name="newyjh",
                fullName.age="188"
        }
        const AddNumberBtn = () => {
            number.value++
        }
        return {
            msg,
            fullName,
            fullNameBtn,
            number,
            AddNumberBtn
            // msgBtn
        }
    }

}
</script>

<style scoped></style>
