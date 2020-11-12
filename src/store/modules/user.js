
import fb from 'firebase/app';
import 'firebase/auth';

class User {
    constructor (id) {
        this.id = id
    }
}

export default {
    state: {
        user: null
    },
    mutations: {
        setUser (state, payload) {
            state.user = payload
        }
    },
    actions: {
        async registerUser ({commit}, {email, password}) {
            const user = await fb.auth().createUserWithEmailAndPassword(email, password)
            console.log(user)
            commit('setUser', new User(user.user.uid))
            // fb.auth().createUserWhithEmailAndPassword(email, password)
            // .then(user => {
            //     commit('setUser', new User(user.uid))
            // })
            
        }
    },
    getters: {
        user (state) {
            return state.user
        }
    }
}