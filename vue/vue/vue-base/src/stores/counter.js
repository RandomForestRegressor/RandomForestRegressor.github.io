// 导入一个方法defineStore

import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useCountStore = defineStore("counter", () => {
  // 定义数据(state)
  const count = ref(0);

  // 定义修改数据的方法(action 同步+异步)
  const increment = () => {
    count.value++;
  };

  //   getter定义
  const doubleCount = computed(() => count.value * 2);

  //   定义异步action
  const list = ref([]);
  const API_URL = "https://geek.itheima.net/v1_0/channels";
  const getList = async () => {
    const res = await axios.get(API_URL);
    list.value = res.data.data.channels;
  };

  //以对象的方式return供组件使用
  return {
    count,
    increment,
    doubleCount,
    list,
    getList
  };
});
