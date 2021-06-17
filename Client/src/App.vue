<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background-color: #24282e;
  font-family: "Open Sans", sans-serif;
  display: flex;
  justify-content: center;
  padding: 50px 0;
}
#app {
  text-align: center;
}
</style>
