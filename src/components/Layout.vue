<script setup>
import Navbar from '@/components/Navbar/Navbar.vue';
import Sidebar from '@/components/Sidebar/Sidebar.vue';

const props = defineProps({ showNavbar: Boolean });
</script>

<template>
    <div class="min-h-screen flex">
        <Sidebar />
        <div class="flex flex-col flex-1">
            <Navbar v-if="props.showNavbar" />
            <main class="flex-1 bg-gray-100">
                <slot></slot>
            </main>
        </div>
    </div>
</template>