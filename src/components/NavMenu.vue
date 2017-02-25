<template>
  <mu-drawer class="nav-menu" width="256" :open="isMenuOpen" :docked="isDocked">
    <mu-paper>
      <mu-list>
        <mu-list-item title="淡江大學資訊工程學系"></mu-list-item>
        <mu-list-item title="帳號相關" toggleNested>
          <mu-icon slot="left" value="inbox"/>
          <mu-list-item slot="nested" title="帳號註冊" href="./#/register">
            <mu-icon slot="left" value="create"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="查詢帳號" href="./#/findAccount">
            <mu-icon slot="left" value="help_outline"/>
          </mu-list-item>
          <mu-list-item slot="nested" title="重設密碼" href="./#/resetPassword">
            <mu-icon slot="left" value="help"/>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item title="使用說明" href="./#/guide">
          <mu-icon slot="left" value="description"/>
        </mu-list-item>
        <mu-divider />
        <mu-list-item title="聯絡開發者">
          <mu-icon slot="left" value="info"/>
        </mu-list-item>
      </mu-list>
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
  .nav-menu {
    text-align: left;
  }
</style>
