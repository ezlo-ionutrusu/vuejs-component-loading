<template>
  <h2>Hello from the Distribution Server! {{ title }}</h2>
</template>
<script>
export default {
  props: {
    title: {
      required: false,
      type: String
    }
  }
};
</script>
