<template>
  <mu-drawer width="256" :open="isMenuOpen" :docked="isDocked">
    <mu-paper>
      <mu-menu>
        <mu-menu-item title="Preview" leftIcon="remove_red_eye"/>
        <mu-menu-item title="Share" leftIcon="person_add"/>
        <mu-menu-item title="Get Links" leftIcon="link"/>
        <mu-divider />
        <mu-menu-item title="Make a copy" leftIcon="content_copy"/>
        <mu-menu-item title="Download" leftIcon="file_download"/>
        <mu-menu-item title="Remove" leftIcon="delete"/>
      </mu-menu>
    </mu-paper>
  </mu-drawer>
</template>
<script>
  export default {
    name: 'NavMenu',
    props: ['isMenuOpen'],
    data () {
      return {
        isDocked: true
      }
    },
    methods: {

    }
  }
</script>
<style>

</style>
