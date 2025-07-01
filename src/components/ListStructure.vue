<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
});
const emit = defineEmits(['delete','update']); // za brisanje i uredivanje
</script>

<template>
<div class="w-full p-4 pt-10 bg-gray-800/10 rounded-lg">
    <!-- Naslov liste i možda kasnije dodavanje mogućnosti za download pdf-a liste-->
    <div class="flex items-center border-b-3 border-white pb-4 justify-between mb-6">
     <div class="flex items-center gap-4">
      <h1 class="font-bold text-3xl">{{ title }}</h1>
        <button @click="$emit('update')" class="text-3xl w-12 h-12 rounded-full flex items-center justify-center bg-transparent hover:bg-gradient-to-br hover:from-violet-600 hover:to-emerald-500 text-white shadow-lg transition duration-300">
          ✎
        </button>
     </div>
        <button @click="$emit('delete', title)" class="text-sm px-3 py-1 rounded-lg bg-red-400/70 border border-white text-white hover:bg-red-900">
          Delete List
        </button>
    </div>
    <!-- Elementi liste, review odabrane medije -->
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <slot />
    </div>
  </div>
</template>