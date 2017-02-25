<template>
  <div id="app">
    <AppBar :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu"></AppBar>
    <NavMenu :isMenuOpen="isMenuOpen"></NavMenu>
    <div class="main-content" :class="[ isMenuOpen ? 'menu-show' : 'menu-hide' ]">
      <router-view></router-view>
    </div>
    <mu-dialog :open="isProgressDialogShow" title="處理中" :dialogClass="[dialogClass]">
      <mu-circular-progress :size="80"/>
    </mu-dialog>
    <mu-dialog title="訊息" :open="isResultDialogShow" :dialogClass="[dialogClass]">
      <p>{{ getResultDialogContent }}</p>
      <mu-flat-button label="確定" slot="actions" primary @click="resultDialogClose"/>
    </mu-dialog>
  </div>
</template>

<script>
  import AppBar from 'components/AppBar';
  import NavMenu from 'components/NavMenu';

  export default {
    name: 'app',
    computed: {
      isProgressDialogShow () {
        return this.$store.getters.progressDialog;
      },
      isResultDialogShow () {
        return this.$store.getters.resultDialog;
      },
      getResultDialogContent () {
        return this.$store.getters.resultDialogContent;
      }
    },
    data () {
      return {
        isMenuOpen: false,
        dialogClass: 'dialog',
      }
    },
    components: {
      AppBar,
      NavMenu
    },
    methods: {
      toggleMenu () {
        this.isMenuOpen = !this.isMenuOpen;
      },
      resultDialogClose () {
        this.$store.commit('resultDialogClose');
      }
    }
  }
</script>

<style>

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
