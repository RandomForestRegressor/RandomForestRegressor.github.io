<script setup>

// setup入口
const message = "this is massage"
const logMessage = () => {
  console.log(message);
}




// reactive
import { reactive } from 'vue'
const state = reactive({
  count: 0
})
const setCount = () => {
  state.count++
}




//ref
import { ref } from 'vue'
const count = ref(0)
const setsum = () => {
  count.value++
}




// computed原始响应式数组
import { computed } from 'vue'
const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})
setTimeout(() => {
  list.value.push(9, 10)
}, 3000)




// watch侦听数据变化
import { watch } from 'vue'
const count1 = ref(0)
const changecount = () => {
  count.value++
}
const name = ref('cp')
const changeName = () => {
  name.value = 'pc'
}
// watch侦听多个数据
watch(
  [count1, name],
  (
    [newCount, newName],
    [oldCount, oldName]
  ) => {
    console.log('count或者name变化了', [newCount, newName],
      [oldCount, oldName]
    )
  }
)
// watch立即执行
watch(count, () => {
  console.log('count变化了');
}, {
  immediate: true
})




// watch深度监听
const count2 = ref({ count: 0 })
const changeStateByCount = () => {
  count2.value.count++
}
watch(count2, () => {
  console.log('count2变化了');
}, {
  // deep有性能损耗，尽量不要开启
  deep: true
})




// watch精确监听
const count3 = ref({ count: 0, age: 18 })
const changeStateByage = () => {
  count3.value.age = 'earn'
}
watch(
  () => count3.value.age,
  () => {
    console.log('count3.age变化了');
  })




// 生命周期
import { onMounted } from "vue"
onMounted(() => {
  console.log('组件挂载完毕mounted执行');
})




// 父子通信
import son from './son.vue'
const count4 = ref(100)
setTimeout(() => {
  count4.value = 200
}, 3000)



const getMessage = (msg) => {
  console.log(msg)
}




import TestCom from './test-com.vue'
// 调用ref函数->ref对象
const refh1 = ref(null)
const refcom = ref(null)
// 组件挂载完毕之后才能获取
onMounted(() => {
  console.log(refh1.value);
  console.log(refcom.value);
})




// 跨层传输
import rpro from '/桌面/程序/hcjv/vue/vue/vue-base/src/跨层传输/room-provide.vue'
import rinj from '/桌面/程序/hcjv/vue/vue/vue-base/src/跨层传输/room-inject.vue'




// pinia
// 导入方法
import { useCountStore } from '@/stores/counter'
// 执行方法得到store实例对象
const counterStore = useCountStore()
console.log(counterStore)

// 直接解构赋值(响应式丢失)
// const { count, doubleCount } = counterStore

// 方法包裹(保持响应式更新)
import { storeToRefs } from 'pinia'
const { count5, doubleCount } = storeToRefs(counterStore)

// 方法直接解构赋值
// const { increment } = counterStore

// 触发action
onMounted(() => {
  counterStore.getList()
})




</script>










<template>
  <!-- setup入口 -->
  <div>
    {{ message }}
    <button @click="logMessage">log</button>



    <!-- reactive -->
    <button @click="setCount">{{ state.count }}</button>


    <!-- ref -->
    <div>
      <button @click="setsum">{{ count }}</button>
    </div>


    <!-- computed原始响应式数组 -->
    <div>
      原始响应式数组-{{ list }}
    </div>
    <div>
      原始响应式数组 - {{ computedList }}
    </div>


    <!-- watch侦听多个数据 -->
    <div>
      <button @click="changecount">修改count--{{ count1 }}</button>
      <button @click="changeName">修改name--{{ name }}</button>
      <!-- 立即执行 -->
      <button @click="setCount">{{ count }}</button>
      <!-- watch深度监听 -->
      <button @click="changeStateByCount">watch深度监听({{ count2.count }})</button>
      <!-- watch精确监听 -->
      <button @click="changeStateByage">watch精确监听({{ count3.age }})</button>
    </div>




    <!-- 父子通信 -->
    <div class="father">
      <h2>父组件APP</h2>
      <!-- 绑定属性 -->
      <son count="count4" message="father message" />
      <son @get-message="getMessage" />
    </div>




    <!-- 通过ref标识绑定ref对象(模板调用) -->
    <h1 ref="refh1">我是dom标签h1</h1>
    <TestCom ref="refcom" />



    <!-- 跨层传输 -->
    <rpro />
    <rinj />


    <!-- // pinia -->
    <button @click="counterStore.increment">{{ counterStore.count }}</button>
    {{ counterStore.doubleCount }}


    <ul>
      <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
    </ul>


  </div>
</template>


<style scoped>
.father {
  height: 200px;
  width: 200px;
}
</style>