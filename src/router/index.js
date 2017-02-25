import Vue from 'vue'
import Router from 'vue-router'
import Register from 'components/Register'
import Guide from 'components/Guide'
import FindAccount from 'components/FindAccount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/findAccount',
      name: 'FindAccount',
      component: FindAccount
    }
  ]
})
