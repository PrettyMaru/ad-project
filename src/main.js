import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
    vuetify,
    render:h=>h(App),
    router:router,
    store,
    created(){
        const firebaseConfig = {
            apiKey: "AIzaSyCnoRGhc0NM0UfzxVifI1-scpwXx7lP6uY",
            authDomain: "maru-ad-pro.firebaseapp.com",
            databaseURL: "https://maru-ad-pro-default-rtdb.firebaseio.com",
            projectId: "maru-ad-pro",
            storageBucket: "maru-ad-pro.appspot.com",
            messagingSenderId: "499308363718",
            appId: "1:499308363718:web:9ea5fb1d76539f6d487cc7",
            measurementId: "G-KGDY2BQXHT"
    };
    // Initialize Firebase
        fb.initializeApp(firebaseConfig);
        fb.analytics();
        fb.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('autoLoginUser', user)
            }      
        })  
    }  
}).$mount('#app')