<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();

const isLoggedIn = ref(Boolean(auth.currentUser));

onAuthStateChanged(auth, (user) => isLoggedIn.value = Boolean(user));

</script>

<template>
    <nav class="sticky top-0 h-20 px-5 flex justify-between items-center bg-zinc-50 shadow-md">
        <div class="flex-1">
            <RouterLink to="/"><h1 class="text-5xl">LOGO</h1></RouterLink>
        </div>

        <div class="flex-1 relative flex items-center ">
            <input placeholder="Søk..." type="text" class="w-full h-10 pl-5 border rounded-lg">
            <button class="absolute size-8 right-1 border rounded-lg text-xs">Søk</button>
        </div>

        <div class="flex-1 flex justify-end items-center gap-5">
            <RouterLink to='/alldocuments'>Alle Tekster</RouterLink>
            <RouterLink to='/upload'>Last Opp</RouterLink>
            <RouterLink v-if="isLoggedIn" to="/profile">Min Profil</RouterLink>
            <RouterLink v-else to="/login">Log Inn</RouterLink>
        </div>
    </nav>
</template>