<template>
  <nav id="nav">
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ path: '/employee' }">Employee</router-link>
  </nav>
  <br />
  <button @click="home">Home</button>
  <button @click="back">Back</button>
  <button @click="next">Next</button>
  <router-view />
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push({ name: "home" });
    },
    back() {
      this.$router.go(-1);
    },
    next() {
      this.$router.go(+1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button {
  background-color: #42b983;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px;
  font-size: 20px;
}
</style>
