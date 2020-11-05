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
                <v-img :src="'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'"></v-img>
              </v-avatar>
              <v-card-text>
                  <h2>Lorem</h2>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam quos eligendi architecto inventore dignissimos omnis sapiente esse quam, consequatur vel culpa laboriosam hic. Nobis, omnis laborum aliquid beatae dolores rerum?</p>
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