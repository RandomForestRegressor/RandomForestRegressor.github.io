<template>
    <div>
        <h3>{{ itbaizhan.name }}</h3>
        <p>{{ itbaizhanContent }}</p>
        <p>{{ itbaizhanmethod() }}</p>
    </div>
</template>


<script>
export default {
    data() {
        return {
            itbaizhan: {
                name: "cxy",
                content: ["java", "python", "PHP"]
            }
        }
    },
    // 计算属性
    computed:{
        itbaizhanContent(){
            return this.itbaizhan.content.length > 0 ? 'Yes' : 'No'
        }
    },
    methods:{
        itbaizhanmethod(){
            return this.itbaizhan.content.length > 0 ? 'Yes' : 'No'
        }
    }
}
</script>