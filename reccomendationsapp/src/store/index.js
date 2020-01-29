import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    currentUser: {
      userName: "default",
      passWord: "default"
    },
    users: [
      {userName: "John", passWord: "1234"},
      {userName: "Robert", passWord: "123"}
     
    ],
    Reviews: [
      { title: 'Star Wars The clone wars', person: 'John', due: '1st Jan 2019', rating: '3/5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Step brothers', person: 'John', due: '10th Jan 2019', rating: '5/5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Stranger Things', person: 'Robert', due: '20th Dec 2018', rating: '4/5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: '27 dresses', person: 'Robert', due: '20th Oct 2018', rating: '4/5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    ]
  },
  mutations: {
  },
  actions: {
    actionA ( {commit, state}, userInfo) {
      if(commit){
        commit;
      }
      return new Promise((resolve, reject) => {
        setTimeout(() => {
         // var uthenticated = false;
          state.users.forEach((user)=>{
            if(user.userName == userInfo.userName && user.passWord == userInfo.passWord) {
              state.currentUser.userName = userInfo.userName;
              state.currentUser.passWord = userInfo.passWord; //should do this with mutate
              resolve();
              return;
            }
          }); 
            


          
          // if(userInfo.userName == "check") {
          //   resolve();

          // }
         
            reject();
          

          // commit('someMutation')
          // resolve()
        }, 1000)
      })
    }
  },
  modules: {
  }
})
