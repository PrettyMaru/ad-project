import fb from 'firebase'

class Ad {
	constructor (title, desc, ownerId, src = '', promo = false, id = null) {
		this.title = title
		this.desc = desc
		this.ownerId = ownerId
		this.src = src
		this.promo = promo
		this.id = id
	}
  }

export default {
	state: {
		ads:[
			{
				title:"First",
				desc:"First Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
				id:"1"
			},
			{
				title:"Second",
				desc:"Second Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
				id:"2"
			},
			{
				title:"Third",
				desc:"Third Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
				id:"3"
			},
			{
				title:"Fouth",
				desc:"Fouth Desc",
				promo: true,
				src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
				id:"4"
			}

			]
	},
	mutations: {
		createAd(state, payload){
			state.ads.push(payload)
		}
	},
	actions: {
		createAd({commit},payload){
			payload.id = Math.random()
			commit('createAd', payload)
		},
		async createAds ({commit, getters}, payload) {
			commit('clearError')
			commit('setLoading', true)

			try {
				const newAd = new Ad(
					payload.title,
					payload.desc,
					getters.user.id,
					payload.src,
					payload.promo,
					payload.id
				)
				const fbValue = await fb.database().ref('ads').push(newAd)
				commit('setLoading', false)
				commit('createAd', {
					...newAd,
					id: fbValue.key
				})		  
				}				  
			catch (error) {
			commit('setError', error.message)
			commit('setLoading', false)
			throw error
			}
		}
	},
	getters: {
		ads(state) {
			return state.ads
		},
		promoAds(state) {
			return state.ads.filter(ad => {
				return ad.promo
			})
		},
		myAds(state) {
			return state.ads
		},
		adById(state) {
			return id => {
				return state.ads.find(ad => ad.id == id)
			}
		}

	}
}
