<template>
    <div>

        <h3>条件渲染</h3>
        <div v-if="flag">v-if</div>
        <div v-else>v-else</div>
        <div v-if="type === 'A'">A</div>
        <div v-else-if="type === 'B'">B</div>
        <div v-else-if="type === 'C'">C</div>
        <div v-else>NO A/B/C</div>

        <div v-show="flag">v-show</div>


    </div>
</template>




<script>
export default {
    data() {
        return {
            flag: true,
            type: "B"
        }
    }
}
</script>