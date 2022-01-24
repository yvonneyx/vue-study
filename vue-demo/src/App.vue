<template>
  <div>
    <div id="app">{{count}}</div>
    <button @click="$store.commit('increment')">count++</button>
  </div>
</template>


<script>
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
/* $vue-blue: #32485F; */
/* $vue-green: #00C185; */

*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #32485f;
}

h1 {
  text-align: center;
}
</style>
