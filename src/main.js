import Vue from 'vue'
import App from './App.vue'
import fuzzy from './directive/fuzzy'
Vue.config.productionTip = false
Vue.use(fuzzy)
new Vue({
  render: h => h(App),
}).$mount('#app')
