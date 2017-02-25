<template>
  <div id="app">
    <AppBar :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu"></AppBar>
    <NavMenu :isMenuOpen="isMenuOpen"></NavMenu>
    <div class="main-content" :class="[ isMenuOpen ? 'menu-show' : 'menu-hide' ]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import AppBar from 'components/AppBar';
  import NavMenu from 'components/NavMenu';

  export default {
    name: 'app',
    data () {
      return {
        isMenuOpen: false
      }
    },
    components: {
      AppBar,
      NavMenu
    },
    methods: {
      toggleMenu: function() {
        this.isMenuOpen = !this.isMenuOpen;
      }
    }
  }
</script>

<style>
  html, body {
    background-color: #eee;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .main-content {
    padding-top: 66px;
  }
</style>
