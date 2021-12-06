import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
    vuetify,
    render:h=>h(App),
    router:router,
    store
}).$mount('#app')