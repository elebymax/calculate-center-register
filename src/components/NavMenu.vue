<template>
  <mu-drawer width="256" :open="isMenuOpen" :docked="isDocked">
    <mu-paper>
      <mu-menu>
        <mu-menu-item title="帳號註冊" leftIcon="create" href="./#/register"/>
        <mu-menu-item title="查詢帳號" leftIcon="help_outline"/>
        <mu-menu-item title="忘記密碼" leftIcon="help"/>
        <mu-menu-item title="使用說明" leftIcon="description" href="./#/guide"/>
        <mu-divider />
        <mu-menu-item title="聯絡開發者" leftIcon="info"/>
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
