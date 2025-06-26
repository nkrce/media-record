<script setup>
defineProps({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
});
</script>

<template>
  <button
    class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition"
  >
    <img :src="imgSrc" class="h-30 w-65 object-scale-down mx-auto block" />
    <br />
    <p>{{ title }}</p>
  </button>
</template>
