<template>
    <div class="app">
        <HeaderArea :title="roomScore.title" :subtitle="roomScore.subtitle"/>
    </div>

    <div class="room-list">
        <template v-for="item in roomScore.list" :key="item.id">
            <div class="room-iem">
                {{ item.name }}
            </div>
        </template>
    </div>

</template>
<script setup>
    import HeaderArea from './components/HeaderArea.vue'
    import roomScore from '../data/high_score.json'
    console.log(roomScore)
</script>
<style  lang="less" scoped>

</style>