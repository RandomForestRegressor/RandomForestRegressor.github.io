<template>
    <div>
        <h3>componeA</h3>
        <componeB title="标题" :onEvent="dataFn" />
    </div>
</template>



<script>
import componeB from './componeB.vue';
export default{
    data(){
        return{

        }
    },
    components:{
        componeB
    },
    methods:{
        dataFn(data){
            console.log(data);
            
        }
    }
}
</script>