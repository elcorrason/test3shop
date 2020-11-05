<template>
<v-card
    max-width="600"
    class="mx-auto"
>
<v-container>
    <v-row>
        <v-col
        v-for="(item) in items"
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
</v-container>
</v-card>
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
