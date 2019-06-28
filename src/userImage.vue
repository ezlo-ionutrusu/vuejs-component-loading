<template>
  <div v-if="userImage">
    <img :src="loadUserImage" v-if="loadUserImage!==null">
    <h2 v-else>Bad img src!</h2>
  </div>
</template>

<script>
export default {
  props: {
    userImage: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    loadUserImage() {
      return this.userImage !== null ? this.userImage : null;
    }
  }
};
</script>

<style>
</style>