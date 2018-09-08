// Vue Essentials
import Vue from 'vue';
import Vuex from 'vuex'
import VueRouter from 'vue-router';

Vue.use(VueRouter);
Vue.use(Vuex);

// Vue files
import App from './app/App.vue';
import Home from './app/components/Home.vue';
import Profile from './app/components/profile.vue';

// Routes
const router = new VueRouter({
    routes: [
        { path: '/', component: Home},
        { path: '/profile', component: Profile}
    ]
});

// Init our Vue app.
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});