<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps(['to']);

</script>

<template>
    <RouterLink :to="props.to" class="p-5 flex items-center gap-3 text-lg hover:bg-white hover:bg-opacity-5">
        <slot name="icon"></slot>
        <slot name="text">Link</slot>
    </RouterLink>
</template>