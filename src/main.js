import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VueMoment from 'vue-moment'

Vue.use(VueResource)
// import moment for dates
Vue.use(VueMoment)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
