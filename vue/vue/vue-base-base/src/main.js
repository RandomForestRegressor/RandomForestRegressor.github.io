
import { createApp } from 'vue'
import App from './App.vue'
import ClassDemo from './components/ClassDemo.vue'

// createApp(App).mount('#app')

const app = createApp(App)

// 这里写组件的注册(全局注册)
app.component("ClassDemo",ClassDemo)

app.mount('#app')