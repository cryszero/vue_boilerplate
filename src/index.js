import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
const routes = require('./routes.js');
Vue.use(Vuex);

Vue.use(VueRouter);

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        setCount (state) {
            state.count++;
        }
    },
    getters: {
        getCount: state => {
            return state.count > 1;
        }
    }
});

const router = new VueRouter({
    routes: routes.default
})

new Vue({
  el: '#app',
  router,
  store,
}).$mount('#app')