<template>
  <div>
    <div>
      <router-link to="/">Async loading</router-link>&nbsp;|&nbsp;
      <router-link to="/http">Http component loading</router-link>&nbsp;|&nbsp;
      <router-link to="/repo">Repo loading</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
html,
body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 12px;
  color: #444;
}
a {
  color: #3660d6;
}
</style>
