import Vue from 'vue'
import Router from 'vue-router'
import Register from 'components/Register'
import Guide from 'components/Guide'
import FindAccount from 'components/FindAccount'
import ResetPassword from 'components/ResetPassword'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
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
    },
    {
      path: '/resetPassword',
      name: 'ResetPassword',
      component: ResetPassword
    }
  ]
})
