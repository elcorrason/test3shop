export default {
    state: {
        ads: [
            {
                title: 'Title 1',
                description: 'Deskription for item in array',
                promo: false,
                id: '111',
                src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
              },
              {
                title: 'Title 2',
                description: 'Deskription for item in array',
                promo: true,
                id: '222',
                src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
              },
              {
                title: 'Title 3',
                description: 'Deskription for item in array',
                promo: true,
                id: '333',
                src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
              },
              {
                title: 'Title 4',
                description: 'Deskription for item in array',
                promo: true,
                id: '444',
                src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
              }, 
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => { return ad.promo })
        },
        myAds (state) {
            return state.ads
        }
    }
}