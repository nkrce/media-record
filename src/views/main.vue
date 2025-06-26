<script setup>
import { ref } from "vue";
import { computed } from "vue";
import ListStructure from "@/components/ListStructure.vue";
import CardElement from "@/components/CardElement.vue";
import ListButton from "@/components/ListButton.vue";

// ikone/logo za liste
import appLogo from "@/assets/app_logo.png";
import booksIcon from "@/assets/books_icon.png";
import moviesIcon from "@/assets/movies_icon.png";
import gamesIcon from "@/assets/games_icon.png";
import musicIcon from "@/assets/music_icon.png";

const Popup = ref(false);
const selectList = ref("mainPage");
const createNew = ref("start");

// list buttons
const listButtons = ref([
  { img: booksIcon, title: "Books" },
  { img: moviesIcon, title: "Movies" },
  { img: gamesIcon, title: "Games" },
  { img: musicIcon, title: "Music" },
]);

// dodavanje novog list button
const newListButton = ref({
  img: "",
  title: "",
});

// array za liste i elemente listi
const listElements = ref([
  {
    title: "Books",
    cards: [
      { img: booksIcon, title: "Book Title 1", comment: "Review comment with more text to test out scroll bar bla bla bla bla blabla bla bla bla blabla bla bla bla bla", rating: "4",},
      { img: booksIcon, title: "Book Title 2", comment: "Review comment", rating: "3",},
      { img: booksIcon, title: "Book Title 3", comment: "Review comment", rating: "3.5",},
      { img: booksIcon, title: "Book Title 4", comment: "Review comment", rating: "5",},
    ],
  },
  {
    title: "Movies",
    cards: [
      { img: moviesIcon, title: "Movie Title 1", comment: "Review comment", rating: "4",},
      { img: moviesIcon, title: "Movie Title 2", comment: "Review comment", rating: "3",},
      { img: moviesIcon, title: "Movie Title 3", comment: "Review comment", rating: "3.5",},
      { img: moviesIcon, title: "Movie Title 4", comment: "Review comment", rating: "5",},
    ],
  },
  {
    title: "Games",
    cards: [
      { img: gamesIcon, title: "Game Title 1", comment: "Review comment", rating: "4",},
      { img: gamesIcon, title: "Game Title 2", comment: "Review comment", rating: "3",},
      { img: gamesIcon, title: "Game Title 3", comment: "Review comment", rating: "3.5",},
      { img: gamesIcon, title: "Game Title 4", comment: "Review comment", rating: "5",},
    ],
  },
  {
    title: "Music",
    cards: [
      { img: musicIcon, title: "Music Title 1", comment: "Review comment", rating: "4",},
      { img: musicIcon, title: "Music Title 2", comment: "Review comment", rating: "3",},
      { img: musicIcon, title: "Music Title 3", comment: "Review comment", rating: "3.5",},
      { img: musicIcon, title: "Music Title 4", comment: "Review comment", rating: "5",},
    ],
  },
]);

// dodavanje nove liste i button-a za navigaciju
const addList = () => {
  const title = newListButton.value.title.trim();
  if (!title) return;
  // dodavanje nove liste u listElements
  listElements.value.unshift({
    title,
    cards: [],
  });
  // dodavanje novog button-a u listButtons
  listButtons.value.push({
    title,
    img: newListButton.value.img || appLogo,
  });

  newListButton.value = {
    title: "",
    img: appLogo,
  };

  createNew.value = 'start';
  Popup.value = false;
};

// dodavanje elementa u listu 
const newCardElement = ref({
  listTitle: '',
  img: '',
  title: '',
  comment: '',
  rating: ''
});

const addCardElement = () => {
  const list = listElements.value.find(element => element.title === newCardElement.value.listTitle);
  if (!list) return;

  list.cards.push({
    img: newCardElement.value.img || appLogo,
    title: newCardElement.value.title.trim(),
    comment: newCardElement.value.comment.trim(),
    rating: newCardElement.value.rating
  });

  newCardElement.value = {
    listTitle: '',
    img: '',
    title: '',
    comment: '',
    rating: ''
  };

  createNew.value = 'start';
  Popup.value = false;
}


