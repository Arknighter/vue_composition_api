import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import App from './01Setup体验/App.vue'
// import App from './02Setup定义数据/App.vue'
// import App from './03Setup的其他函数/App.vue'
// import App from './04Setip的toRefs/App.vue'
// import App from './05Setup的computed/App.vue'
// import App from './06Setup中ref引入元素/App.vue'
// import App from './07Setup生命周期函数/App.vue'
import App from './08Setup监听数据的变化/App.vue'

// import App from './02Setup定义数据/AppCat.vue'

// createApp(App).mount('#app')



const app = createApp(App)
app.use(ElementPlus)
app.mount('#app');