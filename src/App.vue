<script setup>
import { RouterView } from 'vue-router';
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
	<div class="min-h-screen flex">
		<Sidebar />
		<div class="min-h-full flex-1">
			<Navbar />
			<main class="min-h-full bg-gray-100">
				<RouterView />
			</main>
		</div>
	</div>
</template>
