import fb from 'firebase'

class User {
    constructor(id) {
        this.id = id
    }
}


export default {
    state: {
        user: null
    },
	mutations: {
        setUser(state,payload) {
            state.user = payload
        }    
    },
	actions: {
        registerUser({commit},{email, password}){
            commit('clearError')
            commit('setLoading', true)
            fb.auth().createUserWithEmailAndPassword(email,password).then(response => {
                commit('setUser', new User(response.user.uid))
                commit('setLoading', false)
            }).catch( error => {
                commit('setLoading', false)
                commit('setError', error.message)
        throw error
            })
        }
        
    },
	getters: {
        user(state) {
            return state.user
        }
    }
}
