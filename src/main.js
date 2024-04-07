import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCFxPWAjCjuvAB4fXPUrC5iR7VRAXolf78",
    authDomain: "stilside-61171.firebaseapp.com",
    projectId: "stilside-61171",
    storageBucket: "stilside-61171.appspot.com",
    messagingSenderId: "740971146348",
    appId: "1:740971146348:web:e968d50af8eeac44df3c49",
    measurementId: "G-NT03NYGHC8"
}

const fbApp = initializeApp(firebaseConfig)
getFirestore(fbApp)
getAuth(fbApp)

const app = createApp(App)

app.use(router)

app.mount('#app')
