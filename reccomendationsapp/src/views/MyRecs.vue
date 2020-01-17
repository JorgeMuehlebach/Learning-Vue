<template>
  <div class="MyRecs">
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

// export default {
//   name: 'home',
//   components: {
//     LoginBar
//   }
// }

export default {
  name: 'MyRecs', 
  data () {
    return {
      Reviews: [
        { title: 'Star Wars The clone wars', person: 'Jorge Muehlebach', due: '1st Jan 2019', rating: '3/5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Step brothers', person: 'Jorge Muehlebach', due: '10th Jan 2019', rating: '5/5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Stranger Things', person: 'Jorge Muehlebach', due: '20th Dec 2018', rating: '4/5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: '27 dresses', person: 'Gouken', due: '20th Oct 2018', rating: '4/5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  computed: {
    myReviews(){
      return this.Reviews.filter(review => {
        return review.person === 'Jorge Muehlebach'
      })
    }
  } 
};
</script>
