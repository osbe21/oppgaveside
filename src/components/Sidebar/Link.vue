<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['to']);

</script>

<template>
    <RouterLink :to="props.to" class="pl-6 py-5 flex items-center gap-5 text-lg transition-all hover:bg-white hover:bg-opacity-5">
        <slot name="icon"></slot>
        <slot name="text">Link</slot>
    </RouterLink>
</template>