<script setup>
import { ref } from 'vue';

const createNew = ref('start') 

</script>


<template>

<!--izgled za pop up za odabir dodavanje liste ili stavke liste-->

<div v-if="createNew === 'start'" class="inset-0 flex items-center justify-center p-4">
        <div class="bg-gray-800 shadow-xl rounded-xl p-6 max-w-md w-full">
            <h2 class="text-3xl font-bold mb-4 text-white text-center">Create new:</h2>
            
            <div class="flex flex-col justify-between items-center gap-3">

                <RouterLink to="/main">
                  <button @click="createNew = 'list'"
                     class="w-full px-4 py-2 bg-violet-900 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
                     hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
                     LIST
                  </button>
                </RouterLink>

                <p class="text-white text-2xl font-semibold">or</p>

                <RouterLink to="/main">
                  <button @click="createNew = 'element'"
                     class="w-full px-4 py-2 bg-emerald-600 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
                     hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
                     LIST ELEMENT/REVIEW
                  </button>
                </RouterLink>
            </div>

        </div>
    </div>

  <!--izgled za pop up za dodavanje liste -->
  <div v-else-if="createNew === 'list'" class="inset-0 flex items-center justify-center p-4">
        <div class="bg-gray-800 shadow-xl rounded-xl p-6 max-w-md w-full">
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
                
            <div class="flex items-center justify-between gap-3">

                <button @click="createNew = 'start'"
                    class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
                    Back
                </button>

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
  <div v-else-if="createNew === 'element'" class="inset-0 flex items-center justify-center p-4">
        <div class="bg-gray-800 shadow-xl rounded-xl p-6 max-w-md w-full">
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

            <div class="flex items-center justify-between gap-3">

                <button @click="createNew = 'start'"
                    class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
                    Back
                </button>

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