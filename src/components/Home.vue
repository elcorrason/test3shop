<template>
<div v-if="!loading">
   <v-container fluid >
       <v-row>
           <v-col>
                <v-carousel>
                    <v-carousel-item
                    v-for="(item, i) in promoAds"
                    :key="i"
                    :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
           </v-col>
       </v-row>
       <v-row >
          
           <v-col 
            v-for="(item, i) in ads"
            :key="i"
            sm="6"
            md="4"
            lg="3"
           >
             <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src="item.src"                >
                <v-card-title>{{ item.title }}</v-card-title>
                </v-img>

                <v-card-text class="text--primary">
                <div>{{ item.description }}</div>
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text :to="'/ad/'+ item.id">Open</v-btn>
                <app-buy-modal :ad="ad"></app-buy-modal>
             
                </v-card-actions>
            </v-card>
           </v-col>
       </v-row>

    </v-container>
    </div>
    <div v-else>
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :size="70"
            :width="7"
          ></v-progress-circular>
        </div>
    </div> 
</template>

<script >

export default {
    data: () => ({ }),
    computed: {
      promoAds () {
        return this.$store.getters.promoAds
      },
      ads () {
        return this.$store.getters.ads
      },
      loading () {
          return this.$store.getters.loading
      }
    }
}
</script>>
