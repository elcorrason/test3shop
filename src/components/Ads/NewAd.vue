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
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="150"
                max-width="250"
                src="https://picsum.photos/id/11/500/300"
            ></v-img>
            </v-col>
        </v-row>
        <v-card-actions>


        <v-row>
            <v-col >
            <v-btn
                color="blue-grey"
                class="ma-2 white--text"
                >
                Upload
                    <v-icon
                        right
                        dark
                    >
                        mdi-cloud-upload
                    </v-icon>
                </v-btn>
                <v-btn
                    :disabled = "!valid"
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
      promo: false
 
    }),
    methods: {
        createAd() {
            if(this.valid)
            {
                //logic
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo    
                }
                console.log(ad)
            }
        }
    }
  }
</script>