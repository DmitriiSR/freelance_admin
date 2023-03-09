<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { useRouter } from 'vue-router'

declare global {
  interface Window {
    auth:boolean;
  }
}

export default {
  name: 'App',
  setup() {
    const testF = ():void =>  {
      console.log('my first ts app!')
    }

    return {
      testF
    }
  },
  created() {
    const router = useRouter();

    if (!window.auth) {
      router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
