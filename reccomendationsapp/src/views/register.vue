<template>
  <div class="text-center">
  
      <v-card width="1000" class="mx-auto mt-7">

        <v-card-title class="headline grey lighten-2" primary-title
          >Register</v-card-title
        >
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Username"
              v-model="newAccount.userName"
              prepend-icon="mdi-account-circle"
              :rules="inputRules"
            ></v-text-field>
            
             <v-text-field
              label="Password"
              v-model="newAccount.passWord"
              prepend-icon="mdi-lock-question"
              :rules="inputRules"
            ></v-text-field>
     
          </v-form>
        </v-card-text>
        <v-card-actions>
             <v-btn color="red" class="mx-2 mt-3" @click="cancel">
              cancel</v-btn
            >
            <v-btn color="success" class="mx-2 mt-3" @click="submit">
              Sign up!</v-btn
            >

        </v-card-actions>
      </v-card>
  
  </div>
</template>

<script>



export default {
  data() {
    return {
      newAccount: {
        userName: "",
        passWord: ""
      },
      
      inputRules: [
        v => v.length >=3 || 'Minimum length is 3 characters'

      ]
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.$store.state.currentUser.userName = this.newAccount.userName;
        this.$store.state.users.push(this.newAccount);
        this.$router.push({ name: "MyRecs"});
        //console.log(this.title, this.content)

      }
    },
    cancel() {
        this.$router.push({ name: "login"});
        //console.log(this.title, this.content)
      
    }

  }
};
</script>
