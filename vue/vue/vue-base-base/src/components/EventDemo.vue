<template>
    <div>
        <h3>内联事件处理器</h3>
        <button @click="count++">add</button>
        <p>{{ count }}</p>
    </div>
</template>



<script>
export default{
    data(){
        return{
            count:0
        }
    }
}
</script>