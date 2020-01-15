<template>
  <v-app>
    <h1 class="text-center">
      Reccomendations Hub
    </h1>
    <v-card class="mx-auto mt-7" width="600">
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
        <v-card-action>
          <v-btn color="success" class="mx-2">Register</v-btn>
          <v-btn color="info" class="mx-2">Sign in</v-btn>
        </v-card-action>
      </v-card-text>
    </v-card>
  
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
};
</script>
