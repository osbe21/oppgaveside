<script setup>
import { ref } from 'vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Searchbar from '@/components/Navbar/Searchbar.vue';
import ProfileButton from '@/components/Navbar/ProfileButton.vue';

const auth = getAuth();

const isLoggedIn = ref(Boolean(auth.currentUser));

onAuthStateChanged(auth, (user) => isLoggedIn.value = Boolean(user));

</script>

<template>
    <nav class="sticky top-0 h-20 px-8 flex items-center gap-6 shadow-md bg-white">
        <h2 class="text-3xl mr-auto">Side</h2>

        <Searchbar />

        <ProfileButton />
    </nav>
    <!-- <nav class="sticky top-0 h-20 px-5 flex justify-between items-center bg-white shadow-md">
        <div class="flex-1">
            <RouterLink to="/"><h1 class="font-display text-3xl font-semibold">Side</h1></RouterLink>
        </div>

        <div class="flex-1 relative flex items-center">
            <input placeholder="Søk..." type="text" class="w-full h-10 pl-5 border rounded-lg">
            <button class="absolute size-8 right-1 border rounded-lg text-xs">Søk</button>
        </div>

        <div class="flex-1 flex justify-end items-center gap-5">
            <RouterLink to='/alldocuments'>Alle Tekster</RouterLink>
            <RouterLink to='/upload'>Last Opp</RouterLink>
            <RouterLink v-if="isLoggedIn" to="/profile">Min Profil</RouterLink>
            <RouterLink v-else to="/login">Log Inn</RouterLink>
        </div>
    </nav> -->
</template>