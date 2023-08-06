<template>
    <h2>{{ title }}</h2>
    <h3>{{ subtitle }}</h3>
</template>
<script setup>
defineProps({
    title: {
        Type: String,
        default: "默认title"
    },
    subtitle: {
        Type: String,
        default: "默认subtitle"
    }
})
</script>
<style lang="less" scoped>
h2,h3 {
    text-align: center;
    
}
</style>