<script setup>
import {ref} from 'vue'

const name =ref('test name')
const setName = ()=>{
    name.value = 'test new name'
}

defineExpose({
    name,
    setName
})

</script>


<template>
    <div>
        我是test组件
    </div>
</template>