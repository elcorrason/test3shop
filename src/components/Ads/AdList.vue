<template>
<v-card
    max-width="600"
    class="mx-auto"
>
<v-container>
    <v-row v-if="!loading && myAds.length !== 0">
        <v-col
        v-for="(item) in myAds"
        :key="item.id"
        cols="12"
        >
          <v-card>
              <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.description"></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    :to="'/ad/'+ item.id"
                  >
                    Open
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
    </v-row>
    <v-row v-else-if="!loading && myAds.length === 0">
      <v-col>
        <h2>You have no Ads</h2>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <v-progress-circular
          indeterminate
          color="primary"
          :size="70"
          :width="7"
        ></v-progress-circular>
      </v-col>
    </v-row>
</v-container>
</v-card>
</template>



<script >

export default {

    computed: {
      myAds () {
        return this.$store.getters.myAds
      },
      loading () {
        return this.$store.getters.loading
      }
    }
}

</script>
