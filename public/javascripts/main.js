import '../stylesheets/style.scss';
import Vue from 'vue'
import App from './App.vue'

//instancja dla #app
new Vue({
  el: '#app',
  render: h => h(App)
})

