<template>
  <nav class="grey darken-4">
    <v-toolbar>
      <v-btn text to = "/" class ="hide2 mx-2">
        Login
      </v-btn>
      <v-divider class="mx-4" vertical> </v-divider>
      <v-btn  text to = "/MyRecs" class = "hide1 mx-2">
        My Reccomendations
      </v-btn>
      <v-divider class="mx-4" vertical> </v-divider>
      <v-btn text to = "/statistics"  class = "hide1 mx-2">
        Statistics 
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'navbar',
  components: {
    //HelloWorld
  }
}

</script>
