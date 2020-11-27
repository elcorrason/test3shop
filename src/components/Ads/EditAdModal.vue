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
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Edit
        </v-card-title>
        <v-card-text>
            <v-text-field
                name="title"
                label="Title"
                type="text"
                v-model="editedTitle"
            />
            <v-text-field
                name="description"
                label="Description"
                type="text"
                multi-line
                v-model="editedDescription"
            />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="onCancel"
          >
            Cancel
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="onSave"
          >
            Save
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
        editedTitle: this.ad.title,
        editedDescription: this.ad.description
      }
    },
    methods: {
        onCancel () {
            this.editedTitle = this.ad.title
            this.editedDescription = this.ad.description
            this.dialog = false
        },
        onSave () {
            if (this.editedTitle !== '' && this.editedTitle !== '') {

                this.$store.dispatch('updateAd', {
                    title: this.editedTitle,
                    description: this.editedTitle,
                    id: this.ad.id
                })

                this.dialog = false
            }
        }
    }
  }
</script>