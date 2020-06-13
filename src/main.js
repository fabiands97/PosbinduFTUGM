import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
//require('bootstrap-loader');
//require('admin-lte');
//require("!style!css!admin-lte/dist/css/skins/_all-skins.css");
//require("!style!css!admin-lte/dist/css/AdminLTE.css");

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

// app.js
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Routes from './routes'
import Vuex from 'vuex';
import StoreData from './store';
import {initialize} from './helper/general';


// import Daftar from '@/components/DaftarUser.vue';
// import Input1 from '@/components/meja1/input1.vue';
// import Input2 from '@/components/meja2/input2.vue';
// import Input3 from '@/components/meja3/input3.vue';
// import Input4 from '@/components/meja4/input4.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store(StoreData);

const router = new VueRouter({
    routes: Routes,
    mode: 'history',
    linkActiveClass: 'active'
});

//Vue.config.productionTip = false

initialize(store, router);

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)

})
