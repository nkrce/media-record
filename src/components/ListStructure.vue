<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
const emit = defineEmits(['delete']); // za brisanje liste
</script>

<template>
<div class="w-full p-4 pt-10 bg-gray-800/10 rounded-lg">
    <!-- Naslov liste i možda kasnije dodavanje mogućnosti za download pdf-a liste-->
    <div class="flex items-center border-b-3 border-white pb-4 justify-between mb-6">
      <h1 class="font-bold text-3xl">{{ title }}</h1>
      <button @click="$emit('delete', title)" class="text-sm px-3 py-1 bg-red-400/70 border border-white text-white rounded-lg hover:bg-red-900">
      Delete List
    </button>
    </div>
    <!-- Elementi liste, review odabrane medije -->
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <slot />
    </div>
  </div>
</template>