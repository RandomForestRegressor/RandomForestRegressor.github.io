<template>
    <div>
        <h3>内联事件处理器</h3>
        <button @click="addcount">add2</button>
        <p>{{ count }}</p>
    </div>
</template>



<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    // 所有的函数放在这里
    methods: {
        addcount(e) {
            e.target.innerHTML = "Add" + this.count
            this.count++
        }
    }
}


</script>