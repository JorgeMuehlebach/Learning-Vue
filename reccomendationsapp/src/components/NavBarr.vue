<template>
  <nav class="grey lighten-4">
    <v-toolbar flat >
      <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer">
      </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Reccomendations</span>
        <span>Hub</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>


      <v-btn flat text color="grey">
        <span>Sign out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>
    
    <v-navigation-drawer temporary app v-model="drawer" class="indigo">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" />
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
            <Popup/>
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

    <!-- router-view renders a component -->
  </nav>
</template>

<script>
import Popup from './Popup'

export default {
  components: { Popup },  
  name: "NavBar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account", text: "Team", route: "/team" }
      ]
    };
  }
};
</script>
