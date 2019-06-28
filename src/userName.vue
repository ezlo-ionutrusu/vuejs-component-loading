<template>
  <div v-if="userName">
    <h1>{{userName}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: [String],
      required: true
    }
  }
};
</script>

<style>
</style>
