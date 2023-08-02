<template>
    <h2>ShowInfo: {{ info }}</h2>
    <!-- 不推荐子组件内改父组件的内容，只能用不能改 -->
    <!-- 如果确实要改  要把这个事件传出去，由父组件改数据   vue是单向数据流 -->
    <button @click="ShowInfoBtn"> 更改 ShowInfo 信息</button>
</template>

<script>
export default {
    props: {
        info: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['emitShowinfoBtn'],
    setup(props, context) {
        const ShowInfoBtn = () => {
            context.emit("emitShowinfoBtn", "New-Name")
        }
        return {
            ShowInfoBtn
        }
    }

}

</script>

<style scoped></style>