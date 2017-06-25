// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
var _ = require('lodash')
import store from './store/store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.filter('currency', function (value) {
  return  value.toLocaleString() + ' Baht';
})

Vue.http.options.root = 'https://hakathon2017.firebaseio.com/'
Vue.http.interceptors.push(function(request, next) {
  console.log(request)
  // request.headers.set('Access-Control-Allow-Origin', 'http://45bc919b.ngrok.io')
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
