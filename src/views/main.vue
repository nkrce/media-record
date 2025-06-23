<script setup>
import { ref } from 'vue'
import CreateNew from '@/components/CreateNew.vue'
import ListStructure from '@/components/ListStructure.vue'
import CardElement from '@/components/CardElement.vue'
import ListButton from '@/components/ListButton.vue'

import booksIcon from '@/assets/books_icon.png'
import moviesIcon from '@/assets/movies_icon.png'
import gamesIcon from '@/assets/games_icon.png'
import musicIcon from '@/assets/music_icon.png'

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

  <!--buttons za navigiranje kroz liste; dodati v-if za funkcionalno navigiranje listama-->
  <div class="flex flex-wrap justify-center items-center gap-2 p-2 rounded-lg w-fit pt-10 mx-auto"> 
        <ListButton
         :imgSrc="booksIcon"
         title="Books"
        />
        <ListButton
         :imgSrc="moviesIcon"
         title="Movies"
        />
        <ListButton
         :imgSrc="gamesIcon"
         title="Games"
        />
        <ListButton
         :imgSrc="musicIcon"
         title="Music"
        />
  </div>

<br>

<!-- Dodati filtere na list buttons tako da se sljedeće liste pojave na stranici samo kad kliknemo na određeni tip liste -->

<!--ListStructure component-->
<!--BOOKS-->
 <ListStructure title="Books">
<CardElement
      :imgSrc="booksIcon"
      title="Book Title"
      comment="Review comment"
      rating="★★★★☆"
    />
<CardElement
      :imgSrc="booksIcon"
      title="Book Title"
      comment="Review comment"
      rating="★★★★☆"
    />
  <CardElement
      :imgSrc="booksIcon"
      title="Book Title"
      comment="Review comment"
      rating="★★★★☆"
    />
 </ListStructure>

 <!--MOVIES-->
 <ListStructure title="Movies">
<CardElement
      :imgSrc="moviesIcon"
      title="Movie Title"
      comment="Review comment"
      rating="★★★★☆"
    />
<CardElement
      :imgSrc="moviesIcon"
      title="Movie Title"
      comment="Review comment"
      rating="★★★★☆"
    />
  <CardElement
      :imgSrc="moviesIcon"
      title="Movie Title"
      comment="Review comment"
      rating="★★★★☆"
    />
 </ListStructure>

 <!--GAMES-->
 <ListStructure title="Games">
<CardElement
      :imgSrc="gamesIcon"
      title="Game Title"
      comment="Review comment"
      rating="★★★★☆"
    />
<CardElement
      :imgSrc="gamesIcon"
      title="Game Title"
      comment="Review comment"
      rating="★★★★☆"
    />
  <CardElement
      :imgSrc="gamesIcon"
      title="Game Title"
      comment="Review comment"
      rating="★★★★☆"
    />
 </ListStructure>

 <!--MUSIC-->
 <ListStructure title="Music">
<CardElement
      :imgSrc="musicIcon"
      title="Music Title"
      comment="Review comment"
      rating="★★★★☆"
    />
<CardElement
      :imgSrc="musicIcon"
      title="Music Title"
      comment="Review comment"
      rating="★★★★☆"
    />
  <CardElement
      :imgSrc="musicIcon"
      title="Music Title"
      comment="Review comment"
      rating="★★★★☆"
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

<div v-if="Popup" class="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div class="p-6 rounded-xl max-w-xl w-full relative">
        <button @click="Popup = false" class="absolute top-5 right-10 text-white font-bold text-3xl">&times;</button>
        <CreateNew />
      </div>
</div>  

</template>

