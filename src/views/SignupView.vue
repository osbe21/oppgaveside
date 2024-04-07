<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const email = ref('');
const password = ref('');

const errorMessage = ref('');

const auth = getAuth();

const signup = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(userCredentials => console.log("yay"))
        .catch(error => errorMessage.value = error.message);
};
</script>

<template>
    <section class="w-2/3 h-screen m-auto shadow-md">
        <p v-if="errorMessage.length">{{ errorMessage }}</p>
        <h1 class="text-5xl capitalize">Opprett en bruker</h1>
        <input v-model="email" placeholder="Email" type="text" class="block border">
        <input v-model="password" placeholder="Passord" type="password" class="block border">
        <button @click="signup" class="p-2 border">Lag Bruker</button>
        <p>Har du allerede en bruker? <RouterLink to='/login' class="text-blue-600">Log inn her</RouterLink></p>
    </section>
</template>