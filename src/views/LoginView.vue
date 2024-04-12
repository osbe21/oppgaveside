<script setup>
import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import Input from '@/components/Form/Input.vue';
import SubmitButton from '@/components/Form/SubmitButton.vue';

const router = useRouter();
const auth = getAuth();

const email = ref('');
const password = ref('');

const errorMessage = ref('');

const login = () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(userCredentials => router.push('/'))
        .catch(error => errorMessage.value = error.message);
};
</script>

<template>
    <nav class="h-24 pl-8 flex items-center">
        <RouterLink to="/" class="my-2">
            <h1 class="text-3xl">LOGO</h1>
        </RouterLink>
    </nav>
    <section class="w-1/3 mx-auto flex flex-col items-center gap-8">
        <p v-if="errorMessage.length">{{ errorMessage }}</p>

        <h1 class="text-5xl">Log Inn</h1>

        <form @submit.prevent="login" class="w-full flex flex-col items-center gap-8">
            <Input v-model="email" label="Email" />
            <Input v-model="password" label="Passord" type="password" />
            <SubmitButton>
                Log Inn
            </SubmitButton>
        </form>

        <p>Har du ikke en bruker? <RouterLink to='/signup' class="text-blue-600">Lag en her</RouterLink></p>
    </section>
</template>