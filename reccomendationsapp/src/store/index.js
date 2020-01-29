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
