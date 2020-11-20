import fb from 'firebase/app'
import 'firebase/database'
import 'firebase/firebase-storage'

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

        ]
    },
    mutations: {
      createAd (state, payload) {
        state.ads.push(payload)
      },
      loadAds (state, payload) {
        state.ads = payload
      }

    },
    actions: {
      async createAd ({commit, getters}, payload) {

        commit('clearError')
        commit('setLoading', true)

        const image = payload.image

        try {
          const newAd = new Ad (
            payload.title,
            payload.description,
            getters.user.id,
            '',
            payload.promo
          )
          const ad = await fb.database().ref('ads').push(newAd)
          const imageExt = image.name.slice(image.name.lastIndexOf('.'))
          const fileData = await fb.storage().ref(`ads/${ad.key}.${imageExt}`).put(image)
          const src = await fileData.metadata.getDownloadURL()

          await fb.database().ref('ads').child(ad.key).update({ src: src })

          commit('setLoading', false)

          commit('createAd', {
            ...newAd,
            id: ad.key,
            src
          })
        } 
        catch (error) {
          commit('setError', error.message)
          commit('setLoading', false)
          throw error
        }


      },
      async fetchAds ({commit}) {
        commit('clearError')
        commit('setLoading', true)

        const resultAds = []

        try {
          const fbVal = await fb.database().ref('ads').once('value')
          const ads = fbVal.val()
          Object.keys(ads).forEach(key => {
            const ad = ads[key]
            resultAds.push(
              new Ad(ad.title, ad.description, ad.ownerId, ad.src, ad.promo, key)
            )
          })
          commit('loadAds', resultAds)

          commit('setLoading', false)
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