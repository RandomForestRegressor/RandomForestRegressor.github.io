<template>
    <div>
        <h3>插槽基础</h3>
        <slot name="header">插槽默认值</slot>
        <hr>
        <slot name="main">插槽默认值</slot>


        <slot :msg="kidmessage"></slot>
    </div>
</template>


<script>
export default{
    data(){
        return{
            kidmessage:'插槽自愈'
        }
    }
}
</script>