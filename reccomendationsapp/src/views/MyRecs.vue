<template>
  <div class="MyRecs">
    <popup/>
    <!-- previously named home -->
    <br>
    <h1 class="subheading grey--text">My Reccomendations</h1>
    
    <v-container class="my-5">
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="review in myReviews" :key="review.title">
          <v-expansion-panel-header class="font-weight-bold subtitle-2">
            {{ review.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="grey--text">
            <div class="font-weight-bold"> {{ review.due }}</div>
            <br>
            <div>{{ review.content }}</div>
            <br>
            <div>
              <p class = "font-weight-bold">My Score: {{ review.rating }}</p>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import LoginBar from '@/components/LoginBar.vue'
import popup from '@/components/Popup.vue'

// export default {
//   name: 'home',
//   components: {
//     LoginBar
//   }
// }

export default {
  name: 'MyRecs', 
  components: {
    popup
  },
  data () {
    return {
      
    }
  },
  computed: {
    myReviews(){
      return this.$store.state.Reviews.filter(review => {
        return review.person === this.$store.state.currentUser.userName;
      })
    }
  } 
};
</script>
