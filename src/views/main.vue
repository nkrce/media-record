<script setup>
import { ref } from 'vue'
import CreateNew from '@/components/CreateNew.vue'

const Popup = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 w-full h-11 bg-gradient-to-b from-violet-950 to-transparent text-white z-50 shadow-md">
   <div class="w-full flex items-center h-full px-4">

    <div class="flex items-center gap-2">
      <img src="../assets/app_logo.png" alt="Logo" class="w-8 h-8 object-contain" />
      <h1 class="text-lg font-bold">Media Record</h1>
    </div>

     <nav class="ml-auto flex gap-4">
      <RouterLink to="/">
                <button class="px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 text-white rounded-lg transition-all shadow-lg cursor-pointer
                    hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
                    Log out
                </button>
      </RouterLink>
     </nav>
   </div>
 </header>

  <div class="pt-15 items-center justify-center text-center gap-4">
     <h1 class="text-2xl">Welcome back!</h1>
  </div>

  <div class="flex flex-wrap justify-center items-center gap-2 p-2 rounded-lg w-fit pt-10 mx-auto"> 
        <button  class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition">
          <img src="../assets/books_icon.png" alt="Books logo" class="h-30 w-65 object-scale-down mx-auto block"/> <br>
          <p>Books</p> 
        </button>
        <button class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition">
          <img src="../assets/movies_icon.png" alt="Movies logo" class="h-30 w-65 object-scale-down mx-auto block"/> <br>
          <p>Movies</p>
        </button>
        <button class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition">
          <img src="../assets/games_icon.png" alt="Games logo" class="h-30 w-65 object-scale-down mx-auto block"/> <br>
          <p>Games</p>
        </button>
        <button class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition">
          <img src="../assets/music_icon.png" alt="Music logo" class="h-30 w-65 object-scale-down mx-auto block"/> <br>
          <p>Music</p>
        </button>
  </div>

<br>

<!-- Dodati filtere na list buttons tako da se sljedeće liste pojave na stranici samo kad kliknemo na određeni tip liste -->
<!-- 1. Books -->
<div class="w-full p-4 pt-10 bg-gray-800/20 rounded-lg">
  <!-- Naslov liste i možda kasnije dodavanje mogućnosti za download pdf-a liste-->
  <div class="flex items-center justify-between  mb-6">
     <h1 class="text-2xl">Books</h1>
  </div>

  <!-- Stavke liste, review odabrane medije -->
   <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- early design za review card, možda dodati scroll funkciju za duže komentare, urediti dimenzije -->
    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/books_icon.png" alt="Book cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Book Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>

    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/books_icon.png" alt="Book cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Book Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>

    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/books_icon.png" alt="Book cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Book Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>
   </div>

   
</div>

<!-- 2. Movies -->
<div class="w-full p-4 pt-10 bg-gray-800/20 rounded-lg">
  <!-- Naslov liste i možda kasnije dodavanje mogućnosti za download pdf-a liste-->
  <div class="flex items-center justify-between  mb-6">
     <h1 class="text-2xl">Movies</h1>
  </div>

  <!-- Stavke liste, review odabrane medije -->
   <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- early design za review card, možda dodati scroll funkciju za duže komentare, urediti dimenzije -->
    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/movies_icon.png" alt="Movie cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Movie Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>

    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/movies_icon.png" alt="Movie cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Movie Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>

    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/movies_icon.png" alt="Movie cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Movie Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>
   </div>
</div>


<!-- 3. Games -->
<div class="w-full p-4 pt-10 bg-gray-800/20 rounded-lg">
  <!-- Naslov liste i možda kasnije dodavanje mogućnosti za download pdf-a liste-->
  <div class="flex items-center justify-between  mb-6">
     <h1 class="text-2xl">Games</h1>
  </div>

  <!-- Stavke liste, review odabrane medije -->
   <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- early design za review card, možda dodati scroll funkciju za duže komentare, urediti dimenzije -->
    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/games_icon.png" alt="Game cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Game Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>

    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/games_icon.png" alt="Game cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Game Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>

    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/games_icon.png" alt="Game cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Game Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>
   </div>
</div>



<!-- 4. Music -->
<div class="w-full p-4 pt-10 bg-gray-800/20 rounded-lg">
  <!-- Naslov liste i možda kasnije dodavanje mogućnosti za download pdf-a liste-->
  <div class="flex items-center justify-between  mb-6">
     <h1 class="text-2xl">Music</h1>
  </div>

  <!-- Stavke liste, review odabrane medije -->
   <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    <!-- early design za review card, možda dodati scroll funkciju za duže komentare, urediti dimenzije -->
    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/music_icon.png" alt="Music cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Music Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>

    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/music_icon.png" alt="Music cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Music Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>

    <div class="bg-violet-900/40 rounded-xl p-4 text-white shadow-md hover:shadow-lg transition">
      <img src="../assets/music_icon.png" alt="Music cover" class="w-full h-40 object-contain mb-4 rounded" />
      <h2 class="text-lg font-semibold mb-2">Music Title</h2>
      <p class="text-sm mb-2 italic text-gray-300">"Review comment."</p>
      <p class="text-emerald-400 font-bold">★★★★☆</p>
    </div>
   </div>
</div>


<!-- dodati button koji je uvijek u doljnem desnom kutu stranice koji nas vrati na početak stranice gdje su tipovi lista -->
<button 
  onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
  class="fixed bottom-4 right-4 z-50 p-4 bg-emerald-100/50 hover:bg-violet-200/50 text-white rounded-full shadow-lg transition duration-300"
  aria-label="Scroll to top">
  <img src="../assets/up_icon.png" class="h-5 w-5 object-scale-down mx-auto block"/>
</button>

<!-- button za kreiranje nove liste i/ili nove stavke list; pop up za dodavanje liste/elementa liste -->
<button @click="Popup = true"
  class="fixed top-20 right-4 z-50 p-4 bg-emerald-100/50 hover:bg-violet-200/50 text-white rounded-full shadow-lg transition ">
  <img src="../assets/create_icon.png" class="h-5 w-5 object-scale-down mx-auto block"/>
</button>

<div v-if="Popup" class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div class="p-6 rounded-xl max-w-xl w-full relative">
        <button @click="Popup = false" class="absolute top-5 right-10 text-white font-bold text-3xl">&times;</button>
        <CreateNew />
      </div>
</div>  

</template>

