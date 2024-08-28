<template>
    <div>
        <h3>parents</h3>
        <child title="bigdata" />
        <child :title="message" />
        <child :title="title" :age="age" :name="message" />


        <h3>组件事件</h3>
        <child @someevent="getHandle" />
        <p>父元素:{{ message }}</p>
    </div>
</template>



<script>
import child from './child.vue';
export default {
    data() {
        return {
            message: 'shuju',
            title: ['sdf', '324rr'],
            age: 20
        }
    },
    // 注入组件
    components: {
        child
    },
    methods: {
        getHandle(data) {
            console.log('111111', data);
            this.message = data
        }
    }
}
</script>