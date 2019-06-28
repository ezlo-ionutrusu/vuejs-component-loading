<template>
  <section>
    <h1>Async component loading</h1>
    <div>
      <button @click="loadComponent('Component_1')">Load component #1</button>
      <button @click="loadComponent('Component_2')">Load component #2</button>
      <button @click="loadComponent('Component_3')">Load component #3</button>
    </div>
    <p>
      <component
        v-if="componentName !== null"
        :is="registerComponent"
        :titleProps="'With Proprities'"
      />
    </p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      componentName: null
    };
  },
  methods: {
    loadComponent(cmpName) {
      this.componentName = cmpName;
    }
  },
  computed: {
    registerComponent() {
      const { componentName } = this;
      return () => import(`@/components/${componentName}`);
    }
  }
};
</script>

<style></style>
