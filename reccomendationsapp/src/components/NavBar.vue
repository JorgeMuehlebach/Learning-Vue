<template>

  <nav class="grey darken-4" v-if="!$route.meta.loginState">
    <v-toolbar flat >
      <v-app-bar-nav-icon class="grey--text" @click="loadDrawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-regular">Reccomendations Hub</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-btn  outlined to = "/"  class = "hide1 mx-2">
        logout 
      </v-btn>
    </v-toolbar>


    
    <v-navigation-drawer temporary app v-model="drawer" class="indigo" width="300">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/yoshi.png" />
          </v-avatar>
          <p class="font-weight-bold display-1 mt-1">{{user}}</p>
        </v-flex>
        <v-flex class="mt-4 mb-3 mx-2">
            <popup/>
        </v-flex>
      </v-layout>

      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
</nav>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import popup from '@/components/Popup.vue'

export default {
  name: 'navbar',
  components: {
    popup
  },
   data() {
    return {
      drawer: false,
      user: '',
      links: [
        { icon: "mdi-format-list-bulleted", text: "Reccomendations", route: "/MyRecs" },
        { icon: "mdi-chart-scatter-plot", text: "Statistics", route: "/statistics" }
      
      ]
    }
},
methods: {
  loadDrawer: function() {
    this.drawer = !this.drawer;
    this.user = this.$store.state.currentUser.userName;
  }
}
}

</script>


