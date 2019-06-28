<template>
  <div>
    <h1>Component 3 with props</h1>
    <pre>
       {{ titleProps }}
    </pre>
  </div>
</template>

<script>
export default {
  props: {
    titleProps: {
      type: String,
      required: false
    }
  }
};
</script>

<style></style>
