<template>
   <v-container fluid>
       <v-row>
           <v-col>
                <v-carousel>
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
           </v-col>
       </v-row>
       <v-row >
          
           <v-col 
            v-for="(item, i) in items"
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
                <v-btn
                    color="primary"
                    
                >
                    Buy
                </v-btn>
             
                </v-card-actions>
            </v-card>
           </v-col>
       </v-row>

    </v-container> 
</template>

<script >

export default {
    data: () => ({
        items: [
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
        ],
    })
}
</script>>
