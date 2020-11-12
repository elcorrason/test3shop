<template>
   <v-container>
      <v-card width=400 class="mx-auto mt-5">
        <v-card-title>
          <h1 class="display-1">Registration</h1>
        </v-card-title>
        <v-card-text>
            <v-form ref="form"
                    v-model="valid"
                    validation
                    >
                <v-text-field
                name="email"
                type="email"
                v-model="email"
                :rules="emailRules"
                label="Email"
                prepend-icon="mdi-email"
                required                
                 />
                <v-text-field
                name="password"
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                :rules="passRules"
                :counter="6"
                required
                
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                
                 />
                 <!-- confirm password -->
                <v-text-field
                name="confPassword"
                label="Confirm password"
                :type="showPassword ? 'text' : 'password'"
                v-model="confPassword"
                :rules="confPassRules"
                :counter="6"
                required
                
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                
                 /> 
            </v-form>
        </v-card-text> 
        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn 
            color="info"
            @click="onSubmit"
            >Create account</v-btn>
        </v-card-actions> 
      </v-card>
    </v-container> 
</template>

<script>
export default {
      data: () => ({
        showPassword: false,

        valid: false,

        email: '',
        emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
        password: '123456',
        passRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 6 characters',
      ],
        confPassword: '',
        confPassRules: [
        v => !!v || 'Password is required',
        // v => v === this.password || 'Password shoud match',
      ]

      }),
      methods: {
          onSubmit() {
            //if (this.$refs.form.validate()) {
              const user = {
                email: this.email,
                password: this.password
              }
            //}
             this.$store.dispatch('registerUser', user)

            //console.log(user)
          }
      }
};
</script>