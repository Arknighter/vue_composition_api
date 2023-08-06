<template>
    <h2>showinfo ： {{ name }} + {{ age }}</h2>
    <button @click="clickbtn"> emitBTN</button>
</template>
<script setup>
//定义props
const props = defineProps({
    name:{
        Type:String,
        default: "默认值"
    },
    age:{
        Type:Number,
        default:0
    }  
})

  //绑定函数
  const emits = defineEmits(["emitsClickbtn"])
  const clickbtn = () => {
    emits("emitsClickbtn","发生了点击")
  }

  const foo = () => {
    console.log("foo（） 被调用")
  }
  defineExpose({
    foo
  })
</script>
<style scoped></style>