// aktivna lista
const activeList = computed(() => {
  return listElements.value.find((list) => list.title === selectList.value);
});
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full h-11 bg-gradient-to-b from-violet-950 to-transparent text-white z-50 shadow-md"
  >
    <div class="w-full flex items-center h-full px-4">
      <button @click="selectList = 'mainPage'">
        <div class="flex items-center gap-2">
          <img
            src="../assets/app_logo.png"
            alt="Logo"
            class="w-8 h-8 object-contain"
          />
          <h1 class="text-lg font-bold">Media Record</h1>
        </div>
      </button>

      <nav class="ml-auto flex gap-4">
        <RouterLink to="/">
          <button
            class="px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 text-white rounded-lg transition-all shadow-lg cursor-pointer hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
            Log out
          </button>
        </RouterLink>
      </nav>
    </div>
  </header>

  <div class="pt-15 items-center justify-center text-center gap-4">
    <h1 class="text-2xl">Welcome back!</h1>
  </div>

  <!--buttons za navigiranje kroz liste -->
  <div
    class="flex flex-wrap justify-center items-center gap-2 p-2 rounded-lg w-fit pt-10 mx-auto"
  >
    <ListButton
      v-for="(list, index) in listButtons"
      :key="'list-' + index"
      :imgSrc="list.img"
      :title="list.title"
      @click="selectList = list.title"
    />
  </div>

  <br />

  <!--ListStructure component za sve liste i CardElement unutar listi-->
  <div v-if="activeList">
    <ListStructure :title="activeList.title">
      <CardElement
        v-for="(card, index) in activeList.cards"
        :key="index"
        :imgSrc="card.img"
        :title="card.title"
        :comment="card.comment"
        :rating="card.rating"
      />
    </ListStructure>
  </div>

  <!-- button koji je uvijek u doljnem desnom kutu stranice koji nas vrati na početak stranice gdje su tipovi lista -->
  <button
    onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
    class="fixed bottom-4 right-4 z-50 p-4 bg-emerald-100/50 hover:bg-violet-200/50 text-white rounded-full shadow-lg transition duration-300"
    aria-label="Scroll to top">
    <img src="../assets/up_icon.png" class="h-5 w-5 object-scale-down mx-auto block"/>
  </button>

  <!-- button za kreiranje nove liste i/ili nove stavke list; pop up za dodavanje liste/elementa liste -->
  <button
    @click="Popup = true"
    class="fixed top-20 right-4 z-50 p-4 bg-emerald-100/50 hover:bg-violet-200/50 text-white rounded-full shadow-lg transition">
    <img src="../assets/create_icon.png" class="h-5 w-5 object-scale-down mx-auto block"/>
  </button>

  <div v-if="Popup"
    class="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
    <div class="p-6 rounded-xl max-w-xl w-full relative">
      <button
        @click="Popup = false"
        class="absolute top-5 right-5 text-white font-bold text-3xl">
        &times;
      </button>
      <!--izgled za pop up za odabir dodavanje liste ili stavke liste-->
      <div v-if="createNew === 'start'"
        class="inset-0 flex items-center justify-center p-4">
        <div class="bg-gray-800 shadow-xl rounded-xl p-6 max-w-md w-full">
          <h2 class="text-3xl font-bold mb-4 text-white text-center">
            Create new:
          </h2>

          <div class="flex flex-col justify-between items-center gap-3">
            <button
              @click="createNew = 'list'"
              class="px-4 py-2 bg-violet-900 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
              LIST
            </button>

            <p class="text-white text-2xl font-semibold">or</p>

            <button
              @click="createNew = 'element'"
              class="px-4 py-2 bg-emerald-600 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
              LIST ELEMENT/REVIEW
            </button>
          </div>
        </div>
      </div>

      <!--izgled za pop up za dodavanje liste -->
      <div v-else-if="createNew === 'list'"
        class="inset-0 flex items-center justify-center p-4">
        <div class="bg-gray-800 shadow-xl rounded-xl p-6 max-w-md w-full">
          <h2 class="text-3xl font-bold mb-4 text-white text-center">
            New list:
          </h2>

          <input
            v-model="newListButton.title"
            @keyup.enter="addList"
            placeholder="List name..."
            type="name"
            class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
          />
          <!--mozda zamijeniti za upload image-->
          <input
            v-model="newListButton.img"
            placeholder="List image url..."
            type="image-url"
            class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
          />

          <div class="flex items-center justify-between gap-3">
            <button @click="createNew = 'start'"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
              Back
            </button>

            <button @click="addList"
              class="px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
              create
            </button>
          </div>
        </div>
      </div>

      <!--izgled za pop up za dodavanje stavke liste -->
      <div
        v-else-if="createNew === 'element'"
        class="inset-0 flex items-center justify-center p-4"
      >
        <div class="bg-gray-800 shadow-xl rounded-xl p-6 max-w-md w-full">
          <h2 class="text-3xl font-bold mb-4 text-white text-center">
            New list element/review:
          </h2>

          <div class="flex items-center gap-2 mb-4">
            <label for="list-options" class="text-base font-medium text-white">
              List:
            </label>
            <select v-model="newCardElement.listTitle"
              id="list-options"
              class="w-30 p-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:border-gray-500 transition-all">
              
              <option
                v-for="(list, index) in listButtons"
                :key="'list-' + index"
                :value="list.title">
                {{ list.title }}
              </option>
            </select>
          </div>

          <!--mozda zamijeniti za upload image-->
          <input v-model="newCardElement.img"
            placeholder="Image url..."
            type="image-url"
            class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
          />
          <input v-model="newCardElement.title"
            placeholder="Title..."
            type="name"
            class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
          />
          <input  v-model="newCardElement.comment"
            placeholder="Comment..."
            type="name"
            class="w-full p-3 mb-4 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
          />
          <!--rating-->
          <div class="flex items-center gap-2 mb-4">
            <p>Rating:</p>
            <input  v-model="newCardElement.rating"
              class="p-2 mb-2 w-12 bg-gray-700 border border-gray-600 hover:border-gray-500 transition-all rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white placeholder-gray-400"
            />
            <p>/5★</p>
          </div>

          <div class="flex items-center justify-between gap-3">
            <button @click="createNew = 'start'"
              class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500">
              Back
            </button>

            <button @click="addCardElement"
              class="px-4 py-2 bg-gradient-to-br from-violet-700 to-emerald-500 border border-white text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
              create
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>