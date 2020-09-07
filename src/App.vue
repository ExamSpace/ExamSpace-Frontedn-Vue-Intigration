<template>
  <div id="app">
    <NavBar v-if="showNav"></NavBar>
    <router-view />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  computed: {
    showNav() {
      if (this.$route.path == '/login' || this.$route.path == '/register') {
        return false
      }
      return true
    },
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  },
  mounted() {
    //this.$store.dispatch('load')
  }
}
</script>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: white;
}

#nav {
  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
