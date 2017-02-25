<template>
  <mu-appbar title="伺服器申請表單" :class="[ isMenuOpen ? 'menu-show' : 'menu-hide' ]">
    <mu-icon-button icon='menu' slot="left" @click="toggleMenu"/>
    <mu-icon-button icon='expand_more' slot="right"/>
  </mu-appbar>
</template>
<script>
  export default {
    name: 'AppBar',
    props: ['isMenuOpen'],
    data () {
      return {

      }
    },
    methods: {
      toggleMenu: function() {
        this.$emit('toggleMenu');
      }
    }
  }
</script>
<style>

</style>
