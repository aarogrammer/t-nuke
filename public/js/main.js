// Vue Essentials
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

// Vue files
import App from './app/App.vue';
import Home from './app/components/Home.vue';
import Profile from './app/components/Profile.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

// Routes
const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/profile', component: Profile }
    ]
});

// Init our Vue app.
const vm = new Vue({
    router,
    render: (h) => h(App)
});
vm.$mount('#app');
