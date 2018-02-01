import './firebase';

import Vue from 'vue';
import Manager from 'vue-cloudinary-manager';
import VueFire from 'vuefire';
import router from './router'
import App from './App.vue';
import 'vue-cloudinary-manager/styles.css'

Vue.use(Manager);
Vue.use(VueFire);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
