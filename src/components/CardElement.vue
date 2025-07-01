<script setup>
defineProps({
  imgSrc: { type: String, required: true },
  title: { type: String, required: true },
  comment: { type: String, required: true },
  rating: { type: String, required: true }
});
const emit = defineEmits(['delete', 'update']); // za brisanje i uredivanje
</script>

<template>
<!-- early design za card element, možda dodati scroll funkciju za duže komentare, urediti dimenzije -->
<div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
  <div class="flex justify-end">
    <!--delete-->
    <button @click="$emit('delete')" class="absolute text-lg font-bold w-9 h-9 px-1 py-1 bg-gray-400/20 text-white rounded-full hover:bg-red-700/70">
      &times;
    </button>
  </div>
    <img :src="imgSrc" class="w-full h-40 object-contain mb-4 rounded" />
    <h2 class="text-lg font-semibold mb-2">{{ title }}</h2>
    <!--urediti scrollbar-->
    <p class="text-sm mb-2 italic text-gray-300 overflow-y-auto max-h-10">"{{ comment }}"</p> 
   <div class="flex justify-between">
    <p class="text-emerald-400 font-bold">Rating: {{ rating }}/5★</p>
    <!--edit-->
    <button @click="$emit('update')" class="text-xs px-2 py-1 bg-emerald-600/70 text-white border border-white rounded-xl hover:bg-gradient-to-r hover:from-violet-600 hover:to-emerald-5000 transition">
      EDIT ✎
    </button>
  </div>
</div>

</template>