<template>
  <div class="login">
    <h1 class="text-center myDIV">
      Reccomendations Hub
    </h1>
    <v-card class="mx-auto mt-7 myDIV" width="600">
      <v-card-title> Login </v-card-title>
      <v-card-text >
        <v-form class= "mx-6">
          <v-alert v-if="message" type="warning">{{ message }} </v-alert>
          <v-text-field 
          label="Username"
          prepend-icon="mdi-lock"
          v-model="currentUser.userName"
          />
          <v-text-field 
          type="password"
          label="Password"
          prepend-icon="mdi-account-circle"
          v-model="currentUser.passWord"
          />
        </v-form>
        <v-card-actions>
          <v-btn color="success" class="mx-2" @click="register">Register</v-btn>
          <v-btn color="info" class="mx-2"
         
          @click="checkInfo"
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
  data() {
    return {
      currentUser: {
        userName: 'username',
        passWord: 'password'
      },
      message: false
    }
  },
  components: {
    //HelloWorld
  },
  methods: {
    checkInfo: function() {
      this.message = false;
      this.$store.dispatch('actionA', this.currentUser).then(() => {
        this.$router.push({ name: "MyRecs"});
        
      }, () => {
        this.message ='The username or password you have entered is incorrect'
      })
    },
    register() {
      this.$router.push({ name: "register"});
    
      
    }

  }
 
}

</script>