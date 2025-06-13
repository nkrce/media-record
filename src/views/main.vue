<script setup>
 // JS - logika komponente
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

  <div class="flex flex-wrap gap-2 p-2 rounded-lg w-fit pt-10 mx-auto"> <!--zamijeniti logo za razlicite liste kasnije-->
        <button  class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition">
          <img src="../assets/books_icon.png" alt="Books logo" class="h-30 w-65 object-scale-down mx-auto block"/> <br>
          <p>Books</p> 
        </button>
        <button class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition">
          <img src="../assets/app_logo.png" alt="Movies logo" class="h-30 w-65 object-scale-down mx-auto block"/> <br>
          <p>Movies</p>
        </button>
        <button class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition">
          <img src="../assets/app_logo.png" alt="Games logo" class="h-30 w-65 object-scale-down mx-auto block"/> <br>
          <p>Games</p>
        </button>
        <button class="bg-gray-800/50 rounded-xl p-2 w-50 h-50 flex flex-col justify-center items-center hover:bg-emerald-600/40 transition">
          <img src="../assets/music_icon.png" alt="Music logo" class="h-30 w-65 object-scale-down mx-auto block"/> <br>
          <p>Music</p>
        </button>
  </div>

  <div class="pt-15 items-center justify-center text-center gap-4">
     <h1 class="text-2xl">Books</h1>
  </div>
  <div class="pt-15 items-center justify-center text-center gap-4">
     <h1 class="text-2xl">Movies</h1>
  </div>
  <div class="pt-15 items-center justify-center text-center gap-4">
     <h1 class="text-2xl">Games</h1>
  </div>
  <div class="pt-15 items-center justify-center text-center gap-4">
     <h1 class="text-2xl">Music</h1>
  </div>

</template>

