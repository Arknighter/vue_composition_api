<template>
    <h2>App 监听</h2>
    <button @click="msgBtn"> 修改数据</button>
</template>
<script>
import { ref, watch } from 'vue'

export default {
    setup() {
        const msg = ref("hello")

        const msgBtn = () => {
            msg.value="new hello"
        }

        watch(msg,(newValue,oldeValue) => {
            console.log("newmsg="+newValue,"old="+oldeValue);
        })


        return {
            msg,
            msgBtn
        }
    }

}


</script>
<style scoped></style>