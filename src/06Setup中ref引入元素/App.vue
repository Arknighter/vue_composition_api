<template>
    <!-- 获取元素 -->
    <h2 ref="titleRef">setup-ref</h2>
    <button @click="titleBtn">按钮</button>

    <!-- 获取组件实例 -->
    <ShowInfo ref="showinfoRel"/> 
</template>
<script>
import { onMounted } from 'vue'
import { ref } from 'vue'
import ShowInfo from './show-info.vue'
export default{ 
    //optionsAPI
    // mounted(){
    //     console.log(this.$refs.title)
    //     console.log(this.$refs.btn)
    // }
    components:{
        ShowInfo
    },
    setup(){
        const titleRef = ref()
        const showinfoRel = ref()

        onMounted(()=>{
            console.log(titleRef.value)
            console.log(showinfoRel.value)
            showinfoRel.value.showinfo()
        })

        let titleBtn = () => {
            console.log(titleRef.value)
        }
        // function titleBtn() {
        //     console.log(titleRef.value)
        // }
        return{
            titleRef,
            titleBtn,
            showinfoRel
        }
    }

}
</script>
<style scoped>

</style>