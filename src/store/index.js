import Vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		ads,
        user
	}
})
