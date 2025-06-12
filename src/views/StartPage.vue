<template>

<div class="start flex flex-col items-center justify-center min-h-screen text-center gap-4">
<!-- dodati logo aplikacije i promijeniti velicinu slova -->
  <h1 class="font-bold text-4xl">Media Record</h1>
  <img src="../assets/app_logo.png" alt="App logo" class="h-40 w-75 object-scale-down mx-auto block"/>
  <p>Keep track of your favorite media in one place!</p>

  <nav class="flex flex-col gap-2">
    <RouterLink to="/login">
      <button class="w-full px-4 py-2 bg-gradient-to-b from-violet-900 to-violet-500 text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
                     hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
        Log in
      </button>
    </RouterLink>

    <RouterLink to="/signup">
      <button class="w-full px-4 py-2 bg-gradient-to-b from-emerald-700 to-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg cursor-pointer
                     hover:brightness-125 hover:scale-102 disabled:opacity-50 disabled:pointer-events-none">
        Sign up
      </button>
    </RouterLink>
  </nav>
</div>

</template>