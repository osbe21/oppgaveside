<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Searchbar from '@/components/Navbar/Searchbar.vue';
import ProfileButton from '@/components/Navbar/ProfileButton.vue';

const route = useRoute();
const auth = getAuth();

const isLoggedIn = ref(Boolean(auth.currentUser));

onAuthStateChanged(auth, (user) => isLoggedIn.value = Boolean(user));

const routeName = computed(() => route.name);

</script>

<template>
    <nav class="sticky top-0 h-20 px-8 flex items-center gap-6 shadow-md bg-white">
        <h2 class="text-3xl font-semibold mr-auto">
            {{ routeName }}
        </h2>

        <Searchbar />

        <ProfileButton />
    </nav>
</template>