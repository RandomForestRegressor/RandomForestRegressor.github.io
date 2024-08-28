<script>
export default {
  data() {
    return {
      msg: "active",
      dynamicId: "appID",
      isable: false,
      ObjectofAttrs:{
        id: "active",
        class: "appID",
      }
    }
  }
}
</script>

<template>
  <div>
    
  <div v-bind:id="dynamicId" :class="msg">cs</div>
  <button :disabled="isable">Button</button>
  <div v-bind="ObjectofAttrs">cs</div>

  </div>
</template>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
