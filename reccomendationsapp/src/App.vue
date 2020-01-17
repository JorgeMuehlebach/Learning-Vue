<template>
  <v-app>
    <NavBar/>
    <v-content class="mx-4 mb-4"> 
      <!-- margin along the x axis with length of 4 -->
      <router-view/>
    </v-content>
  
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  })
};
</script>
