<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Input from '@/components/Form/Input.vue';
import SubmitButton from '@/components/Form/SubmitButton.vue';

const router = useRouter();

const email = ref('');
const password = ref('');

const errorMessage = ref('');

const auth = getAuth();

const signup = () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(userCredentials => router.go(-1))
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

        <h1 class="text-5xl">Opprett En Bruker</h1>

        <form @submit.prevent="signup" class="w-full flex flex-col items-center gap-8">
            <Input v-model="email" label="Email" />
            <Input v-model="password" label="Passord" type="password" />
            <SubmitButton>
                Lag Bruker
            </SubmitButton>
        </form>

        <p>Har du allerede en bruker? <RouterLink to='/login' replace class="text-blue-600">Logg inn her</RouterLink></p>
    </section>
</template>