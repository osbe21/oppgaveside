<script setup>
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const router = useRouter();
const auth = getAuth();

const email = ref('');
const password = ref('');

const errorMessage = ref('');

const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(userCredentials => router.go(-1))
        .catch(error => errorMessage.value = error.message);
};
</script>

<template>
    <section class="w-2/3 h-screen m-auto shadow-md">
        <p v-if="errorMessage.length">{{ errorMessage }}</p>
        <h1 class="text-5xl">Log Inn</h1>
        <input v-model="email" placeholder="Email" type="text" class="block border">
        <input v-model="password" placeholder="Passord" type="password" class="block border">
        <button @click="login" class="p-2 border">Log Inn</button>
        <p>Har du ikke en bruker? <RouterLink to='/signup' class="text-blue-600">Lag en her</RouterLink></p>
    </section>
</template>