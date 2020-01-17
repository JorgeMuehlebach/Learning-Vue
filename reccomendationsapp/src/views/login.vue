<template>
  <div class="login">
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
          <v-btn color="info" class="mx-2"
          >Sign in</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'login',
  components: {
    //HelloWorld
  }
}

</script>