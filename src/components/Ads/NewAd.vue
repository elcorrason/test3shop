<template>
   <v-container>
       <v-row>
           <v-col>
               <v-card width=500 class="mx-auto mt-5">
                <v-card-title>
                <h1 class="display-1">New Ad</h1>
                </v-card-title>
                    <v-card-text>
                      <v-form v-model="valid">
                          <div>
                                <v-text-field
                                v-model="title"
                                class="mb-6"
                                label="Ad title"
                                :rules="rules"
                                hide-details="auto"
                                ></v-text-field>
                                
                                <v-textarea
                                v-model="description"
                                solo
                                :rules="[v => !!v || 'Description required']"
                                name="input-7-4"
                                label="Ad description"
                                ></v-textarea>
                            </div>

                                <v-switch
                                    v-model="promo"
                                    label="Add to promo"
                                    ></v-switch>
                        </v-form>
                    </v-card-text> 

        <v-divider></v-divider>
        <v-row>
            <v-col >
                <v-img
                v-if="src"
                :src="src"
                max-height="150"
                max-width="250"
                
            ></v-img>
            </v-col>
        </v-row>
        <v-card-actions>


        <v-row>
            <v-col >
            <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                @click="triggerUpload"
                >
                Upload
                    <v-icon
                        right
                        dark
                    >
                        mdi-cloud-upload
                    </v-icon>
                </v-btn>

                <input 
                ref="fileInput" 
                type="file" 
                style="display: none;" 
                accept="image/*"
                @change="onFileChange"
                >

                <v-btn
                    :loading = "loading"
                    :disabled = "!valid || !image || loading"
                    @click="createAd"
                    depressed
                    color="primary"
                    >
                Create ad
                </v-btn>
                </v-col>
            </v-row>
            
            
        </v-card-actions> 
      </v-card>

           </v-col>
       </v-row>
    </v-container> 
</template>

<script>
  export default {
    data: () => ({

      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      valid: false,
      title: '',
      description: '',
      promo: false,
      image: null,
      src: ''
 
    }),
    computed: {
        loading () {
            return this.$store.getters.loading
        }
    },
    methods: {
        createAd () {
            if(this.valid && this.image)
            {
                //logic
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    image: this.image
                }
                this.$store.dispatch('createAd', ad)
                .then(() => {
                    this.$router.push('/list')
                })
                .catch(() => {})
            }
        },
        triggerUpload () {
            this.$refs.fileInput.click()
        },
        onFileChange (event) {
            const file = event.target.files[0]
            const reader = new FileReader()

            reader.onload = e => {
                this.src = reader.result
                //this.src = e.target.result
                console.log(e)
                
            }
            reader.readAsDataURL(file)
            this.image = file
        }
    }
  }
</script>