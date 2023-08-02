<template>
    <div>
      <ul>
        <li v-for="(item, index) in items" :key="index">{{ item }}</li>
      </ul>
      <button @click="addItem">添加項目</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      // 使用 ref 創建一個响应式的数组
      const items = ref(['Apple', 'Banana', 'Orange']);
  
      // 添加項目的方法
      const addItem = () => {
        items.value.push('New Item');
      };
  
      // 返回需要暴露的數據和方法
      return {
        items,
        addItem,
      };
    },
  };
  </script>