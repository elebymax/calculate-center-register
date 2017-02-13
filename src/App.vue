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
  html,body {
    background-image: url(./assets/overlay.png), linear-gradient(60deg, rgba(0, 0, 0, 0.5) 5%, rgba(255, 255, 255, 0.35)), url(./assets/bg.jpg);
    background-repeat: repeat,	no-repeat,	no-repeat;
    background-size: 100px 100px, cover,	cover;
    background-position: top left,	center center,	bottom center;
    background-attachment: fixed,	fixed,	fixed;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
