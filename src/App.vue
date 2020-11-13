<template>
<v-app>


<v-app-bar  app 
            color="primary"
            dark     
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" class="titleHeader"> Title </router-link>
        
        </v-toolbar-title>

        <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text 
        v-for="link in links"
        :key = "link.title"
        :to="link.url"
        >
          <v-icon left >{{ link.icon }}</v-icon>
          {{ link.title }}
        </v-btn>

      </v-toolbar-items>
      
</v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      
    >
      <v-list
        nav
        dense
        
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
         
        >
          <v-list-item 
          v-for="link in links"
          :key="link.title"
          :to="link.url"
          
          >
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
<!--  -->
  <v-main>

  <router-view></router-view>

  </v-main>

    <div >
      <v-snackbar
      :timeout="5000"
      :multi-line="true"
      @input="closeError"
    >
      {{ error }}
    <template v-slot:action="{ attrs }"> 
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="closeError"
          :value="true"
        >
          Close
        </v-btn>
      </template>
     </v-snackbar>
    </div>
</v-app>

</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    links: [
      { title: 'Login', icon: 'mdi-account', url: '/login' },
      { title: 'Registranion', icon: 'mdi-face', url: '/registration' },
      { title: 'Orders', icon: 'mdi-format-list-checkbox', url: '/orders' },
      { title: 'New ad', icon: 'mdi-plus-thick', url: '/new' },
      { title: 'My ads', icon: 'mdi-heart', url: '/list' }
    ]
  }),
  components: {}, 
 
  computed: {
    error () {
      return this.$store.getters.error
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    }
  }


};
</script>

<style scoped>
.titleHeader {
  color: white;
  text-decoration: none;
  cursor: pointer;
}
</style>
