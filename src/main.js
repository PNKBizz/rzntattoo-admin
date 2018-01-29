import Vue from 'vue'
import App from './App.vue'
import Manager from './vue-cloudinary-management'

Vue.use(Manager)

new Vue({
  el: '#app',
  render: h => h(App)
})
