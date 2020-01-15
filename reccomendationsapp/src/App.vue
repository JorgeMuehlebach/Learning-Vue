<template>
  <v-app>
    <h1 class="text-center myDIV">
      Reccomendations Hub
    </h1>
    <v-card class="mx-auto mt-7 myDIV" width="600">
      <v-card-title> Login </v-card-title>
      <v-card-text >
        <v-form class= "mx-6">
          <v-text-field 
          label="Username"
          prepend-icon="mdi-lock"
          />
          <v-text-field 
          type="password"
          label="Password"
          prepend-icon="mdi-account-circle"
          />
        </v-form>
        <v-card-actions>
          <v-btn color="success" class="mx-2">Register</v-btn>
          <v-btn color="info" class="mx-2" to="/NavBar"
          v-on:click="firstFunction"
          >Sign in</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  <router-view/>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    //HelloWorld,
  },

  data: () => ({
    //
  }),
  methods: {
    myFunction: function() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
  }
};
</script>
