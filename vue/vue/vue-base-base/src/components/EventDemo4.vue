<template>
    <div>
        <h3>事件传参</h3>
        <p @click="gethand(item,$event)" v-for="(item,index) in names" :key="index">{{ item }}</p>
    </div>
</template>



<script>
export default {
    data() {
        return {
            names:["img","ims","imo"]
        }
    },
    // 所有的函数放在这里
    methods: {
        gethand(name,e) {
            console.log(name);
            console.log(e);
            
        }
    }
}


</script>