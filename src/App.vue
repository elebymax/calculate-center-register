<template>
  <div id="app">
    <mu-appbar title="伺服器申請表單">
      <mu-icon-button icon='menu' slot="left"/>
      <mu-icon-button icon='expand_more' slot="right"/>
    </mu-appbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  html, body {

  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
