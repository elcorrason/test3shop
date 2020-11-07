<template>
   <v-container>
       <v-row>
           <v-col>
               <v-card
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
                  <v-btn
                  class="ma-2" 
                  outlined
                  color="indigo"
                  >Edit</v-btn>
                  <v-btn color="success">Buy</v-btn>
              </v-card-action>
               </v-card>
           </v-col>
       </v-row>
    </v-container> 
</template>

<script >

export default {
    props: ['id'],
    computed: {
        ad () {
            const id = this.id
            return this.$store.getters.adById(id)
        }
    }
}

</script>