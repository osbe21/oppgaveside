<script setup>

const emit = defineEmits(['click'])
</script>

<template>
    <button @click="emit('click')" type="submit" class="w-max px-4 py-2 rounded shadow-md text-white bg-sky-600 hover:bg-sky-700">
        <slot>
            Submit
        </slot>
    </button>
</template>