<template>
    <div>
        <h3>数组变化侦听</h3>
        <button @click="addListHand">添加数据</button>
        <ul>
            <li v-for="(item,index) of names" :key="index">{{ item }}</li>
        </ul>
    </div>
</template>



<script>
export default{
    data(){
        return{
            names:["w","z","y"]
        }
    },
    methods:{
        addListHand(){
            // 引起UI自动更新
            this.names.push("sa")
            // 不会引起UI自动更新
            this.names.concat(["sa"])
            // 会更新
            this.names = this.names.concat(["sa"])
            
        }
    }
}
</script>