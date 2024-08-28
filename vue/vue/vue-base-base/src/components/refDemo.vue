<template>
    <div>
        <div ref="container" class="container">{{ content }}</div>
        <input type="text" ref="username">
        <button @click="getElementhandle">获取元素</button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            content:"内容"
        }
    },
    methods:{
        getElementhandle(){
            this.$refs.container.innerHTML='hhh'
            console.log(this.$refs.username);
            
        }
    }
}
</script>