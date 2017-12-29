/* eslint-disable */
import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'
require('firebase/firestore')

Vue.use(VueFire)

let config = {
  apiKey: "AIzaSyCVNrP2ocm7ao_3wn27eoTk0BslIMbVFi0",
  authDomain: "fir-samples-e0c32.firebaseapp.com",
  databaseURL: "https://fir-samples-e0c32.firebaseio.com",
  projectId: "fir-samples-e0c32",
  storageBucket: "fir-samples-e0c32.appspot.com",
  messagingSenderId: "1072541437827"
}

const firebaseApp = Firebase.initializeApp(config)

export default firebaseApp