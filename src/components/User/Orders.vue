<template>
   <v-container>
       <v-row>
           <!-- <v-col class="text-center pt-5" v-if="loading"> -->
           <v-col class="text-center pt-5" >
                <v-progress-circular
                    indeterminate
                    color="primary"
                    :size="70"
                    :width="7"
                ></v-progress-circular>
           </v-col>
           <!-- <v-col v-else-if="!loading && orders.length !== 0"> -->
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
           <v-col class="text-center pt-5" >
               <h2>You have no orders</h2>
           </v-col>
       </v-row>
    </v-container> 
</template>

<script>
export default {

    computed: {
        loading () {
           return this.$store.getters.loading 
        },
        orders () {
            return this.$store.getters.orders
        }
    },
    methods: {
        markDone(order) {
            this.$store.dispatch('markOrderDone', order.id).then(() => {order.done = true}).catch(() => {})

            order.done = true
        },
        created () {
            this.$store.dispatch('fetchOrders')
        }
    }
}
</script>