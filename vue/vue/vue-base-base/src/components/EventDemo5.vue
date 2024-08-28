<template>
    <div>
        <h3>事件修饰符</h3>
        <a @click.prevent="clickprevent" href="http://www.baidu.com">baidu</a>

        
        <div @click="clickDiv">
            <p @click="clickP">测试冒泡</p>
        </div>
    </div>
</template>


<script>
export default{
    data(){
        return{

        }
    },
    methods:{
        clickprevent(e){
            // 阻止默认事件
            // e.preventDefault();
            console.log("111");
        },
        clickDiv(){
            console.log("DIV");
        },
        clickP(e){
            // 阻止事件冒泡
            e.stopPropagation()
            console.log("P");
        }
    }
}
</script>