<template>
  <section>
    <h1>Http external component loading</h1>
    <br />
    <br />
    <input type="text" v-model="title" />
    <http-component :title="title" />
  </section>
</template>

<script>
import externalComponent from "@/utils/external-component";
const HttpComponent = () =>
  externalComponent(
    `http://localhost:8200/MyComponent/MyComponent.f6a3c6ae138d472d1dd5.umd.min.js`
  );
export default {
  data() {
    return {
      title: null
    };
  },
  components: {
    "http-component": HttpComponent
  }
};
</script>

<style></style>
