import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

// pinia
// import { createApp } from 'vue'
// import { createPinia } from 'pinia'
// import App from './App.vue'

// const pinia = createPinia()
// const app = createApp(App)

// app.use(pinia)
// app.mount('#app')

// 1.导入createPinia
import { createPinia } from "pinia";

// 2.执行方法得到实例
const pinia = createPinia();

// 3.把pinia实例加入到app应用中

createApp(App).use(pinia).mount("#app");
