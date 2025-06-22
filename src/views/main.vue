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

<!-- button za kreiranje nove liste i/ili nove stavke list; dodati pop up za dodavanje liste/stavke liste -->
<button class="fixed top-20 right-4 z-50 p-4 bg-emerald-100/50 hover:bg-violet-200/50 text-white rounded-full shadow-lg transition ">
  <img src="../assets/create_icon.png" class="h-5 w-5 object-scale-down mx-auto block"/>
</button>

<!--izgled za pop up za odabir dodavanje liste ili stavke liste-->

<div class="inset-0 flex items-center justify-center p-4">
        <div class="bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <h2 class="text-3xl font-bold mb-4 text-white text-center">Create new:</h2>
            
            <div class="flex flex-col justify-between items-center gap-3">

                <RouterLink to="/main">
                  <button class="w-full px-4 py-2 bg-violet-900 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
                     hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
                     LIST
                  </button>
                </RouterLink>

                <p class="text-white text-2xl font-semibold">or</p>

                <RouterLink to="/main">
                  <button class="w-full px-4 py-2 bg-emerald-600 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
                     hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
                     LIST ELEMENT/REVIEW
                  </button>
                </RouterLink>
            </div>

        </div>
    </div>

  <!--izgled za pop up za dodavanje liste -->
  <div class="inset-0 flex items-center justify-center p-4">
        <div class="bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <h2 class="text-3xl font-bold mb-4 text-white text-center">New list:</h2>

            <input placeholder="List name..." type="name" 
                class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">
            <!--mozda zamijeniti za upload image-->
            <input placeholder="List image url..." type="image-url" 
                class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">


           <div class="flex items-center gap-2 mb-4">
              <label for="list-options" class="text-base font-medium text-white">
                Choose the list type:
              </label>
              <select
                id="list-options"
                class="w-30 p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:border-gray-500 transition-all">
                <option value="list-classic">Classic list</option>
                <option value="review-list">Review list</option>
              </select>
           </div>
                
            <div class="flex items-center justify-end gap-3">

                <RouterLink to="/main">
                  <button class="w-full px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
                     hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
                     create
                  </button>
                </RouterLink>
            </div>

        </div>
    </div>

    <!--izgled za pop up za dodavanje stavke liste -->
  <div class="inset-0 flex items-center justify-center p-4">
        <div class="bg-gray-800 rounded-xl p-6 max-w-md w-full">
            <h2 class="text-3xl font-bold mb-4 text-white text-center">New list element/review:</h2>

            <div class="flex items-center gap-2 mb-4">
              <label for="list-options" class="text-base font-medium text-white">
                List:
              </label>
              <select
                id="list-options"
                class="w-30 p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:border-gray-500 transition-all">
                <option value="books">Books</option>
                <option value="movies">Movies</option>
                <option value="games">Games</option>
                <option value="music">Music</option>
              </select>
           </div>

           <!--mozda zamijeniti za upload image-->
           <input placeholder="Image url..." type="image-url" 
                class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">
            <input placeholder="Title..." type="name" 
                class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">
            <input placeholder="Comment..." type="name" 
                class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">

            <!--dodati i rating opciju-->

            <div class="flex items-center justify-end gap-3">

                <RouterLink to="/main">
                  <button class="w-full px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
                     hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
                     create
                  </button>
                </RouterLink>
            </div>

        </div>
    </div>

</template>

