<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Reccomendation</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title
          >Add a New Reccomendation</v-card-title
        >
        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="newReview.title"
              prepend-icon="mdi-folder"
              :rules="inputRules"
            ></v-text-field>
            
            <v-textarea
              label="Information"
              v-model="newReview.content"
              prepend-icon="mdi-border-color"
              :rules="inputRules"
            ></v-textarea>
        
             <v-text-field
              label="Rating"
              v-model="newReview.rating"
              prepend-icon="mdi-star-outline"
              :rules="inputRules"
            ></v-text-field>

            <v-menu max-width="290">
              <template v-slot:activator="{ on }">
                <v-text-field
                  :value="formattedDate"
                  label="Date"
                  prepend-icon="mdi-calendar-range"
                  v-on="on"
                  :rules="inputRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="newReview.date"></v-date-picker>
            </v-menu>
            <v-btn color="success" class="mx-0 mt-3" @click="submit">
              add reccomendation</v-btn
            >
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

import format from 'date-fns/format';

import parseISO from 'date-fns/parseISO';

export default {
  data() {
    return {
      newReview: {
        title: "",
        content: "",
        date: null,
        rating: ''
      },
      
      inputRules: [
        v => v.length >=3 || 'Minimum length is 3 characters'

      ]
    };
  },
  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        this.newReview.person = this.$store.state.currentUser.userName;
        this.$store.state.Reviews.push(this.newReview);
        //console.log(this.title, this.content)

      }
    }
  },
  computed: {
   formattedDate(){
    return this.due ? format(parseISO(this.due), 'do MMM yyyy') : ''
   },
  }
};
</script>
