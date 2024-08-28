<script setup>
// defineProps接收器
const props = defineProps({
    message: String,
    count: Number
})
console.log(props);




// defineEmits() -> emit(this.$emit)
const emit = defineEmits(['get-message'])
const sendMsg = () => {
    // 触发自定义事件，传数据给父组件
    emit('get-message', 'this is message')
}

</script>


<template>
    <div>


        <div class="son">
            <h3>子组件son</h3>
            <div>
                父组件传入的数据-{{ message }} - {{ count }}
            </div>
            <button @click="sendMsg">触发自定义事件</button>
        </div>





    </div>
</template>


<style scoped>
.son {
    height: 300px;
    width: 300px;
}
</style>