<script setup>
defineProps({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: String, required: true }
})
</script>

<template>
<!-- early design za card element, možda dodati scroll funkciju za duže komentare, urediti dimenzije -->
<div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
    <img :src="imgSrc" class="w-full h-40 object-contain mb-4 rounded" />
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <p class="text-sm mb-2 italic text-gray-300">"{{ comment }}"</p>
    <p class="text-emerald-400 font-bold">Rating: {{ rating }}/5★</p>
</div>

</template>