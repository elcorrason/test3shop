import fb from 'firebase/app'
import 'firebase/database';

class Ad {
  constructor (title, description, ownerId, src = '', promo = false, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.src = src
    this.promo = promo
    this.id = id
  }
}

export default {
    state: {
        ads: [
            {
                title: 'Title 1',
                description: 'Deskription 1 for item in array',
                promo: false,
                id: '111',
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
              },
              {
                title: 'Title 2',
                description: 'Deskription 2 for item in array',
                promo: true,
                id: '222',
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
              },
              {
                title: 'Title 3',
                description: 'Deskription 3 for item in array',
                promo: true,
                id: '333',
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
              },
              {
                title: 'Title 4',
                description: 'Deskription 4 for item in array',
                promo: true,
                id: '444',
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
              }, 
        ]
    },
    mutations: {
      createAd (state, payload) {
        state.ads.push(payload)
      }
    },
    actions: {
      async createAd ({commit, getters}, payload) {

        commit('clearError')
        commit('setLoading', true)

        try {
          const newAd = new Ad (
            payload.title,
            payload.description,
            getters.user.id,
            payload.src,
            payload.promo
          )
          const ad = await fb.database().ref('ads').push(newAd)

          commit('setLoading', false)

          commit('createAd', {
            ...newAd,
            id: ad.key
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
        ads (state) {
            return state.ads 
        },
        promoAds (state) {
            return state.ads.filter(ad => { return ad.promo })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
              return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}