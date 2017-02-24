import Vue from 'vue'
import Router from 'vue-router'
import Register from 'components/Register'
import Guide from 'components/Guide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Register',
      component: Register
    },
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    }
  ]
})
