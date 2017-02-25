// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
// import 'muse-ui/dist/theme-bluegray.css';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import $ from 'jquery';
import 'github-markdown-css/github-markdown.css'
import 'assets/style.css'

Vue.use(MuseUI);
Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
