<template>
 
    <v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          class="ma-3" 
        >
          Buy
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Do you want to buy it?
        </v-card-title>
        <v-card-text>
            <v-text-field
                name="name"
                label="Your name"
                type="text"
                v-model="name"
            />
            <v-text-field
                name="phone"
                label="You phone"
                type="text"

                v-model="phone"
            />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="onCancel"
          >
            Close
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="onSave"
          >
            Buy it
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script>
  export default {
    props: ['ad'],
    data () {
      return {
        dialog: false,
        name: '',
        phone: '',
        localLoading: false
      }
    },
    methods: {
        onCancel () {
            this.name = ''
            this.phone = ''
            this.dialog = false
        },
        onSave () {
            if (this.name !== '' && this.phone !== '') {
                this.localLoading = true
                this.$store.dispatch('createOrder', {
                  name: this.name,
                  phone: this.phone,
                  adId: this.ad.id,
                  ownerId: this.ad.ownerId
                }).finally(() => {
                  this.name = ''
                  this.phone = ''
                  this.localLoading = false
                  this.dialog = false
                })

                
            }
        }
    }
  }
</script>