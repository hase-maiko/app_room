import Vue from 'vue'
import App from './App.vue'
import router from './router'
import jQuery from 'jquery'

Vue.config.productionTip = false

// ここから追加
import {
  firestorePlugin
} from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)

firebase.initializeApp({
  apiKey: "AIzaSyDZlMLcxiZIIGqfkxaVZwDqsU8zMw4U3x0",
  authDomain: "roomapp-19157.firebaseapp.com",
  databaseURL: "https://roomapp-19157.firebaseio.com",
  projectId: "roomapp-19157",
  storageBucket: "roomapp-19157.appspot.com",
  messagingSenderId: "617912716362",
  appId: "1:617912716362:web:d2253204baaf535e222ab3",
  measurementId: "G-5JWTB4YL0V"
})

export const db = firebase.firestore()
export const auth = firebase.auth()
// ここまで追加


new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
