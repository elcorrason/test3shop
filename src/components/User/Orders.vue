<template>
   <v-container>
       <v-row>
           <v-col>
               <v-card
               class="mx-auto"
               max-width="500"
               >
                   <v-list>
                    <v-list-item
                    v-for="order in orders"
                    :key="order.id"
                    >
                    
                        <v-list-item-action>
                        <v-checkbox 
                        color="success"
                        @change="markDone(order)"
                        :input-value="order.done"></v-checkbox>
                        </v-list-item-action>

                        <v-list-item-content>
                        <v-list-item-title>{{ order.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn
                            :to="'/ad/' + order.adId"
                            class="primary"
                            >Open</v-btn>
                        </v-list-item-action>
                    </v-list-item>
                   </v-list>
               </v-card>
           </v-col>
       </v-row>
    </v-container> 
</template>

<script>
export default {
    data () {
        return {
            orders: [
                {
                    id: 'id1',
                    name: 'Vladilen',
                    phone: '380-96-9630001',
                    adId: '111',
                    done: false
                }
                ]
        }
    },
    methods: {
        markDone(order) {
            order.done = true
        }
    }
}
</script>>