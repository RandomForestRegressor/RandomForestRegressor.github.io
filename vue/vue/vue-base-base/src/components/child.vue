<template>
    <div>
        <h3>child</h3>
        <p>{{ title }}</p>
        <p>{{ age }}</p>

        <button @click="clickEvent">传递数据</button>
    </div>
</template>



<script>
export default {
    data() {
        return {

        }
    },
    props: ["title"],
    props:{
        title:{
            type:[String,Number,Array,Object],
            // 必选项
            required:true
        },
        age:{
            type:Number,
            default:0
        },
        // 数组和对象要使用default
        names:{
            type:Array,
            default(){
                return ["null"]
            }
        }
    },
    methods:{
        clickEvent(){
            // 自定义事件
            this.$emit("someevent","childata")
        }
    }
}
</script>