<script setup>
import { provide, ref } from 'vue'

// 顶层组件提供数据
provide('data-key', 'this is provide')

// // 传递响应式数据
// const count = ref(0)
// provide('count-key', count)
// setTimeout(() => {
//     count.value = 100
// }, 3000)

// // 传递方法
// const setCount = () => {
//     count.value++
// }
// provide('setCount-key', setCount)

</script>


<template>
    <div class="page">
        顶层组件
    </div>
</template>


<style scoped>
.page {
    height: 300px;
    width: 300px;
}
</style>