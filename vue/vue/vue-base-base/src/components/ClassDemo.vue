<template>
    <div>
        <p :class="{ 'active': myclass }">Class样式绑定1</p>
        <p :class="classObject">Class样式绑定2</p>
        <p :class="[arrActive, arrHasErrror]">Class样式绑定3</p>
        <p :class="[arrActive ? 'active' : '']">Class样式绑定4</p>
        <p :class="[arrActive ? 'active' : '', { 'text-danger': myclass }]">Class样式绑定5</p>
    </div>
</template>


<script>
export default {
    data() {
        return {
            myclass: true,
            classObject: {
                'active': true,
                'text-danger': true
            },
            arrActive: "active",
            arrHasErrror: "text-danger"
        }
    }
}
</script>


<style>
.active {
    color: red;
    font-size: 30px;
}

.text-danger {
    color: aqua;
    font-size: 10px;
}
</style>