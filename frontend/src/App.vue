<template>
  <div id="app">
    <router-view/>
    <mu-container id="footer-tab" v-if="showBottomBar">
      <mu-bottom-nav :value.sync="value" shift>
        <mu-bottom-nav-item value="Home" title="Home" icon="home" to="/home"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="Class" title="Class" icon="class" to="/class"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="Memoirs" title="Memoirs" icon="color_lens" to="/memoirs"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="My" title="My" icon="perm_identity" to="/my"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  data () {
    return {
      value: 'Home'
    }
  },
  computed: {
    ...mapState([
      'showBottomBar'
    ])
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 60px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#footer-tab {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99;
}
</style>
