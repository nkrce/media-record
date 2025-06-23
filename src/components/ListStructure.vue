<script setup>
defineProps({
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
<div class="w-full p-4 pt-10 bg-gray-800/20 rounded-lg">
    <!-- Naslov liste i možda kasnije dodavanje mogućnosti za download pdf-a liste-->
    <div class="flex items-center justify-between mb-6">
      <h1 class="text-2xl">{{ title }}</h1>
    </div>
    <!-- Elementi liste, review odabrane medije -->
    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <slot />
    </div>
  </div>
</template>