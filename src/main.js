import Vue from 'vue'
import App from './App.vue'
import { uuid } from "vue-uuid"

Vue.use(uuid)

new Vue({
  el: '#app',
  render: h => h(App)
})
