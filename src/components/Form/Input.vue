<script setup>

const props = defineProps(['label', 'type']);

const model = defineModel();

</script>

<template>
    <label class="w-full px-4 font-semibold">
        {{ props.label }}
        <br>
        <input v-model="model" :type="props.type" class="w-full h-8 pl-2 rounded border outline-none">
    </label>
</template>