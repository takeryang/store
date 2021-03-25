import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '../node_modules/axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap';

Vue.config.productionTip = false
Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);

axios.defaults.withCredentials = true;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

//檢查用戶是否仍持續登入
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.VUE_APP_APIPATH}api/user/check`;
    axios.post(api).then((response) => {
      // console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({
          path:'/login'
        })
      }
    });
  } else {
    next();
  }
})
//檢查用戶是否仍持續登入
