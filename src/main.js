// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './scss/base.scss'
import './icon/iconfont.css'

Vue.use(MintUI)

Vue.config.productionTip = false

window.http='http://10.1.1.208:8080'
window.key = 'e4e80d2aa0d24783d16e916c8d5058d1'
window.gaodepw = 'https://webapi.amap.com/maps?v=1.4.10&key='+window.key
window.gaodeui = 'https://webapi.amap.com/ui/1.0/main.js?v=1.0.11'

 var sion = '1.0'
if(sion=='1.0'){
  window.version = sion.replace(/\./g,'_');
}
/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
