<script>
import HelloWorld from './components/HelloWorld.vue'
import IfDome from './components/ifDome.vue';
import listDemo from './components/listDemo.vue'
import EventDemo from './components/EventDemo.vue'
import EventDemo2 from './components/EventDemo2.vue'
import EventDemo3 from './components/EventDemo3.vue'
import EventDemo4 from './components/EventDemo4.vue'
import EventDemo5 from './components/EventDemo5.vue'
import ArrayList from './components/ArrayList.vue'
import computedDemo from './components/computedDemo.vue';
// import ClassDemo from './components/ClassDemo.vue';
import ModelDemo from './components/ModelDemo.vue';
import refDemo from './components/refDemo.vue';
import parents from './components/parents.vue';
import componeA from './components/componeA.vue';
import soltbase from './components/soltbase.vue';


export default {
  data() {
    return {
      message: "slot"
    }
  },
  components: {
    soltbase
  }
}

</script>

<template>
  <div>

    <!-- <HelloWorld />
    <IfDome />
    <listDemo />
    <EventDemo/>
    <EventDemo2/> 
    <EventDemo3/>
    <EventDemo4/> 
    <EventDemo5/> 
    <ArrayList />
    <computedDemo />
    <ClassDemo />
    <ModelDemo />
    <refDemo/>
    <parents />
    <componeA />-->


    <soltbase>
      <!-- v-slot -->
      <template #header>
        <div>
          <h3>插槽标题</h3>
          <p>插槽内容</p>
        </div>
      </template>

      <template v-slot:main>
        <h3>{{ message }}</h3>
      </template>

    </soltbase>

    <soltbase v-slot="slotProps">
      <h3>{{ message }}-{{ slotProps.msg }}</h3>
    </soltbase>

  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
