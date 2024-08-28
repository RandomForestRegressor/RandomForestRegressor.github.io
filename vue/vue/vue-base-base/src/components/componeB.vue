<template>
    <div>
        <h3>componeB</h3>
        <p>{{ title }}</p>
        <p>{{ onEvent('传递数据') }}</p>
    </div>
</template>



<script>
export default{
    data(){
        return{
            
        }
    },
    props:{
        title:String,
        onEvent:Function
    }
}
</script>