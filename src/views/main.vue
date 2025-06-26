<script setup>
import { ref } from 'vue'
import ListStructure from '@/components/ListStructure.vue'
import CardElement from '@/components/CardElement.vue'
import ListButton from '@/components/ListButton.vue'

// ikone/logo za liste
import booksIcon from '@/assets/books_icon.png'
import moviesIcon from '@/assets/movies_icon.png'
import gamesIcon from '@/assets/games_icon.png'
import musicIcon from '@/assets/music_icon.png'

const Popup = ref(false)
const selectList = ref('mainPage')
const createNew = ref('start') 

// list buttons

const listButtons = ref( [
  { img: booksIcon, title: "Books"},
  { img: moviesIcon, title: "Movies"},
  { img: gamesIcon, title: "Games"},
  { img: musicIcon, title: "Music"}
]);

// dodavanje novog list button
  const newListButton = ref({
        img: '',
        title: ''
    });

    const addListButton = () => {
        listButtons.value.unshift({ ...newListButton.value });
        newListButton.value = {img: '', title: ''};
    };

// arrays za cards listi
let booksCards = [];
let moviesCards = [];
let gamesCards = [];
let musicCards = [];

booksCards = [
  { img: booksIcon, title: "Book Title 1", comment: "Review comment", rating: "4"},
  { img: booksIcon, title: "Book Title 2", comment: "Review comment", rating: "3"},
  { img: booksIcon, title: "Book Title 3", comment: "Review comment", rating: "3.5"},
  { img: booksIcon, title: "Book Title 4", comment: "Review comment", rating: "5"},
];
moviesCards = [
  { img: moviesIcon, title: "Movie Title 1", comment: "Review comment", rating: "4"},
  { img: moviesIcon, title: "Movie Title 2", comment: "Review comment", rating: "3"},
  { img: moviesIcon, title: "Movie Title 3", comment: "Review comment", rating: "3.5"},
  { img: moviesIcon, title: "Movie Title 4", comment: "Review comment", rating: "5"}
];
gamesCards = [
  { img: gamesIcon, title: "Game Title 1", comment: "Review comment", rating: "4"},
  { img: gamesIcon, title: "Game Title 2", comment: "Review comment", rating: "3"},
  { img: gamesIcon, title: "Game Title 3", comment: "Review comment", rating: "3.5"},
  { img: gamesIcon, title: "Game Title 4", comment: "Review comment", rating: "5"}
];
musicCards = [
  { img: musicIcon, title: "Music Title 1", comment: "Review comment", rating: "4"},
  { img: musicIcon, title: "Music Title 2", comment: "Review comment", rating: "3"},
  { img: musicIcon, title: "Music Title 3", comment: "Review comment", rating: "3.5"},
  { img: musicIcon, title: "Music Title 4", comment: "Review comment", rating: "5"}
];



</script>

<template>
  <header class="fixed top-0 left-0 w-full h-11 bg-gradient-to-b from-violet-950 to-transparent text-white z-50 shadow-md">
   <div class="w-full flex items-center h-full px-4">

    <button @click="selectList = 'mainPage'">
    <div class="flex items-center gap-2">
      <img src="../assets/app_logo.png" alt="Logo" class="w-8 h-8 object-contain" />
      <h1 class="text-lg font-bold">Media Record</h1>
    </div>
    </button>

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

  <!--buttons za navigiranje kroz liste; dodati v-if za funkcionalno navigiranje listama-->
  <div class="flex flex-wrap justify-center items-center gap-2 p-2 rounded-lg w-fit pt-10 mx-auto"> 
        <ListButton
        v-for="(list, index) in listButtons"
        :key="'list-' + index"
        :imgSrc="list.img"
        :title="list.title"
        @click="selectList = list.title"
      />
  </div>

<br>

<!--ListStructure component-->
<!--BOOKS-->
 <ListStructure v-if="selectList === 'Books'" title="Books">
    <CardElement
        v-for="(card, index) in booksCards"
        :key="'book-' + index"
        :imgSrc="card.img"
        :title="card.title"
        :comment="card.comment"
        :rating="card.rating"
      />
 </ListStructure>

 <!--MOVIES-->
 <ListStructure v-if="selectList === 'Movies'" title="Movies">
<CardElement
        v-for="(card, index) in moviesCards"
        :key="'movie-' + index"
        :imgSrc="card.img"
        :title="card.title"
        :comment="card.comment"
        :rating="card.rating"
      />
 </ListStructure>

 <!--GAMES-->
 <ListStructure v-if="selectList === 'Games'" title="Games">
<CardElement
        v-for="(card, index) in gamesCards"
        :key="'game-' + index"
        :imgSrc="card.img"
        :title="card.title"
        :comment="card.comment"
        :rating="card.rating"
      />
 </ListStructure>

 <!--MUSIC-->
 <ListStructure v-if="selectList === 'Music'" title="Music">
<CardElement
        v-for="(card, index) in musicCards"
        :key="'music-' + index"
        :imgSrc="card.img"
        :title="card.title"
        :comment="card.comment"
        :rating="card.rating"
      />
 </ListStructure>


<!-- button koji je uvijek u doljnem desnom kutu stranice koji nas vrati na početak stranice gdje su tipovi lista -->
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

<div v-if="Popup" class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div class="p-6 rounded-xl max-w-xl w-full relative">
        <button @click="Popup = false" class="absolute top-5 right-5 text-white font-bold text-3xl">&times;</button>
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

                      <input v-model="newListButton.title" placeholder="List name..." type="name" 
                          class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">
                      <!--mozda zamijeniti za upload image-->
                      <input v-model="newListButton.img" placeholder="List image url..." type="image-url" 
                          class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">

                      <div class="flex items-center justify-between gap-3">

                          <button @click="createNew = 'start'"
                              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
                              Back
                          </button>

                          <RouterLink to="/main">
                            <button @click="addListButton" class="w-full px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
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

                      <!--rating-->
                      <div class="flex items-center gap-2 mb-4">
                          <p>Rating: </p>
                          <input 
                          class="p-2 mb-2 w-12 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400">
                          <p>/5★ </p>
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
      </div>
</div>  


</template>

