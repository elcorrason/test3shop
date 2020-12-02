<template>
   <v-container>
       <v-row>
           <v-col>
               <v-card
               v-if="!loading"
                max-width="600"
                class="mx-auto"
               >
                <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="ad.src"></v-img>
              </v-avatar>
              <v-card-text>
                  <h2>{{ ad.title }}</h2>
                  <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-action>
                  
                  <addEditAdModal :ad="ad" v-if="isOwner"></addEditAdModal>
                  <app-buy-modal :ad="ad"></app-buy-modal>
              </v-card-action>
               </v-card>
               <div v-else class="text-center">
                <v-progress-circular
                    indeterminate
                    color="primary"
                    :size="70"
                    :width="7"
                ></v-progress-circular>
               </div>
           </v-col>
       </v-row>
    </v-container> 
</template>

<script >
import EditAdModal from './EditAdModal'

export default {
    props: ['id'],
    computed: {
        ad () {
            const id = this.id
            return this.$store.getters.adById(id)
        },
        loading () {
            return this.$store.getters.loading
        },
        isOwner () {
            return this.ad.ownerId === this.$store.getters.user.id
        }
    },
    components: {
        addEditAdModal: EditAdModal
    }
}

</script>