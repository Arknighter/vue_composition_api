<template>
    <h2>App 监听</h2>
    <button @click="msgBtn"> 修改数据</button>

    <el-button>我是 ElButton</el-button>

    <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </el-carousel-item>
    </el-carousel>

    <div class="flex flex-wrap items-center">
    <el-dropdown>
      <el-button type="primary">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    </div>
</template>

<script>
import { ref, watch } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

export default {
    components:{
        ArrowDown
    },
    setup() {

        const msg = ref("hello")

        const msgBtn = () => {
            msg.value = "new hello"
        }

        watch(msg, (newValue, oldeValue) => {
            console.log("newmsg=" + newValue, "old=" + oldeValue);
        })

        const handleClick = () => {
            // eslint-disable-next-line no-alert
            alert('button click')
        }
        return {
            msg,
            msgBtn,
            handleClick
        }
    }

}


</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.example-showcase .el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
  }
</style>